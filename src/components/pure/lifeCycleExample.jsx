/**
 * Ejemplo de componente de tipo clase que dispone de 
 * los métodos de ciclo de vida
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LifeCycleExample extends Component {
    constructor(props) {
        super(props);
        console.log('CONSTRUCTOR: Cuando se instancia el componente');
    }

    componentWillMount() {
        console.log('WILLMOUNT: Antes del montaje del componente');
    }

    componentDidMount() {
        console.log('DIDMOUNT: Cuando se monta el componente');
    }

    componentWillReceiveProps(nextProps) {
        console.log('WILLRECEIVEPROPS: Si va a recibir nuevas props');
    }

    shouldComponentUpdate(nextProps, nextState) {
        /**
         * Sirve para controlar si el componente debe o no actualizarse
         */
        // return true / false
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('WILLUPDATE: Antes de que el componente se actualice');
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('DIDUPDATE: Justo despues de actualizarse');
    }

    componentWillUnmount() {
        console.log('WILLUNMOUNT: Justo antes de desaparecer');
    }

    render() {
        return (
            <div>

            </div>
        );
    }
}

LifeCycleExample.propTypes = {

};

export default LifeCycleExample;