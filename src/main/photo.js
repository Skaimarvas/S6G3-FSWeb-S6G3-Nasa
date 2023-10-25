import React from "react";
import "./main.css";

function Photo({ photoData }) {
  console.log("photo", photoData.url);
  return (
    <div className="container">
      <h2> {photoData.title} </h2>
      <p>{`Copyright: ${photoData.copyright}`}</p>
      <p>{`Date: ${photoData.date}`}</p>
      <img src={photoData.url}></img>
      <p>{`Explanation: ${photoData.explanation}`}</p>
    </div>
  );
}

export default Photo;
