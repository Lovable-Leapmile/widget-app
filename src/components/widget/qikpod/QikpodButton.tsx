import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

const qikpodButtonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "theme-button-primary",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        outline: "border border-border bg-background text-foreground hover:bg-accent",
        ghost: "text-foreground hover:bg-accent",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        success: "bg-theme-success text-destructive-foreground hover:bg-theme-success/90",
      },
      size: {
        sm: "h-8 px-3 text-xs",
        md: "h-10 px-4 text-sm",
        lg: "h-12 px-6 text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

interface QikpodButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof qikpodButtonVariants> {}

const QikpodButton = forwardRef<HTMLButtonElement, QikpodButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(qikpodButtonVariants({ variant, size }), className)}
        {...props}
      />
    );
  }
);

QikpodButton.displayName = "QikpodButton";

export default QikpodButton;
export { qikpodButtonVariants };
