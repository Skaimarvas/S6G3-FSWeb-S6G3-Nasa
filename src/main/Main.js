import React from "react";
import "./Main.css";

function Main({ data }) {
  console.log("photo", data.url);
  return (
    <div className="photo-container">
      <h2> {data.title} </h2>
      <p>{`Copyright: ${data.copyright}`}</p>
      <p>{`Date: ${data.date}`}</p>
      <img src={data.media_type === "image" ? data.url : data.thumbnail_url} />
      {data.media_type === "video" ? (
        <a href={data.url} target="_blank">
          Click here to watch the video
        </a>
      ) : (
        ""
      )}
      <p>{`Explanation: ${data.explanation}`}</p>
    </div>
  );
}

export default Main;
