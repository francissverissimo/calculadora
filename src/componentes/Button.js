import React from 'react';
import './Button.css'

export default props =>
    <button className = 'botao'
        onClick = {e => props.clicar(props.valor)}>
            {props.valor} </button>