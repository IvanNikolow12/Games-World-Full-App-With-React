function YouTubeVideo(props) {
  return (
    <>
      <iframe
        className="video-player"
        id="video-player-box"
        width="460"
        height="255"
        src={props.game.videoUrl}
        alt="game-video"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        samesite="None"
        loading="lazy"
      ></iframe>
    </>
  );
}

export default YouTubeVideo;
