import React from 'react';
import './titulo.css'

const Titulo = (props) => {
  console.log(props, 'props titulo');

  return(
    <div>
      <p>{props.title}</p>
    </div>
  )
}

export default Titulo;