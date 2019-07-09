import React from 'react';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

import modules from './Toolbar.module.css';
const toolbar = (props) => (
    <header className={modules.Toolbar}>
        <div>MENU</div>
        <div className={modules.Logo}><Logo /></div>
        <nav className={modules.DesktopOnly}>
            <NavigationItems />
        </nav>
    </header>
);

export default toolbar;