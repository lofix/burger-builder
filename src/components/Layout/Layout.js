import React from 'react';
import Auxi from '../../hoc/Auxi';

import modules from './Layout.module.css';

const Layout = (props) => [
    <Auxi>
        <div>
            Toolbar, SideDrawer, 
        </div>
        <main className={modules.Content}>
            {props.children}
        </main>
    </Auxi>
];
export default Layout;