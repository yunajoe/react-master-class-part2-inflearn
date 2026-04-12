import { useRef } from "react";

function ReferenceExample() {
  const myRef = useRef(0);

  const handleUpdate = () => {
    myRef.current = myRef.current + 1;
    console.log("비밀 금고 안의 현재 값:", myRef.current);
  };

  return <button onClick={handleUpdate}>{myRef.current}값 올리기</button>;
}

export default ReferenceExample;
