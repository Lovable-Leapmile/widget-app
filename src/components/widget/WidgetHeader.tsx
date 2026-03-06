import { useNavigate } from "react-router-dom";
import qikpodLogo from "@/assets/qikpod-logo.png";

interface WidgetHeaderProps {
  title?: string;
  logoSrc?: string;
  onAction?: () => void;
  actionLabel?: string;
  showBack?: boolean;
}

const WidgetHeader = ({ title, logoSrc, onAction, actionLabel = "Action", showBack = false }: WidgetHeaderProps) => {
  const navigate = useNavigate();

  return (
    <header className="theme-header flex items-center justify-between px-6 py-3 shadow-sm">
      <div className="flex items-center gap-3">
        {showBack && (
          <button onClick={() => navigate("/")} className="mr-2 rounded-md px-2 py-1 text-sm hover:opacity-70 transition-opacity">
            ← Back
          </button>
        )}
        <img src={logoSrc || qikpodLogo} alt="Logo" className="h-8 w-auto" />
        <h1 className="text-lg font-semibold">{title}</h1>
      </div>
      {onAction && (
        <button
          onClick={onAction}
          className="theme-button-primary rounded-md px-4 py-2 text-sm font-medium transition-colors"
        >
          {actionLabel}
        </button>
      )}
    </header>
  );
};

export default WidgetHeader;
