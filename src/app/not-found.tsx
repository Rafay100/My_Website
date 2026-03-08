import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center max-w-md px-4">
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
        <p className="text-muted-foreground mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <span className="inline-flex items-center justify-center h-11 px-8 rounded-lg font-medium text-white bg-gradient-to-r from-primary to-secondary shadow-lg hover:shadow-xl transition-all duration-300">
              <Home className="w-4 h-4 mr-2" />
              Go Home
            </span>
          </Link>
          <Link href="/contact">
            <span className="inline-flex items-center justify-center h-11 px-8 rounded-lg font-medium border-2 border-input bg-background hover:bg-accent hover:text-accent-foreground transition-all duration-300">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Contact Us
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
