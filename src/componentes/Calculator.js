// Importando o React e o Component 
import React, { Component } from 'react';

// Importando o CSS
import './Calculator.css';

// Importando componentes
import Display from './Display';
import Button from './Button';

const estadoInicial = {
    valorExibido: 0
}

export default class Calculator extends Component {
    state = {...estadoInicial}

    constructor(props) {
        super(props);

        this.adicionarNumeroAoDisplay = this.adicionarNumeroAoDisplay.bind(this);
    }
    
    adicionarNumeroAoDisplay(n) {
        
        this.setState({valorExibido : this.state.valorExibido + n});
        
        if (this.state.valorExibido.length > 10)
            this.setState({valorExibido : "ERRO"});
    }

    render() {
        return (
            <div className = "calculadora">
                <Display exibir={this.state.valorExibido} />
                <Button valor='7' clicar={this.adicionarNumeroAoDisplay} />
                <Button valor='8' clicar={this.adicionarNumeroAoDisplay} />
                <Button valor='9' clicar={this.adicionarNumeroAoDisplay} />
                <Button valor='/' />
                <Button valor='4' clicar={this.adicionarNumeroAoDisplay} />
                <Button valor='5' clicar={this.adicionarNumeroAoDisplay} />
                <Button valor='6' clicar={this.adicionarNumeroAoDisplay} />
                <Button valor='*'/>
                <Button valor='1' clicar={this.adicionarNumeroAoDisplay} />
                <Button valor='2' clicar={this.adicionarNumeroAoDisplay} />
                <Button valor='3' clicar={this.adicionarNumeroAoDisplay} />
                <Button valor='-'/>
                <Button valor='0' clicar={this.adicionarNumeroAoDisplay} />
                <Button valor=','/>
                <Button valor=''/>
                <Button valor='+'/>
            </div>
        );
    }
}