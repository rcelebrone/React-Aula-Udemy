import React from 'react';
import ReactDOM from 'react-dom';
import Family from './family';
import Member from './member';

ReactDOM.render(
    <Family lastName="Celebrone">
        <Member name="Rodrigo" />
        <Member name="Flávia Andressa de O." />
        <Member name="Renan" />
    </Family>
    ,document.getElementById('app')
)