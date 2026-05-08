import { Link, useRouteError } from "react-router";

export default function ErrorPage() {
  // 1. useRouteError 훅은 라우터가 포착한 에러 정보를 객체 형태로 반환합니다.
  // 이 안에는 에러 상태(status)나 구체적인 메시지가 담겨 있습니다.
  const error = useRouteError();
  console.error("시스템 장애 감지:", error);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-slate-50 p-10">
      <div className="bg-white p-12 rounded-[3rem] shadow-2xl border-2 border-red-100 text-center max-w-lg">
        <h1 className="text-6xl mb-6">⚠️</h1>
        <h2 className="text-3xl font-black text-slate-900 mb-4 uppercase tracking-tighter">
          System Interrupted
        </h2>
        <p className="text-slate-500 font-medium leading-relaxed mb-10">
          죄송합니다. 현재 요청하신 페이지를 처리하는 과정에서 예상치 못한
          문제가 발생했습니다.
          <br />
          에러 상태: {error.status || "Unknown Error"}
        </p>
        <Link
          to="/"
          className="inline-block px-10 py-5 bg-indigo-600 text-white rounded-2xl font-black shadow-lg hover:bg-black transition-all"
        >
          BACK TO DASHBOARD
        </Link>
      </div>
    </div>
  );
}
