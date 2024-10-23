import React, { useState } from 'react';
import './formComponent.css';
import homePage from '../page/homepage';

const formComponent = (props) => {

    const [name, setName] = useState('');
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    console.log(name, 'name', password, 'password');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (name === '' && password === '') {
            setError(true)
        } else {
            setError(false)
            props.setUser([name])
        }

    }


    return (
        <div className='cuadro'>
            <h1>login-5</h1>
            <form className='form' onSubmit={handleSubmit}>
                <p>nombreusuario</p>
                <input onChange={e => {
                    console.log(e.target.value, 'e');
                    setName(e.target.value)
                }} type="text" value={name} placeholder='nombreusuario' />
                {error && <p className='error'>El campo es obligatorio</p>}
                <p>contraseña</p>
                <input type="text" onChange={e => {
                    setPassword(e.target.value,)
                }} placeholder='contraseña' value={password} />
                {error && <p className='error'>El campo es obligatorio</p>}
                <button type='submit'>Iniciar Sesion</button>
            </form>
        </div>
    );
};
export default formComponent;