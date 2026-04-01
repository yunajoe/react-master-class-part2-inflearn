import { useReducer, useState } from "react";
import {
  addTodo,
  checkCompletedTodo,
  deleteTodo,
  selectDifficulty,
} from "../store/task/taskActions.js";
import { initialState, taskReducer } from "../store/task/taskReducer.js";

function Task() {
  const [state, dispatch] = useReducer(taskReducer, initialState);
  const [inputValue, setInputValue] = useState("");

  const completeArr = state.filter((item) => item.completed);
  const ongoingArr = state.filter((item) => !item.completed);
  return (
    <div style={containerStyle}>
      <header>
        <h1>🚀 Pro Task Dashboard</h1>
        <div
          style={{ color: "#9CA3AF", background: "#F0F2F5", padding: "16px" }}
        >
          <span>
            전체: {state.length} | 완료: {completeArr.length}개 | 진행중:
            {ongoingArr.length}개
          </span>
        </div>
      </header>
      <main>
        <input
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        />
        <button onClick={() => dispatch(addTodo(inputValue.trim()))}>
          할일 추가하기
        </button>
        <div style={{ marginTop: "20px" }}>
          {state.map((item) => (
            <div key={item.id} style={itemStyle(item.completed)}>
              <input
                type="checkbox"
                checked={item.completed}
                onChange={(e) => {
                  dispatch(checkCompletedTodo(item.id));
                }}
              />
              <span style={titleStyle(item.completed)}>
                {item.title}: {item.priority}
              </span>
              <div style={{ display: "flex", columnGap: "10px" }}>
                <select
                  onChange={(e) => {
                    dispatch(selectDifficulty(item.id, e.target.value));
                  }}
                >
                  <option value="High">High</option>
                  <option value="Medium">Medium</option>
                  <option value="Low">Low</option>
                </select>
                <button
                  onClick={() => dispatch(deleteTodo(item.id))}
                  style={{
                    color: "red",
                    background: "#fff",
                    cursor: "pointer",
                  }}
                >
                  삭제
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Task;

const containerStyle = {
  maxwidth: "500px",
  margin: "50px auto",
  padding: "20px",
  backgroundColor: "#fff",
  borderRadius: "15px",
  boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
};

const titleStyle = (completed) => ({
  textDecoration: completed ? "line-through" : "none",
});

const itemStyle = (completed) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "10px",
  borderBottom: "1px solid #eee",
  opacity: completed ? 0.4 : 1,
});
