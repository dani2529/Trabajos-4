import React from 'react'


const homePage = (props) => {

  const handleClick = () =>{
       props.setUser([])

    }

    return (
        <div>
            <h1>homepage</h1>
            <h2>nombre usuario: {props.user}</h2>
            <button onClick={handleClick}>
                Salir
            </button>
        </div>

    )
}

export default homePage