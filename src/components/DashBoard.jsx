import { useContext, useEffect } from "react";
import { DashBoardContext } from "../contexts/DashBoardContext.jsx";

function DashBoard() {
  const { state, dispatch } = useContext(DashBoardContext);
  console.log("대시보드", state);

  useEffect(() => {
    const fetchData = async () => {
      dispatch({
        type: "FETCH_START",
      });

      await new Promise((resolve) => setTimeout(resolve, 2000));
      dispatch({
        type: "FETCH_SUCCESS",
        payload: "TEST 데이터 입니다",
      });
    };

    try {
      fetchData();
    } catch (error) {
      dispatch({
        type: "FETCH_ERROR",
      });
    }
  }, []);

  // loading => true && data가 없을때는 "데이터 로딩 중입니다.."
  // loading : false, data가 있을때는 데이터를 부럴왔어요
  // loading:false, error:가 있을때는 데이터를 불러오는데 실패했어요.

  return (
    <div>
      <h1>[ 📊 Admin Dashboard ]</h1>
      <div style={{ display: "flex", columnGap: "20px" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h3>[ 매출 차트 위젯 ]</h3>
          <p>
            {state.isLoading
              ? "데이터 로딩 중입니다"
              : state.data && !state.error
                ? "데이터를 불러왔어요"
                : "데이터를 불러오는데 실패했어요."}
          </p>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h3>[ 주문 목록 위젯 ]</h3>
          <p>
            {state.isLoading
              ? "데이터 로딩 중입니다"
              : state.data && !state.error
                ? "데이터를 불러왔어요"
                : "데이터를 불러오는데 실패했어요."}
          </p>{" "}
        </div>
      </div>
      <p>
        {state.isLoading
          ? "데이터 로딩 중입니다"
          : state.data && !state.error
            ? "데이터를 불러왔어요"
            : "데이터를 불러오는데 실패했어요."}
      </p>{" "}
    </div>
  );
}

export default DashBoard;
