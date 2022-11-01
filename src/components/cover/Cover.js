import React from "react";
import "./Cover.css";
import coverVideo from "../../media/coverVideo.mp4";

const Cover = () => {
  return (
    <div className="cover-container">
      <video className="video" src={coverVideo} autoPlay loop muted></video>
      <h1>Gerónimo Agustín Medina</h1>
      <p>Javascript Developer | Designer | Entrepeneur</p>
    </div>
  );
};

export default Cover;
