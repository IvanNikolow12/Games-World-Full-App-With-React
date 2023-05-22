import { json, useRouteLoaderData } from "react-router-dom";
import Comment from "./Comment";
import "./Comments.css";

function Comments() {
  const data = useRouteLoaderData("game-detail");
  return (
    <>
      <div className="card-comments">
        <div className="big-card">
          <h1>Comments</h1>
          <Comment comment={data} />
        </div>
      </div>
    </>
  );
}

export default Comments;

export async function loader({ request, params }) {
  const id = params.id;

  const response = await fetch(
    `https://game-world-a66a1-default-rtdb.europe-west1.firebasedatabase.app/games/${id}/comments.json`
  );

  if (!response.ok) {
    throw json(
      { message: "Cloud not fetch events", status: 500 },
      { status: 500 }
    );
  } else {
    return response;
  }
}
