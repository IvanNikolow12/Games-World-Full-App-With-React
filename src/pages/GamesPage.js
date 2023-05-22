import { useLoaderData, json } from 'react-router-dom';

import './GamesPage.css'
import GameList from './GameList';

function GamesPage() {
  const data = useLoaderData();
    return <>
      <GameList games={data.games}/>
    </>
}

export default GamesPage;

export async function loader() {
  const response = await fetch('https://game-world-a66a1-default-rtdb.europe-west1.firebasedatabase.app/.json')

  if (!response.ok) {
    return json(
      { message: "Cloud not fetch events", status: 500 },
      { status: 500 }
    );
  } else {
    return response;
  }
}