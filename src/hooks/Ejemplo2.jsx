/**
 * Ejemplo de uso de los siguiente hooks:
 * - useState
 * - useRef : nos sirve para referenciar elementos de la vista
 * - useEffect : nos sirve para detectar cambios en la vista
 */

import React, {useState, useRef, useEffect} from 'react';

const Ejemplo2 = () => {

    // Vamos a crear 2 contadores distintos, cada uno en un estado diferente
    const [contador1, setContador1] = useState(0);
    const [contador2, setContador2] = useState(0);

    // Vamos a crear 1 referencia con useRef para asociar una variable a un elemento del DOM
    const miRef = useRef();

    //Funciones para incrementar los contadores

    function incrementar1(){
        setContador1(contador1 + 1);
    }

    function incrementar2(){
        setContador2(contador2 + 1);
    }

    /**
     * Trabajando con useEffect
     */

    /**
     * ? Caso 1: Ejecutar siempre un snippet de codigo
     * Cada vez que haya un cambio en el estado del componente
     * se ejecuta aquello que esté dentro del useEffect()
     */

/*     useEffect(() => {
        console.log('CAMBIO EN EL ESTADO DEL COMPONENTE');
        console.log('Mostrando referencia al elemento DOM:');
        console.log(miRef);
    }); */

    /**
     * ? Caso 2: Ejecutar SOLO CUANDO CAMBIE CONTADOR1
     * Cada veza que haya un cambio en contador 1, se ejecuta lo que diga el useEffect()
     * En caso de que cambie el contador 2 no pasará nada
     */
 /*    useEffect(() => {
        console.log('CAMBIO EN EL ESTADO DEL CONTADOR 1');
        console.log('Mostrando referencia al elemento DOM:');
        console.log(miRef);
    }, [contador1]);
 */

    /**
     * ? Caso 3: Ejecutar SOLO CUANDO CAMBIE CONTADOR1 o CONTADOR 3
     * Cada veza que haya un cambio en contador 1, se ejecuta lo que diga el useEffect()
     * En caso de que cambie el contador 2 lo mismo
     */

        useEffect(() => {
            console.log('CAMBIO EN EL ESTADO DEL CONTADOR 1');
            console.log('Mostrando referencia al elemento DOM:');
            console.log(miRef);
        }, [contador1,contador2]);

        
    return (
        <div>
            <h1>*** Ejemplo de useState(), useRef() y useEffect() ***</h1>
            <h2>CONTADOR 1: {contador1}</h2>
            <h2>CONTADOR 2: {contador2}</h2>
            {/* Elemento Referenciado */}
            <h4 ref={miRef}>
                Ejemplo de elemento referenciado
            </h4>

            <div>
                <button onClick={incrementar1}>Incrementar contador1</button>
                <button onClick={incrementar2}>Incrementar contador 2</button>
            </div>
        </div>
    );
}

export default Ejemplo2;
