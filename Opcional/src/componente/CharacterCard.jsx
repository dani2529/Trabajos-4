import React from "react";
import Imagen from "./imagen/imagen";
import Nombre from "./nombre/nombre";

const CharacterCard = (props) => {
  return (
    <div className="image-container">
      <div className="imag">
        <Imagen imagen={props.imagen} />
      </div>
      <div className="center">
        <Nombre nombre={props.nombre} />
      </div>
    </div>
  );
};

export default CharacterCard;
