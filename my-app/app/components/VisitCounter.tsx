"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function VisitCounter() {
  const [visits, setVisits] = useState<number>(0);
  const [liveUsers, setLiveUsers] = useState<number>(1);
  const [sessionId, setSessionId] = useState<string>("");
  const pathname = usePathname();

  // 1. Initialize session ID in client
  useEffect(() => {
    try {
      let id = sessionStorage.getItem("mcm_session_id");
      if (!id) {
        id = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        sessionStorage.setItem("mcm_session_id", id);
      }
      setSessionId(id);
    } catch (e) {
      setSessionId("anon-" + Date.now());
    }
  }, []);

  // 2. Track page view and handle transitions
  useEffect(() => {
    if (!sessionId) return;

    const trackPageView = async () => {
      try {
        const response = await fetch("/api/visits", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            sessionId: sessionId,
            increment: true, // Register this page transition
          }),
        });

        if (response.ok) {
          const data = await response.json();
          setVisits(data.visits);
          setLiveUsers(data.active);
        }
      } catch (e) {
        console.error("Failed to register visit:", e);
      }
    };

    trackPageView();
  }, [pathname, sessionId]);

  // 3. Heartbeat for online status (ping every 10 seconds without incrementing total visits)
  useEffect(() => {
    if (!sessionId) return;

    const runHeartbeat = async () => {
      try {
        const response = await fetch("/api/visits", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            sessionId: sessionId,
            increment: false, // Keep session active without inflating visits count
          }),
        });

        if (response.ok) {
          const data = await response.json();
          setVisits(data.visits);
          setLiveUsers(data.active);
        }
      } catch (e) {
        console.warn("Heartbeat error:", e);
      }
    };

    const interval = setInterval(runHeartbeat, 10000);
    return () => clearInterval(interval);
  }, [sessionId]);

  // Format numbers with thousands separators
  const formatNumber = (num: number) => {
    return new Intl.NumberFormat("es-CL").format(num);
  };

  if (visits === 0) {
    return (
      <div className="animate-pulse bg-surface-light/40 border border-surface-border/50 rounded-2xl p-4 w-full max-w-[280px] h-[72px]"></div>
    );
  }

  return (
    <div className="relative group overflow-hidden bg-surface-light/40 backdrop-blur-md border border-surface-border/80 rounded-2xl p-4 w-full max-w-[280px] transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_20px_rgba(99,102,241,0.15)]">
      {/* Decorative top gradient edge */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary/50 via-accent/50 to-secondary/50 opacity-70 group-hover:opacity-100 transition-opacity"></div>
      
      <div className="flex flex-col gap-2">
        {/* Total Visits counter */}
        <div className="flex items-center justify-between">
          <span className="text-xs text-muted font-medium tracking-wide uppercase">
            Visitas Reales
          </span>
          <span className="text-base font-bold text-foreground font-mono transition-all duration-500 tabular-nums">
            {formatNumber(visits)}
          </span>
        </div>

        {/* Live Users Counter */}
        <div className="flex items-center justify-between border-t border-surface-border/30 pt-2">
          <div className="flex items-center gap-1.5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-success"></span>
            </span>
            <span className="text-xs text-muted">En línea ahora</span>
          </div>
          <span className="text-xs font-semibold text-success bg-success/10 px-2 py-0.5 rounded-full border border-success/20 animate-pulse">
            {liveUsers} {liveUsers === 1 ? "activo" : "activos"}
          </span>
        </div>
      </div>
    </div>
  );
}
