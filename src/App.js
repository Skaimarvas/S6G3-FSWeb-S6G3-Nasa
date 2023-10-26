import React, { useEffect } from "react";
import "./App.css";
import Header from "./header/Header";
import { useState } from "react";
import axios from "axios";
import Main from "./main/Main";

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

  return (
    <div className="App">
      <Header />
      <input
        type="Date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      {nasa ? <Main data={nasa} /> : <h3>{"Yükleniyor"}</h3>}
    </div>
  );
}

export default App;
