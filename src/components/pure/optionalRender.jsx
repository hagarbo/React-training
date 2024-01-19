import React, { useState } from 'react';

// Login / Logout buttons
const LoginButton = ({loginAction}) => {
    return (
        <button onClick={loginAction}>Login</button>
    )
}

const LogoutButton = ({logoutAction}) => {
    return (
        <button onClick={logoutAction}>Logout</button>
    )
}

// ?(Expresion true) && expresion => se renderiza la expresion
// ?(Expresion false) && expresion => NO se renderiza la expresion

const OptionalRender = () => {

    const [access, setAccess] = useState(true);
    const [numMessage, setNumMessage] = useState(0);

/*     const updateAccess = () => {
        setAccess(!access);
    } */

    const loginAction = () => {
        setAccess(true);
    }

    const logoutAction = () => {
        setAccess(false);
    }

    let optionalButton;

/*     if(access){
        optionalButton = <button onClick={updateAccess}>Logout</button>
    }
    else {
        optionalButton = <button onClick={updateAccess}>Logout</button>
    } */

    if(access){
        optionalButton = <LogoutButton logoutAction={logoutAction} ></LogoutButton>
    }
    else {
        optionalButton = <LoginButton loginAction={loginAction}></LoginButton>
    }

    // Unread Messages

    let addMessages = () => {
        setNumMessage(numMessage+1);
    }

    return (
        <div>
            {/* Optional Button */}
            { optionalButton }
            {/* Number of messages unread */}
            { numMessage > 0 && <p>You have { numMessage } new messages...</p> }
            { numMessage === 0 && <p>You have no new messages</p>}
            <button onClick={addMessages}>Add new message</button>
        </div>
    );
}

export default OptionalRender;
