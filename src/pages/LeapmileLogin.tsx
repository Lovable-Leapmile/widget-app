import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { LeapmileLogin } from "@/components/widget/leapmile";

const LeapmileLoginPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (identification: string, password: string) => {
    if (!identification || !password) {
      toast.error("Please fill in all fields");
      return;
    }

    setIsLoading(true);
    // Simulate login - replace with actual API call
    setTimeout(() => {
      setIsLoading(false);
      toast.success(`Welcome!`);
      navigate("/leapmile");
    }, 1000);
  };

  return (
    <LeapmileLogin
      onSubmit={handleLogin}
      isLoading={isLoading}
      subtitle="Robot Management"
    />
  );
};

export default LeapmileLoginPage;
