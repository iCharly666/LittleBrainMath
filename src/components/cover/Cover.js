import React from "react";
import "./Cover.css";
import coverVideo from "../../media/portada.mp4";

const Cover = () => {
  return (
    <div className="cover-container">
      <video className="video" src={coverVideo} autoPlay loop muted />
      <h1>LittleBrainMath</h1>
      <p>Aprende | Diviertete | Se mejor </p>
    </div>
  );
};

export default Cover;