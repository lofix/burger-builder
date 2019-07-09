import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

import modules from './SideDrawer.module.css';

const sideDrawer = () => {
    return (
        <div className={modules.SideDrawer}>
            <div className={modules.Logo}><Logo /></div>
            <nav>
                <NavigationItems />
            </nav>            
        </div>
    );
};

export default sideDrawer;
