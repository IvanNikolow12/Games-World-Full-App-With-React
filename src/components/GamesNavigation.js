import { NavLink, useRouteLoaderData } from "react-router-dom";
import "./GamesNavigation.css";

function GamesNavigation() {
  const token = useRouteLoaderData("root");
  return (
    <>
      <header>
        <nav className="games-nav">
          <div className="games-nav-center">
            <ul>
              <li>
                <NavLink to="/games" end>
                  All Games
                </NavLink>
              </li>
              {token && (
                <li>
                  <NavLink to="/games/new">New Game</NavLink>
                </li>
              )}
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}

export default GamesNavigation;
