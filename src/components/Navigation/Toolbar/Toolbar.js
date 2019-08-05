import React from 'react';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

import modules from './Toolbar.module.css';
const toolbar = (props) => (
    <header className={modules.Toolbar}>
        <DrawerToggle clicked={props.drawerToggleClicked} />
        <div className={modules.Logo}><Logo /></div>
        <nav className={modules.DesktopOnly}>
            <NavigationItems isAuthenticated={props.isAuth} />
        </nav>
    </header>
);

export default toolbar;