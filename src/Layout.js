import { Outlet, Link } from "react-router-dom";

export function Layout() {
  return (
    <>
        <h1>Home</h1>
          <Link className = "calcLink" to="/calculator">Calculator</Link>
          <br />
          <Link className = "resLink" to="/restaurant">Restaurant</Link>
        <Outlet />
    </>
  );
}
