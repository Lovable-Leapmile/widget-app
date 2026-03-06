import { LabelHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface LeapmileLabelProps extends LabelHTMLAttributes<HTMLLabelElement> {}

const LeapmileLabel = forwardRef<HTMLLabelElement, LeapmileLabelProps>(
  ({ className, ...props }, ref) => {
    return (
      <label
        ref={ref}
        className={cn(
          "text-sm font-semibold text-[hsl(248,61%,22%)]",
          className
        )}
        {...props}
      />
    );
  }
);

LeapmileLabel.displayName = "LeapmileLabel";

export default LeapmileLabel;
