import React, { Component } from 'react';

import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import Auxi from '../../hoc/Auxi';

import modules from './Layout.module.css';

class Layout extends Component {
    state = {
        showSideDrawer: true
    }
    
    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false})
    }
    
    render () {
        return (
            <Auxi>
                <Toolbar />
                <SideDrawer closed={this.sideDrawerClosedHandler} open={this.state.showSideDrawer}/>
                <main className={modules.Content}>
                    {this.props.children}
                </main>
            </Auxi>
        );
    }
}
export default Layout;