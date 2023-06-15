import { Link, Outlet } from "react-router-dom";

export function NavBar() {
  return (
    <>
      <div>
        <Link className = "nav-link" to="/restaurant/order">Order</Link>
      </div>
    </>
  );
}
