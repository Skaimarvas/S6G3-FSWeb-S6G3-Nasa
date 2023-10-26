import React, { useEffect } from "react";
import "./App.css";
import Header from "./header/Header";
import { useState } from "react";
import axios from "axios";
import Main from "./main/Main";
import styled from "styled-components";

function App() {
  const myAPIKey = "1Du39DsfSTetoxS36VQOeAREpZxV2afeRo3OiTnc";
  const [nasa, setNasa] = useState();
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));

  useEffect(() => {
    console.warn("UYGULAMA YÜKLENDİ");
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=${myAPIKey}&date=${date}&thumbs=true`
      )
      .then((res) => {
        console.log(res.data);
        setNasa(res.data);
      });
  }, [date]);

  const bgimage = {
    backgroundImage: `url(${nasa ? nasa.url : ""})`,
    backgroundSize: "cover",
    margin: "1rem",
  };
  const Container = styled.div`
    display: flex;
    border: 2px solid black;
  `;
  const Box1 = styled.div`
    flex: 0.1;
    border: 2px solid black;
  `;

  const Box2 = styled.div`
    flex: 0.9;
  `;

  const Yan = styled.h2`
    color: #fff;

    -webkit-text-stroke: 1px black;
    height: 100%;
    writing-mode: vertical-rl;
    margin: 0 auto;
  `;

  return (
    <div className="App" style={bgimage}>
      <Container>
        <Box1>
          <Yan>Astronomy Photo of The Day</Yan>
        </Box1>
        <Box2>
          <Header />

          <input
            type="Date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />

          {nasa ? <Main data={nasa} /> : <h3>{"Yükleniyor"}</h3>}
        </Box2>
      </Container>
    </div>
  );
}

export default App;
