import React from 'react';

import modules from './BuildControl.module.css';

const buildControl = (props) => (
    <div className={modules.BuildControl}>
        <div className={modules.Label}>{props.label}</div>
        <button 
            className={modules.Less}
            onClick={props.removed}>
            Less
        </button>
        <button 
            onClick={props.added}
            className={modules.More}>
            More
        </button>
    </div>
)

export default buildControl;