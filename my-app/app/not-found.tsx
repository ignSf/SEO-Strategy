export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="text-8xl font-bold gradient-text mb-4">404</div>
        <h1 className="text-2xl font-bold mb-4">Page Not Found</h1>
        <p className="text-muted mb-8">
          Sorry, the page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let&apos;s get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/" className="btn-primary">
            <span>← Back to Home</span>
          </a>
          <a href="/#contact" className="btn-outline">
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}
