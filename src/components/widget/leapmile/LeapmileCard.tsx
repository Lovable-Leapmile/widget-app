import { HTMLAttributes, forwardRef, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface LeapmileCardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

const LeapmileCard = forwardRef<HTMLDivElement, LeapmileCardProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "bg-white border border-gray-200 shadow-lg rounded-xl overflow-hidden",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

LeapmileCard.displayName = "LeapmileCard";

interface LeapmileCardHeaderProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  variant?: "default" | "purple";
}

const LeapmileCardHeader = forwardRef<HTMLDivElement, LeapmileCardHeaderProps>(
  ({ className, children, variant = "default", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "border-b border-gray-100 py-2 px-4",
          variant === "purple" && "bg-[hsl(248,31%,40%)]",
          variant === "default" && "bg-white",
          className
        )}
        {...props}
      >
        {typeof children === "string" ? (
          <h3 className={cn(
            "text-center text-lg font-bold",
            variant === "purple" ? "text-white" : "text-[hsl(248,61%,22%)]"
          )}>
            {children}
          </h3>
        ) : (
          children
        )}
      </div>
    );
  }
);

LeapmileCardHeader.displayName = "LeapmileCardHeader";

interface LeapmileCardContentProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

const LeapmileCardContent = forwardRef<HTMLDivElement, LeapmileCardContentProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("p-4", className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

LeapmileCardContent.displayName = "LeapmileCardContent";

export default LeapmileCard;
export { LeapmileCard, LeapmileCardHeader, LeapmileCardContent };
