import { NavLink, useRouteLoaderData, Form } from "react-router-dom";

import "./MainNavigation.css";

function MainNavigation() {
  const token = useRouteLoaderData("root");

  return (
    <header>
      <nav className="cyber-nav">
        <div className="cyber-nav-left">
          <NavLink to="/">
            <img
              src="https://png.pngtree.com/template/20191125/ourmid/pngtree-phantom-e-sports-logo-gaming-mascot-image_335852.jpg"
              alt="Cyber Gaming logo"
            />
          </NavLink>
        </div>
        <div className="cyber-nav-right">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/games">Games</NavLink>
            </li>
            {!token && (
              <li>
                <NavLink to="/auth?mode=login">Login</NavLink>
              </li>
            )}
            {token && (
              <li>
                <Form action="/logout" method="post">
                  <button>Logout</button>
                </Form>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default MainNavigation;
