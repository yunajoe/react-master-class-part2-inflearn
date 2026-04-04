import { useContext, useState } from "react";
import { CenterContext } from "../contexts/CenterContext";

function LostAndFoundDesk() {
  const { lostItems, reportLost, claimItem } = useContext(CenterContext);

  const [inputText, setInputText] = useState("");
  return (
    <div>
      <h2>분실물센터</h2>
      <ul>
        {lostItems.map((item) => (
          <li key={item}>
            {item}
            <button onClick={() => claimItem(item)}>찾아감</button>
          </li>
        ))}
      </ul>
      <input
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="분실물 입력"
      />
      <button
        onClick={() => {
          reportLost(inputText);
          setInputText("");
        }}
      >
        신고하기
      </button>
    </div>
  );
}

export default LostAndFoundDesk;
