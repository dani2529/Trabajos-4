import React from "react";
import Imagen from "./imagen/imagen";
import Nombre from "./nombre/nombre";

const CharacterCard = (props) => {
  return (
    <div>
      <div className="cuadro">
        <Imagen imagen={props.imagen} />

        <Nombre nombre={props.nombre} />
      </div>
    </div>
  );
};

export default CharacterCard;
