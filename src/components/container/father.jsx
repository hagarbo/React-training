import React, { useState } from 'react';
import Child from '../pure/child';

const Father = () => {

    const [name, setName] = useState('Alonso');

    function showMessage(text){
        alert(`Message received: ${text}`);
    }
    
    function updateName(newName){
        setName(newName);
    }

    return (
        <div style={{background: 'aquamarine',padding:'10px'}}>
            <Child name={name} send={showMessage} update={updateName}></Child>
        </div>
    );
}

export default Father;
