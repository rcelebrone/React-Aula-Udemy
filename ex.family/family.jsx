import React from 'react';
import { childWithProps } from '../utils/reactUtils';

export default (props) => (
    <div>
        <h1>Família {props.lastName}</h1>
        { childWithProps(props.children, props) }
    </div>
);

//...props faz um clone das propriedades da familia, 
//para não passar diretamente a referencia de familia, 
//evitando que um componente interno possa modificar o externo
// para usar o operador spread: npm i --save-dev babel-plugin-transform-object-rest-spread@6.22.0