import React, { useRef } from 'react';

const Child = ({ name, send, update }) => {

    const messageRef = useRef('');
    const nameRef = useRef('');

    function pressButton(){
        const text = messageRef.current.value;
        alert(`Text in input: ${text}`);
    }

    function pressButtonParams(text){
        alert(`Text: ${text}`);
    }

    function submitForm(e){
        e.preventDefault();
        update(nameRef.current.value);
    }

    return (
        <div style={{background:'orange', padding:'30px'}}>
            <p onMouseOver={() => console.log('On Mouse Over')}>Hola, {name}</p>
            <button onClick={() => console.log('Boton 1 pulsado')}>Boton 1</button>
            <button onClick={pressButton}>Boton 2</button>
            <button onClick={() => pressButtonParams('Hello')}>Boton 3</button>
            <input placeholder='Insert a text' 
                onFocus={() => console.log('Input Focus')} 
                onChange={(e) => console.log('Input Changed', e.target.value)}
                onCopy={() => console.log('Input copied')}
                ref={messageRef}
                />
            <button onClick={() => send(messageRef.current.value)}>Send Message</button>
            <div style={{marginTop:'30px'}}>
                <form onSubmit={submitForm}>
                    <input ref={nameRef} placeholder='New Name'/>
                    <button type='submit'>Actualizar Nombre</button>
                </form>
            </div>
        </div>
    );
}

export default Child;
