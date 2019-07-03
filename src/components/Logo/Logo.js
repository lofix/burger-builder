import React from "react";
import burgerLogo from '../../assets/burger-logo.png'

import modules from './Logo.module.css';
const logo = (props) => (
    <div className={modules.Logo}>
        <img src={burgerLogo} alt="My Burger" />
    </div>
);

export default logo;