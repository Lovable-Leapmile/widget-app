import { useState, ReactNode } from "react";
import { LogIn } from "lucide-react";
import leapmileLogo from "@/assets/leapmile-logo.png";

interface LeapmileLoginProps {
  onSubmit: (identification: string, password: string) => void | Promise<void>;
  isLoading?: boolean;
  logoSrc?: string;
  title?: string;
  subtitle?: string;
  identificationLabel?: string;
  identificationPlaceholder?: string;
  passwordLabel?: string;
  passwordPlaceholder?: string;
  submitLabel?: string;
  loadingLabel?: string;
  footerText?: string;
  footerLink?: { label: string; href: string };
  children?: ReactNode;
}

const LeapmileLogin = ({
  onSubmit,
  isLoading = false,
  logoSrc,
  title = "Welcome to",
  subtitle = "Robot Management",
  identificationLabel = "Enter Phone Number",
  identificationPlaceholder = "Enter your phone number",
  passwordLabel = "Enter Password",
  passwordPlaceholder = "Enter your password",
  submitLabel = "Submit",
  loadingLabel = "Submitting...",
  footerText = "© 2024 All Rights Reserved | Leapmile Logistics Pvt.Ltd",
  footerLink = { label: "Terms and Condition & Privacy Policy / Cookies Policy", href: "https://leapmile.com/terms-and-privacy" },
}: LeapmileLoginProps) => {
  const [identification, setIdentification] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    onSubmit(identification, password);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-4 py-8">
        <div className="w-full max-w-md space-y-8">
          {/* Welcome Section */}
          <div className="text-center space-y-4">
            <div>
              <h1 className="text-3xl font-bold text-[hsl(248,40%,63%)] mb-2">{title}</h1>
            </div>
            <div className="bg-transparent">
              {logoSrc ? (
                <img src={logoSrc} alt="Logo" className="h-10 mx-auto" />
              ) : (
                <img src={leapmileLogo} alt="Leapmile" className="h-10 mx-auto" />
              )}
              <h2 className="text-2xl font-bold text-[hsl(248,61%,22%)] mt-2">{subtitle}</h2>
            </div>
          </div>

          {/* Login Card */}
          <div className="bg-background backdrop-blur-sm shadow-xl rounded-2xl border border-[hsl(248,39%,85%)] p-8">
            {/* Login Icon */}
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-[hsl(248,39%,71%)] rounded-full flex items-center justify-center">
                <LogIn className="w-8 h-8 text-[hsl(248,61%,32%)]" />
              </div>
            </div>

            <div className="space-y-6">
              {/* Identification Field */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-[hsl(248,61%,22%)]">
                  {identificationLabel}
                </label>
                <input
                  type="text"
                  value={identification}
                  onChange={(e) => setIdentification(e.target.value)}
                  placeholder={identificationPlaceholder}
                  className="w-full rounded-xl h-12 text-base border-2 border-[hsl(248,39%,85%)] bg-background px-3 py-2 text-[hsl(248,61%,22%)] placeholder:text-gray-400 focus:outline-none focus:border-[hsl(248,31%,60%)] transition-all"
                />
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-[hsl(248,61%,22%)]">
                  {passwordLabel}
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder={passwordPlaceholder}
                  className="w-full rounded-xl h-12 text-base border-2 border-[hsl(248,39%,85%)] bg-background px-3 py-2 text-[hsl(248,61%,22%)] placeholder:text-gray-400 focus:outline-none focus:border-[hsl(248,31%,60%)] transition-all"
                />
              </div>

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                disabled={isLoading}
                className="w-full h-12 bg-[hsl(248,61%,32%)] hover:bg-[hsl(248,31%,60%)] text-white font-bold text-base rounded-xl shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? loadingLabel : submitLabel}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="py-4 text-center space-y-2">
        <div className="text-sm text-[hsl(248,61%,22%)]">
          {footerText}
        </div>
        {footerLink && (
          <a
            href={footerLink.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[hsl(248,61%,32%)] hover:underline"
          >
            {footerLink.label}
          </a>
        )}
      </div>
    </div>
  );
};

export default LeapmileLogin;
