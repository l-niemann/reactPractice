import { Outlet, Link } from "react-router-dom";

export function Layout() {
  return (
    <>
      <h1>Home</h1>
      <Link className="link" to="/calculator">
        Calculator
      </Link>
      <br />
      <Link className="link" to="/restaurant">
        Restaurant
      </Link>
      <br />
      <Link className="link" to="/cipher">
        Cipher
      </Link>
      <br />
      <Link className="link" to="/jumping-game">
        Jumping Game
      </Link>
      <br />
      <Link className="link" to="/todo-list">
        Todo List
      </Link>
      <br />
      <Link className="link" to="/styled-components">
        Styled Components
      </Link>
      <br />
      <Link className="link" to="/notes">
        Notes
      </Link>
      <Outlet />
    </>
  );
}
