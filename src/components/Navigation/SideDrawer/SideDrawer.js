import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Auxi from '../../../hoc/Auxi/Auxi';

import modules from './SideDrawer.module.css';

const sideDrawer = (props) => {
    let attachedClasses = [modules.SideDrawer, modules.Close];
    if (props.open) {
        attachedClasses = [modules.SideDrawer, modules.Open]
    }
    return (
        <Auxi>
            <Backdrop clicked={props.closed} show={props.open}/> 
            <div 
                className={attachedClasses.join(' ')}
                onClick={props.closed}
            >
                <div className={modules.Logo}><Logo /></div>
                <nav>
                    <NavigationItems 
                        isAuthenticated={props.isAuth} 
                    />
                </nav>            
            </div>
        </Auxi>
    );
};

export default sideDrawer;
