import React, { useEffect } from "react";
import "./App.css";
import Header from "./header/header";
import { useState } from "react";
import axios from "axios";
import Photo from "./main/photo";
//import Photo from "./main/photo";

function App() {
  const [nasa, setNasa] = useState();

  useEffect(() => {
    console.warn("UYGULAMA YÜKLENDİ");
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?start_date=2023-05-18&end_date=2023-05-18&api_key=1Du39DsfSTetoxS36VQOeAREpZxV2afeRo3OiTnc"
      )
      .then((res) => {
        console.log(res.data);
        setNasa(res.data);
      });
  }, []);

  return (
    <div className="App">
      <Header />
      <p>
        NASA uygulamasını yapmak için README.md dosyasıdaki talimatları takip
        edin İyi eğlenceler!{" "}
        <span role="img" aria-label="go!">
          🚀
        </span>
        !
      </p>
      {nasa ? <Photo photoData={nasa[0]} /> : <h3>{"Yükleniyor"}</h3>}
    </div>
  );
}

export default App;
