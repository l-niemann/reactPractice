import { Outlet, Link } from "react-router-dom";

export function HomeLink(){
    return(
        <div className="home-link">
            <Link to="/">Home</Link>
            <Outlet />
        </div>
    );
}