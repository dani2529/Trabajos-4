import React from "react";
import './nombre.css'

const Nombre = (props) => {
  return (
    <div>
      <h2>
        <p>{props.nombre}</p>
      </h2>
    </div>
  );
};

export default Nombre;
