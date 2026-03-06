import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface LeapmileInfoCardProps {
  title: string;
  description?: string;
  icon: LucideIcon;
  iconBgColor?: string;
  iconColor?: string;
  onClick?: () => void;
  className?: string;
}

const LeapmileInfoCard = ({
  title,
  description,
  icon: Icon,
  iconBgColor = "bg-purple-50",
  iconColor = "text-purple-500",
  onClick,
  className,
}: LeapmileInfoCardProps) => {
  return (
    <div
      onClick={onClick}
      className={cn(
        "bg-gray-50 border border-gray-200 shadow-md rounded-xl p-4",
        onClick && "cursor-pointer hover:shadow-lg transition-all duration-200 hover:scale-105",
        className
      )}
    >
      <div className="flex items-center space-x-3">
        <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center shadow-sm", iconBgColor)}>
          <Icon className={cn("w-5 h-5", iconColor)} />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[hsl(248,61%,22%)]">{title}</h3>
          {description && <p className="text-sm text-gray-600">{description}</p>}
        </div>
      </div>
    </div>
  );
};

export default LeapmileInfoCard;
