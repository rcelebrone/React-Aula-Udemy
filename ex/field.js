import React, { Component } from 'react'

class Field extends Component {

    constructor(props)
    {
        super(props);
        //passa o initialValue informado no index.jsx para o state qnd carrega o componente
        this.state = { value: props.initialValue };

        //para garantir que o this seja o this dessa classe e não o this do "input onchange", uso o bind abaixo
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    render(){
        return(
            <div>
                <label>{this.state.value}</label><br />
                <input onChange={this.handleChange} value={this.state.value} />
            </div>
        )
    }
}

export default Field;