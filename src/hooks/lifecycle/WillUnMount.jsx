/**
 * Ejemplo de uso de metodo componentWillUnmount en componente
 * clase y uso de hook en componente funcional
 */

import React, { Component, useEffect } from 'react'

export class WillUnMount extends Component {

    componentWillUnmount(){
        console.log('Comportamiento antes de que el componente desaparezca');
    }

    render() {
        return (
        <div>
            <h1>WillUnMount</h1>    
        </div>
        )
    }
}


export const WillUnMountHook = () => {

    useEffect(() => {
        // aqui no ponemos nada
        return () => {
            console.log('Comportamiento antes de que el componente desaparezca');
        };
    }, []);

    return (
        <div>
            <h1>WillUnMount</h1>
        </div>
    );
}
