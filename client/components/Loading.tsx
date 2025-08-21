import { Gamepad2, Loader2 } from "lucide-react";

interface LoadingProps {
  size?: "sm" | "md" | "lg";
  text?: string;
  fullScreen?: boolean;
}

export function Loading({ size = "md", text = "Carregando...", fullScreen = false }: LoadingProps) {
  const sizeClasses = {
    sm: "h-4 w-4",
    md: "h-8 w-8", 
    lg: "h-12 w-12"
  };

  const textSizes = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg"
  };

  const containerClasses = fullScreen 
    ? "fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center"
    : "flex items-center justify-center py-8";

  return (
    <div className={containerClasses}>
      <div className="flex flex-col items-center space-y-4">
        {/* Gaming Loading Animation */}
        <div className="relative">
          {/* Rotating Controller */}
          <div className="animate-spin">
            <Gamepad2 className={`${sizeClasses[size]} text-wakanda-purple`} />
          </div>
          
          {/* Pulsing Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-wakanda-purple to-wakanda-deep-purple rounded-full opacity-20 animate-pulse"></div>
        </div>

        {/* Loading Text */}
        <div className="text-center">
          <p className={`${textSizes[size]} font-medium text-foreground mb-2`}>
            {text}
          </p>
          
          {/* Loading Dots */}
          <div className="flex space-x-1 justify-center">
            <div className="w-2 h-2 bg-wakanda-purple rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-wakanda-deep-purple rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
            <div className="w-2 h-2 bg-wakanda-accent rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Alternative Spinner Loading for buttons and smaller spaces
export function LoadingSpinner({ className = "" }: { className?: string }) {
  return (
    <Loader2 className={`animate-spin ${className}`} />
  );
}

// Skeleton Loading for content
export function LoadingSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="space-y-4">
        <div className="h-4 bg-muted rounded w-3/4"></div>
        <div className="h-4 bg-muted rounded w-1/2"></div>
        <div className="h-4 bg-muted rounded w-5/6"></div>
      </div>
    </div>
  );
}
