import React, {useState} from "react";
import PropTypes from "prop-types";

const GreetingF = (props) => {

    // useState
    // const [variable,metodoActualizar] = useState(valor inicial)
    const [age, setage] = useState(29);

    const birthday = ()=>{
        setage(age+1)
    }

    return (
        <div>
        <h1>HOLA AMIGO {props.name}, te saluda una funcion!</h1>
        <h2>Has alcanzado el nivel {age}</h2>
        <div>
            <button onClick={birthday}>Level Up</button>
        </div>
        </div>
    );
};

GreetingF.propTypes = {
    name: PropTypes.string,
};

export default GreetingF;
