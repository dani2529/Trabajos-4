import React from "react";
import Title from "./components/titulo/Titulo";
import Image from "./components/image/Imagen";
import Details from "./components/detalles/Details";
import "./app.css";

function App() {
  return (
    <div className="image-container">
      <div className="imag">
        <Image url="./Rick.jpeg" />
      </div>
      <div className="container-img"></div>
      <div className="centered-box"></div>
      <div className="center">
        <Title title="Rick Morty" />
      </div>

      <div className="genero">
        <Details genre="Masculino" status="Vivo" />
      </div>
    </div>
  );
}

export default App;
