import { useNavigate } from "react-router";

function LoginPage() {
  const navigate = useNavigate();

  const handleLogin = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    navigate("/", { replace: true });
    alert("인증에 성공하였습니다. 대시보드로 진입합니다.");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-slate-50">
      <h2 className="text-4xl font-black mb-8 text-slate-800 tracking-tighter italic">
        SYSTEM ACCESS
      </h2>
      <button
        onClick={handleLogin}
        className="px-12 py-6 bg-indigo-600 text-white rounded-[2rem] font-black shadow-2xl hover:bg-black transition-all active:scale-95"
      >
        LOGIN TO DASHBOARD
      </button>
    </div>
  );
}

export default LoginPage;
