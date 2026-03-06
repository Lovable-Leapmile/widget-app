import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface LeapmileActionCardProps {
  title: string;
  icon: LucideIcon;
  iconColor?: string;
  onClick?: () => void;
  className?: string;
}

const LeapmileActionCard = ({
  title,
  icon: Icon,
  iconColor = "text-[hsl(248,61%,32%)]",
  onClick,
  className,
}: LeapmileActionCardProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "group w-full p-3 flex flex-col items-center justify-center space-y-2",
        "bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-lg",
        "shadow-sm hover:shadow-md transition-all duration-200 min-h-[90px]",
        className
      )}
    >
      <div
        className={cn(
          "w-8 h-8 rounded-lg bg-white flex items-center justify-center",
          iconColor,
          "group-hover:scale-110 transition-transform duration-200 shadow-sm"
        )}
      >
        <Icon className="w-4 h-4" />
      </div>
      <span className="text-[hsl(248,61%,22%)] font-bold text-center text-xs leading-tight break-words whitespace-normal">
        {title}
      </span>
    </button>
  );
};

export default LeapmileActionCard;
