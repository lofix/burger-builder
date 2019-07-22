import React from 'react';
import {NavLink} from 'react-router-dom'
import modules from './NavigationItem.module.css';
const navigationItem = (props) => (
    <li className={modules.NavigationItem}>
        <NavLink to={props.link} exact activeClassName={modules.active}>{props.children}</NavLink>
    </li>
)

export default navigationItem;