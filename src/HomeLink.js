import { Outlet, Link } from "react-router-dom";

export function HomeLink() {
  return (
    <div className="home-link">
      <Link
        style={{ textDecoration: "none", fontSize: "50px", color: "black" }}
        to="/"
      >
        {"\u2347"}
      </Link>
      <Outlet />
    </div>
  );
}
