import React from 'react';

import Logo from '../../Logo/Logo';

import modules from './Toolbar.module.css';
const toolbar = (props) => (
    <header className={modules.Toolbar}>
        <div>MENU</div>
        <Logo />
        <nav>
            <ul>
                <li></li>
            </ul>
        </nav>
    </header>
);

export default toolbar;