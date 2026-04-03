import { useContext } from "react";
import { LangContext } from "../contexts/LanguageContext.jsx";

function ContentCard() {
  const { lang, setLang } = useContext(LangContext);
  const content = {
    KO: "안녕하세요! 컨텍스트 덕분에 중간 컴포넌트들이 아주 깨끗해졌습니다.",
    EN: "Hello! Thanks to Context, the middle components are now very clean.",
  };
  return (
    <div>
      <p>
        현재 적용된 전역 언어: <strong>{lang}</strong>
      </p>
      <p>{content[lang]}</p>
      <button
        onClick={() => {
          setLang((prev) => (prev === "KO" ? "EN" : "KO"));
        }}
      >
        언어 스위치
      </button>
    </div>
  );
}

export default ContentCard;
