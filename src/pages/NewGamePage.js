import { useRouteLoaderData } from "react-router-dom";
import GameForm from "../components/GameForm";

function NewGamePage() {
  const data = useRouteLoaderData("game-detail");
  
  return <GameForm method="post" game={data} />;
}

export default NewGamePage;
