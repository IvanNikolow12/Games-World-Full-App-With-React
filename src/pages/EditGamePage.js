import { useRouteLoaderData } from "react-router-dom";
import GameForm from "../components/GameForm";

function EditGamePage() {
  const data = useRouteLoaderData("game-detail");
  return <GameForm method="patch" game={data} />
   
}

export default EditGamePage;
