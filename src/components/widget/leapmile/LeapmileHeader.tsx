import { useNavigate } from "react-router-dom";
import leapmileLogo from "@/assets/leapmile-logo.png";

interface LeapmileHeaderProps {
  title?: string;
  logoSrc?: string;
  onAction?: () => void;
  actionLabel?: string;
  showBack?: boolean;
}

const LeapmileHeader = ({ title, logoSrc, onAction, actionLabel = "Action", showBack = false }: LeapmileHeaderProps) => {
  const navigate = useNavigate();

  return (
    <div className="mx-4 mt-4 mb-6">
      <div className="bg-gradient-to-r from-[hsl(263,61%,28%)] via-[hsl(263,35%,43%)] to-[hsl(263,30%,63%)] rounded-3xl shadow-2xl p-5 border border-white/20">
        <div className="flex items-center justify-between max-w-6xl mx-auto">
          <div className="flex items-center gap-4">
            {showBack && (
              <button
                onClick={() => navigate("/")}
                className="text-white/80 hover:text-white text-sm transition-colors"
              >
                ← Back
              </button>
            )}
            <img src={logoSrc || leapmileLogo} alt="Leapmile" className="h-8 w-auto" />
            {title && <h1 className="text-lg font-semibold text-white">{title}</h1>}
          </div>
          {onAction && (
            <button
              onClick={onAction}
              className="rounded-xl bg-white/20 backdrop-blur-sm text-white px-4 py-2 text-sm font-medium hover:bg-white/30 transition-all border border-white/20"
            >
              {actionLabel}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default LeapmileHeader;
