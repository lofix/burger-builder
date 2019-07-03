import React from 'react';
import modules from './Button.module.css';

const button = (props) => (
    <button
        className={[modules.Button, modules[props.btnType]].join(' ')}
        onClick={props.clicked}>
        {props.children}
    </button>
);

export default button;