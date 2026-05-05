import { NavLink } from "react-router";

function Sidebar() {
  const getStyle = ({ isActive }) => ({
    display: "block",
    padding: "12px 20px",
    marginBottom: "8px",
    textDecoration: "none",
    borderRadius: "8px",
    transition: "all 0.2s",
    backgroundColor: isActive ? "#2563eb" : "transparent",
    color: isActive ? "white" : "#475569",
    boxShadow: isActive ? "0 4px 6px -1px rgba(0,0,0,0.1)" : "none",
  });
  return (
    <nav
      style={{
        width: "260px",
        padding: "20px",
        background: "white",
        borderRight: "1px solid #e2e8f0",
      }}
    >
      <h3 style={{ marginBottom: "30px" }}>Menu</h3>
      <NavLink to="/" style={getStyle}>
        인벤토리 관리
      </NavLink>
      <NavLink to="/analytics" style={getStyle}>
        데이터 분석
      </NavLink>
      <NavLink to="/logs" style={getStyle}>
        시스템 로그
      </NavLink>
    </nav>
  );
}

export default Sidebar;
