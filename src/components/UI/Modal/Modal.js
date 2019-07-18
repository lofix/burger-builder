import React, { Component } from 'react';

import Auxi from '../../../hoc/Auxi/Auxi';
import Backdrop from '../Backdrop/Backdrop';

import modules from './Modal.module.css'

class Modal extends Component {
    shouldComponentUpdate(nextProps, NS) {
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
    }

    render() {
        return (
            <Auxi>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
                <div 
                    className={modules.Modal}
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.show ? '1' : '0'
                    }}>
                    {this.props.children}
                </div>
            </Auxi>
        );
    }
   
}

export default Modal;