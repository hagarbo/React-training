/**
 * Ejemplo de uso del Hook useState
 * 
 * Crear un componente de tipo función y acceder a su estado privado 
 * a través de un hook y, además, poder modificarlo
 */

import React, { useState } from 'react';

const Ejemplo1 = () => {

    // Valor inicial para un contador
    const valorInicial = 0;
    // Valor inicial para una persona
    const personaInicial = {
        nombre : "Juan Antonio",
        email : "example@hola.com"
    }

    /**
     * Queremos que el valorInicial y personaInicial sean parte del estado del componente
     * para así poder gestionar su cambio y que este se vea reflejado en la vista del componente
     * 
     * const [nombreVariable, funcionParaCambiar] = useState(valorInicial)
     */

    const [contador, setContador] = useState(valorInicial);
    const [persona, setPersona] = useState(personaInicial);

    /**
     * Función para actualizar el estado privado que contiene el contador
     */
    function incrementarContador(){
        // ? funcionParaCambiar(nuevoValor)
        setContador(contador + 1);
    }

    /**
     * Función para actualizar los datos de la persona en el componente
     */
    function actualizarPersona(){
        setPersona(
            {
                nombre: "Javier",
                email : "javi@javi.es"
            }
        )
    }

    return (
        <div>
            <h1>*** Ejemplo de useState() ***</h1>
            <h2>Contador : {contador}</h2>
            <h2>Datos de la Persona:</h2>
            <h3>Nombre: {persona.nombre}</h3>
            <h3>Email: {persona.email}</h3>

            {/* Boque de botones para actualizar */}
            <div>
                <button onClick={incrementarContador}>Incrementar Contador</button>
                <button onClick={actualizarPersona}>Actualizar Persona</button>
            </div>
        </div>
    );
}

export default Ejemplo1;

