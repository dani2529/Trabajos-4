import React from "react";
import './imagen.css'

const Imagen = (props) => {
  console.log("props");

  return (
    <div>
      <img src={props.imagen} alt="promer imagen" />
    </div>
  );
};
export default Imagen;
