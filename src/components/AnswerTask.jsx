function AnswerTask() {
  const tasks = [
    { id: 1, title: "강의 대본 검토하기", completed: false, priority: "High" },
    {
      id: 2,
      title: "리듀서 최종 미션 설계",
      completed: true,
      priority: "Medium",
    },
  ];
  return (
    <div style={containerStyle}>
      <header>
        <h1>🚀 Pro Task Dashboard</h1>
        <div style={statsBoxStyle}>
          <span>전체:1 </span> | <span>완료:1</span> | <span>진행 중:1</span>
        </div>
      </header>

      <main>
        {/* 입력 액션 발송 */}
        {/* <TaskInput onAdd={(title) => dispatch(addTask(title))} /> */}
        <input value="입력"></input>

        <div style={{ marginTop: "20px" }}>
          {tasks.map((task) => (
            <div style={itemStyle(task.completed)}>
              <input
                type="checkbox"
                checked={task.completed}
                // onChange={onToggle}
              />

              <span
                style={{
                  flex: 1,
                  marginLeft: "10px",
                  textDecoration: task.completed ? "line-through" : "none",
                }}
              >
                {task.title}
              </span>

              <select
                value={task.priority}
                onChange={(e) => onPriorityChange(e.target.value)}
                style={{ marginRight: "10px" }}
              >
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>

              <button
                // onClick={onDelete}
                style={{
                  color: "red",
                  border: "none",
                  background: "none",
                  cursor: "pointer",
                }}
              >
                삭제
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default AnswerTask;

// 스타일 가이드
const containerStyle = {
  maxWidth: "500px",
  margin: "50px auto",
  padding: "20px",
  backgroundColor: "#fff",
  borderRadius: "15px",
  boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
};

const statsBoxStyle = {
  padding: "15px",
  backgroundColor: "#f0f2f5",
  borderRadius: "10px",
  margin: "15px 0",
  fontWeight: "bold",
  textAlign: "center",
};

const itemStyle = (completed) => ({
  display: "flex",
  alignItems: "center",
  padding: "12px",
  borderBottom: "1px solid #eee",
  opacity: completed ? 0.6 : 1,
});
