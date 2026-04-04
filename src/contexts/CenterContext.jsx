import { createContext, useState } from "react";

export const NoticeContext = createContext("현재 등록된 공지사항이 없습니다.");

export const CenterContext = createContext();

function CenterProvider({ children }) {
  const [lostItems, setLostItems] = useState(["지갑", "에어팟"]);

  const reportLost = (item) => setLostItems((prev) => [...prev, item]);

  const claimItem = (item) =>
    setLostItems((prev) => prev.filter((value) => value !== item));

  const systemValue = { lostItems, reportLost, claimItem };
  return (
    <CenterContext.Provider value={systemValue}>
      {children}
    </CenterContext.Provider>
  );
}

export default CenterProvider;
