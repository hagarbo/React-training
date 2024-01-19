import React, { useState } from 'react';

// Definiendo estilos en constantes:

// ? Estilo para usuario logueado
const loggedStyle = {
    color: 'blue'
};

// ? Estilo para usuario no logueado
const unloggedStyle = {
    color : 'tomato',
    fontWeight : 'bold'
};

const GreetingStyled = (props) => {

    const [userLogged, setuserLogged] = useState(false);

    const greetingUser = () => (<h1>Hola, {props.name}</h1>);
    const pleaseLogin = () => (<h1>Please login</h1>);

    return (
        <div style={userLogged ? loggedStyle : unloggedStyle}>
            {
            userLogged ? 
                greetingUser()
                : 
                pleaseLogin()
            }
            
            <button onClick={() => {
                console.log('Boton pulsado');
                setuserLogged(!userLogged);
            }}>
                {userLogged ? 'Logout' : 'Login'}
            </button>
        </div>
    );
}

export default GreetingStyled;
