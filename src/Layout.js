import { Outlet, Link } from "react-router-dom";

export function Layout() {
  return (
    <>
      <div className="layout">
        <h1>Home</h1>
        <ul>
          <Link className = "calcLink" to="/calculator">Calculator</Link>
          <br />
          <Link className = "resLink" to="/restaurant">Restaurant</Link>
        </ul>
        <Outlet />
      </div>
    </>
  );
}
