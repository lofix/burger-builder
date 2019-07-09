import React from 'react';

import modules from './NavigationItem.module.css';
const navigationItem = (props) => (
    <li className={modules.NavigationItem}>
        <a 
            href={props.link}
            className={props.active ? modules.active : null}>{props.children}</a>
    </li>
)

export default navigationItem;