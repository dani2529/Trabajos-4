import React from "react";
import Titulo from "../titulo/titulo";
import Image from "../image/Image";
import Detalle from "../detalle/details";
import './CaracterCard.css';

function CharacterCard(props) {
  console.log(props, "props <------ character");
 
  return (
    <div className="image-container">
      <div className="imag">    
        <Image url={props.imagen} />
      </div>
      <div className="container-img"></div>
      <div className="centered-box"></div>
      <div className="center">
        <Titulo title={props.nombre} />
      </div>

      <div className="genero">
        <Detalle genre={props.genero} status={props.status} />
      </div>
    </div>
  );
}

export default CharacterCard;
