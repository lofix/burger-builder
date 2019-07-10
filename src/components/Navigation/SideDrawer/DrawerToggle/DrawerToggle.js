import React from 'react';
import modules from './DrawerToggle.module.css';

const drawerToggle = (props) => (
    <div className={modules.DrawerToggle} onClick={props.clicked}>
        <div></div>
        <div></div>
        <div></div>
    </div>
)

export default drawerToggle;