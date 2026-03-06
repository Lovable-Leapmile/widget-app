import { InputHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface LeapmileTextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

const LeapmileTextField = forwardRef<HTMLInputElement, LeapmileTextFieldProps>(
  ({ label, error, helperText, className, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1.5">
        {label && (
          <label className="text-sm font-medium text-[hsl(263,61%,20%)]">
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={cn(
            "h-10 w-full rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm text-[hsl(263,61%,20%)]",
            "placeholder:text-gray-400",
            "focus:outline-none focus:ring-2 focus:ring-[hsl(263,61%,28%)] focus:ring-offset-1",
            "disabled:cursor-not-allowed disabled:opacity-50",
            "transition-all shadow-sm",
            error && "border-destructive focus:ring-destructive",
            className
          )}
          {...props}
        />
        {error && <p className="text-xs text-destructive">{error}</p>}
        {helperText && !error && (
          <p className="text-xs text-gray-500">{helperText}</p>
        )}
      </div>
    );
  }
);

LeapmileTextField.displayName = "LeapmileTextField";

export default LeapmileTextField;
