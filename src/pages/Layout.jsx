import { Link, Outlet } from "react-router";

function Layout() {
  return (
    <div>
      <nav style={{ padding: "10px", background: "#eee" }}>
        <Link to="/">Home</Link> | <Link to="/analytics">Analytics</Link>|{" "}
        <Link to="/prefetch">Prefetch</Link>
      </nav>
      <div style={{ padding: "20px" }}>
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
