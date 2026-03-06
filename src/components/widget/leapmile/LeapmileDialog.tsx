import { ReactNode } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface LeapmileDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  children: ReactNode;
  className?: string;
}

const LeapmileDialog = ({
  open,
  onOpenChange,
  title,
  children,
  className,
}: LeapmileDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className={`rounded-2xl border-0 shadow-2xl ${className || ""}`}>
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-[hsl(248,61%,22%)]">
            {title}
          </DialogTitle>
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  );
};

export default LeapmileDialog;
