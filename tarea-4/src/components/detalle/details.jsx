import React from 'react';
import './detalle.css'

const Detalle = (props) =>{
  console.log(props, 'props detalle');

  return(
    <div>
      <p>{props.genre}</p>
      <p>{props.status}</p>
    </div>
  )
}

export default Detalle;