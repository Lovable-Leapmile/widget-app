import qikpodLogo from "@/assets/qikpod-logo.png";

interface WidgetHeaderProps {
  title?: string;
  logoSrc?: string;
  onAction?: () => void;
  actionLabel?: string;
}

const WidgetHeader = ({ logoSrc, onAction, actionLabel = "Action" }: WidgetHeaderProps) => {
  return (
    <header className="theme-header flex items-center justify-between px-6 py-3 shadow-sm">
      <div className="flex items-center gap-3">
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
