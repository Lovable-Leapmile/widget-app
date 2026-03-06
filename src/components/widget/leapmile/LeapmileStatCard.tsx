import { cn } from "@/lib/utils";

interface LeapmileStatCardProps {
  label: string;
  value: string | number;
  className?: string;
}

const LeapmileStatCard = ({ label, value, className }: LeapmileStatCardProps) => {
  return (
    <div className={cn("bg-[hsl(248,39%,71%)]/20 rounded-lg p-2 text-center", className)}>
      <div className="text-xs font-medium text-[hsl(248,61%,22%)]">{label}</div>
      <div className="text-lg font-bold text-[hsl(248,61%,32%)] mt-0.5">{value}</div>
    </div>
  );
};

export default LeapmileStatCard;
