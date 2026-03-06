import { useNavigate } from "react-router-dom";
import qikpodLogo from "@/assets/qikpod-logo.png";
import leapmileLogo from "@/assets/leapmile-logo.png";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="text-center space-y-10">
        <h1 className="text-3xl font-bold text-foreground">Select Platform</h1>
        <p className="text-muted-foreground">Choose a dashboard to continue</p>

        <div className="flex flex-wrap justify-center gap-8">
          {/* QikPod Card */}
          <button
            onClick={() => navigate("/qikpod")}
            className="group flex flex-col items-center gap-4 rounded-2xl border border-border bg-card p-10 shadow-md transition-all hover:shadow-xl hover:-translate-y-1 hover:border-yellow-400 w-64"
          >
            <img src={qikpodLogo} alt="QikPod" className="h-14 w-auto" />
            <span className="text-xl font-semibold text-foreground group-hover:text-yellow-600 transition-colors">
              QikPod
            </span>
            <span className="text-sm text-muted-foreground">Pod Management Dashboard</span>
          </button>

          {/* Leapmile Card */}
          <button
            onClick={() => navigate("/leapmile")}
            className="group flex flex-col items-center gap-4 rounded-2xl border border-border bg-card p-10 shadow-md transition-all hover:shadow-xl hover:-translate-y-1 hover:border-[#351C75] w-64"
          >
            <img src={leapmileLogo} alt="Leapmile" className="h-14 w-auto" />
            <span className="text-xl font-semibold text-foreground group-hover:text-[#351C75] transition-colors">
              Leapmile
            </span>
            <span className="text-sm text-muted-foreground">Admin Dashboard</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
