import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "visits-count.json");

// In-memory store for active users on this server instance
// Maps a session ID or IP to their last heartbeat timestamp
const activeSessions = new Map<string, number>();

// Clean up expired sessions periodically (every 1 minute)
if (typeof global !== "undefined") {
  const globalAny = global as any;
  if (!globalAny.sessionsCleanupInterval) {
    globalAny.sessionsCleanupInterval = setInterval(() => {
      const now = Date.now();
      for (const [id, lastSeen] of activeSessions.entries()) {
        if (now - lastSeen > 15000) {
          activeSessions.delete(id);
        }
      }
    }, 60000);
  }
}

function getCount(): number {
  try {
    if (fs.existsSync(filePath)) {
      const data = fs.readFileSync(filePath, "utf8");
      const parsed = JSON.parse(data);
      return typeof parsed.count === "number" ? parsed.count : 0;
    }
  } catch (error) {
    console.error("Error reading visit count:", error);
  }
  return 0;
}

function saveCount(count: number) {
  try {
    fs.writeFileSync(filePath, JSON.stringify({ count }), "utf8");
  } catch (error) {
    console.error("Error writing visit count:", error);
  }
}

export async function GET(request: NextRequest) {
  const count = getCount();
  
  // Clean up active users
  const now = Date.now();
  for (const [id, lastSeen] of activeSessions.entries()) {
    if (now - lastSeen > 15000) {
      activeSessions.delete(id);
    }
  }
  
  const activeCount = Math.max(1, activeSessions.size); // at least 1 (the current user)
  
  return NextResponse.json({ visits: count, active: activeCount });
}

export async function POST(request: NextRequest) {
  let sessionId = "anonymous";
  let increment = true;
  try {
    const body = await request.json().catch(() => ({}));
    sessionId = body.sessionId || "anonymous";
    if (body.increment === false) {
      increment = false;
    }
  } catch (e) {
    // Ignore body parsing issues
  }
  
  // Register heartbeat/active session
  activeSessions.set(sessionId, Date.now());
  
  // Increment visit count
  let count = getCount();
  if (increment) {
    count += 1;
    saveCount(count);
  }
  
  // Clean up active users
  const now = Date.now();
  for (const [id, lastSeen] of activeSessions.entries()) {
    if (now - lastSeen > 15000) {
      activeSessions.delete(id);
    }
  }
  
  const activeCount = Math.max(1, activeSessions.size);
  
  return NextResponse.json({ visits: count, active: activeCount });
}
