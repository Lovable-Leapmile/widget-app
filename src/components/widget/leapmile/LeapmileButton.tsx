import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

const leapmileButtonVariants = cva(
  "inline-flex items-center justify-center text-sm font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "rounded-xl bg-[hsl(263,61%,28%)] text-white hover:bg-[hsl(263,35%,43%)] shadow-lg",
        secondary: "rounded-xl bg-[hsl(263,30%,63%)] text-white hover:bg-[hsl(263,35%,43%)]",
        outline: "rounded-xl border border-gray-200 bg-gray-50 text-[hsl(263,61%,20%)] hover:bg-gray-100",
        ghost: "rounded-xl text-[hsl(263,61%,20%)] hover:bg-gray-100",
        destructive: "rounded-xl bg-destructive text-destructive-foreground hover:bg-destructive/90",
        success: "rounded-xl bg-green-600 text-white hover:bg-green-700",
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

interface LeapmileButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof leapmileButtonVariants> {}

const LeapmileButton = forwardRef<HTMLButtonElement, LeapmileButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(leapmileButtonVariants({ variant, size }), className)}
        {...props}
      />
    );
  }
);

LeapmileButton.displayName = "LeapmileButton";

export default LeapmileButton;
export { leapmileButtonVariants };
