import React from "react";
import "./main.css";

function Photo({ photoData }) {
  console.log("photo", photoData.url);
  return (
    <div className="container">
      <h2> {photoData.title} </h2>
      <img src={photoData.url}></img>
      <p>{photoData.explanation}</p>
      <p>Deneme</p>
    </div>
  );
}

export default Photo;
