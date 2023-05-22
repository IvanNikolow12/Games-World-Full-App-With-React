// import classes from './App.module.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/HomePage";
import RootLayout from "./pages/RootLayout";
import ErrorPage from "./pages/ErrorPage";
import GamesPage, { loader as GamesLoader } from "./pages/GamesPage";
import GamesRoot from "./pages/GamesRoot";
import GameDetailPage, {
  loader as GameDetailLoader,
  action as deleteGameAction,
} from "./pages/GameDetailPage";
import EditGamePage from "./pages/EditGamePage";
import { action as ManipulateGameAction } from "./components/GameForm";
import NewGamePage from "./pages/NewGamePage";
import LoginPage, { action as AuthAction } from "./pages/LoginPage";
import { tokenLoader, checkAuthLoader } from "./util/auth";
import { action as LogoutAction } from "./pages/logout";
import { action as CommentAndPictureAction } from "./components/NewComment";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    id: "root",
    loader: tokenLoader,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "games",
        element: <GamesRoot />,
        children: [
          {
            index: true,
            element: <GamesPage />,
            loader: GamesLoader,
          },
          {
            path: ":id",
            id: "game-detail",
            loader: GameDetailLoader,
            action: deleteGameAction,
            children: [
              {
                index: true,
                element: <GameDetailPage />,
                action: CommentAndPictureAction,
              },
              {
                path: "edit",
                element: <EditGamePage />,
                action: ManipulateGameAction,
                loader: checkAuthLoader,
              },
            ],
          },
          {
            path: "new",
            element: <NewGamePage />,
            action: ManipulateGameAction,
            loader: checkAuthLoader,
          },
        ],
      },
      {
        path: "auth",
        element: <LoginPage />,
        action: AuthAction,
      },
      {
        path: "logout",
        action: LogoutAction,
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
