import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';

import modules from './NavigationItems.module.css';

const navigationItems = (props) => (
    <ul className={modules.NavigationItems}>
        <NavigationItem link="/"> Burger Builder</NavigationItem>
        <NavigationItem link="/orders">Orders</NavigationItem>
    </ul>
);

export default navigationItems;