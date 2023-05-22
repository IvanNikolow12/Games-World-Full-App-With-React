import { useRouteLoaderData, json, redirect } from "react-router-dom";

import GameItem from "../components/GameItem";

function GameDetailPage() {
    const data = useRouteLoaderData('game-detail')
  return (
    <>
      <GameItem game={data} />
    </>
  );
}

export default GameDetailPage;

export async function loader({ params, request}) {
    const id = params.id;

    const response = await fetch(`https://game-world-a66a1-default-rtdb.europe-west1.firebasedatabase.app/games/${id}.json`)

    if (!response.ok) {
      throw json(
        { message: "Cloud not fetch details for selected event." },
        { status: 500 }
      );
    } else {
      return response;
    }
}

export async function action({params, request}) {
  const id = params.id;

  const response = await fetch(`https://game-world-a66a1-default-rtdb.europe-west1.firebasedatabase.app/games/${id}.json`, {
    method: request.method,
  })

  if(!response.ok) {
    throw json({ message: "Cloud not fetch details for selected event." },
    { status: 500 })
  } 
  return redirect('/games')
}
