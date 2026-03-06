import { cn } from "@/lib/utils";

interface LeapmileStatusBadgeProps {
  status: string;
  className?: string;
}

const statusStyles: Record<string, string> = {
  active: "bg-green-100 text-green-700",
  success: "bg-green-100 text-green-700",
  delivered: "bg-green-100 text-green-700",
  paid: "bg-green-100 text-green-700",
  completed: "bg-green-100 text-green-700",
  "in transit": "bg-blue-100 text-blue-700",
  "in progress": "bg-blue-100 text-blue-700",
  current: "bg-orange-100 text-orange-700",
  pending: "bg-yellow-100 text-yellow-700",
  cancelled: "bg-red-100 text-red-700",
  failed: "bg-red-100 text-red-700",
  blocked: "bg-red-100 text-red-700",
  inactive: "bg-gray-100 text-gray-600",
};

const LeapmileStatusBadge = ({ status, className }: LeapmileStatusBadgeProps) => {
  const lower = status?.toLowerCase() || "";
  const style = statusStyles[lower] || "bg-gray-100 text-gray-600";

  return (
    <span
      className={cn(
        "inline-flex px-3 py-1 text-xs rounded-full font-medium capitalize transition-all",
        style,
        className
      )}
    >
      {status || "N/A"}
    </span>
  );
};

export default LeapmileStatusBadge;
