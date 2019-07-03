import React from 'react';
import BuildControl from './BuildControl/BuildControl';

import modules from "./BuildControls.module.css";

const controls = [
    { label: 'Salad', type: 'salad'},
    { label: 'Bacon', type: 'bacon'},
    { label: 'Cheese', type: 'cheese'},
    { label: 'Meat', type: 'meat'}
];

const buildControls = (props) => (
    <div className={modules.BuildControls}>
        <p>Current price: <strong>{props.price.toFixed(2)}</strong></p>
        {controls.map((el) => (
            <BuildControl
                key={el.label}
                label={el.label}
                added = {() => props.ingredientAdded(el.type)}
                removed = {() => props.ingredientRemoved(el.type)} />
        ))}
        <button 
            className={modules.OrderButton}
            disabled={!props.purchasable}
            onClick={props.ordered}>ORDER NOW</button>
    </div>
);

export default buildControls;