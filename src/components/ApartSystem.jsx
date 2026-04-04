import CenterProvider from "../contexts/CenterContext";
import LostAndFoundDesk from "./LostAndFoundDesk";
import NoticeBoard from "./NoticeBoard";

function ApartSystem() {
  return (
    <div>
      <h1>🏢 스마트 아파트 관리 시스템</h1>
      <NoticeBoard />

      <CenterProvider>
        <LostAndFoundDesk />
      </CenterProvider>
    </div>
  );
}

export default ApartSystem;
