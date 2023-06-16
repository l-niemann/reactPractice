import { Link, Outlet } from "react-router-dom";

export function NavBar() {
  return (
    <>
      <div>
        <Link className = "nav-link" to="/restaurant/order">Order</Link>
        <Link className="nav-link" to="/restaurant/locations">Locations</Link>
        <Link className="nav-link" to="/restaurant/contactUs">Contact Us</Link>
        <Outlet />
      </div>
    </>
  );
}
