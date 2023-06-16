import { Outlet, Link } from "react-router-dom";

export function Layout() {
  return (
    <>
        <h1>Home</h1>
          <Link className = "link" to="/calculator">Calculator</Link>
          <br />
          <Link className = "link" to="/restaurant">Restaurant</Link>
          <br />
          <Link className = "link" to="/cipher">Cipher</Link>
        <Outlet />
    </>
  );
}
