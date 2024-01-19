/**
 * Ejemplo de Hooks:
 * - useState
 * - useContext
 */

import React, { useState, useContext } from 'react';

/**
 * 
 * @returns Componente 1
 * Dispone de un contexto que va a tener un valor
 * que recibe desde el padre
 */
const miContexto = React.createContext(null);

const Componente1 = () => {

    const state = useContext(miContexto);

    return (
        <div>
            <h1>
                El Token es: {state.token}
            </h1>
            <Componente2></Componente2>
        </div>
    );
}


const Componente2 = () => {

    const state = useContext(miContexto);

    return (
        <div>
            <h2>
                La sesión es: {state.sesion}
            </h2>        
        </div>
    );
}


const MiComponenteConContexto = () => {

    const estadoInicial = {
        token: '1234567',
        sesion: 1
    }

    // Creamos el estado del componente
    const [sessionData, setSessionData] = useState(estadoInicial);

    function actualizarSesion(){
        setSessionData({
            token: "abcdefghj85",
            sesion: sessionData.sesion + 1
        });   
    }

    return (
        <miContexto.Provider value={sessionData}>
            {/* Todo lo que este aqui dentro puede leer los datos de sessionData */}
            {/* Además si se actualizar los componentes de aquí tambien lo actualizan */}
            <Componente1></Componente1>
            <button onClick={actualizarSesion}>Actualizar Sesion</button>
        </miContexto.Provider>
    );
}

export default MiComponenteConContexto;


