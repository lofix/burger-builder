import React from 'react';

import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import Auxi from '../../hoc/Auxi';

import modules from './Layout.module.css';

const Layout = (props) => [
    <Auxi>
        <Toolbar />
        <SideDrawer />
        <main className={modules.Content}>
            {props.children}
        </main>
    </Auxi>
];
export default Layout;