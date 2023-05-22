import { useState } from "react";
import { Link, useRouteLoaderData, useSubmit } from "react-router-dom";

import "./GameItem.css";

import YouTubeVideo from "./YoutubeVideo";
import Footer from "./Footer";
import Comments from "./Comments";
import NewComment from "./NewComment";
import NewPicture from "./NewPicture";
import Gallery from "./Gallery";

function GameItem({ game }) {
  const [commentFormMode, setCommentFormMode] = useState("hidden");
  const [pictureFormMode, setPictureFormMode] = useState("hidden");
  const token = useRouteLoaderData("root");
  const submit = useSubmit();

  function startDeleteHandler() {
    const proceed = window.confirm("Are you sure ?");

    if (proceed) {
      submit(null, { method: "delete" });
    }
  }

  function AddNewCommentHandler() {
    if (commentFormMode === "show") {
      setCommentFormMode("hidden");
    } else {
      setCommentFormMode("show");
    }
  }

  function AddNewPictureHandler() {
    if (pictureFormMode === "show") {
      setPictureFormMode("hidden");
    } else {
      setPictureFormMode("show");
    }
  }

  return (
    <>
      <div className="container">
        <img
          src="https://i.pinimg.com/originals/38/54/d6/3854d631c9f5eb687ff0c2ae43efc19a.png"
          className="background-image"
          alt="backGround"
        />
        <div className="game-card-item">
          <img
            className="game-card__image"
            src={game.imageUrl}
            alt={game.title}
          />
          <h2 className="game-card__title">{game.title}</h2>
          <p className="game-card__genre">{game.category}</p>
          <p className="game-card__level">{game.maxLevel}lvl.</p>
          <p className="game-card__description">
            {game.summary.substring(0, 220)}
          </p>
          {token ? (
            <>
              <button className="edit-button">
                <Link to="edit">Edit</Link>
              </button>
              <button onClick={startDeleteHandler} className="delete-button">
                Delete
              </button>
              <div>
                <button
                  onClick={AddNewCommentHandler}
                  className="comment-button"
                >
                  Comment
                </button>
                <button
                  onClick={AddNewPictureHandler}
                  className="add-pic-button"
                >
                  Add Pic
                </button>
              </div>
            </>
          ) : (
            <div>
              <button onClick={AddNewCommentHandler} className="comment-button">
                Comment
              </button>
              <button className="go-to-button">
                <Link to={game.webSite}>Go to...</Link>
              </button>
            </div>
          )}
        </div>
        
        <NewComment className={commentFormMode} />

        <Comments />

        <YouTubeVideo game={game} />

        <NewPicture className={pictureFormMode} />

        <Gallery />
      </div>
      <main>
        <Footer />
      </main>
    </>
  );
}

export default GameItem;
