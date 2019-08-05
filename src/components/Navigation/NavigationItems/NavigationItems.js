import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';

import modules from './NavigationItems.module.css';

const navigationItems = (props) => (
    <ul className={modules.NavigationItems}>
        <NavigationItem link="/"> Burger Builder</NavigationItem>
        {props.isAuthenticated
            ? <NavigationItem link="/orders">Orders</NavigationItem>
            : null }
        {!props.isAuthenticated 
            ? <NavigationItem link="/auth">Login</NavigationItem>
            : <NavigationItem link="/logout">Logout</NavigationItem> }
    </ul>
);

export default navigationItems;