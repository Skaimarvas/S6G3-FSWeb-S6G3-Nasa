import React from "react";
import "./Main.css";
import styled from "styled-components";

function Main({ data }) {
  const Container = styled.div`
    display: flex;
    border: 2px solid black;
    font-family: "Roboto Mono", monospace;
  `;
  const Box1 = styled.div`
    flex: 0.33;
    border: 2px solid black;
  `;
  const Box2 = styled.div`
    flex: 0.67;
  `;
  const H3 = styled.div`
    font-size: 2rem;
    color: white;
    -webkit-text-stroke: 1px black;

    font-family: Arial, sans-serif;
  `;
  return (
    <Container className="photo-container">
      <Box1>
        <H3> {data.title} </H3>
        <p>{`Copyright: ${data.copyright}`}</p>
        <p>{`Date: ${data.date}`}</p>
        {/* <img src={data.media_type === "image" ? data.url : data.thumbnail_url} /> */}

        {data.media_type === "video" ? (
          <a href={data.url} target="_blank">
            Click here to watch the video
          </a>
        ) : (
          ""
        )}
      </Box1>
      <Box2>
        <p>{`Explanation: ${data.explanation}`}</p>
      </Box2>
    </Container>
  );
}

export default Main;
