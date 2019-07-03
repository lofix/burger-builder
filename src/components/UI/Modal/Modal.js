import React from 'react';

import Auxi from '../../../hoc/Auxi';
import Backdrop from '../Backdrop/Backdrop';

import modules from './Modal.module.css'

const modal = (props) => {
    return (
    <Auxi>
        <Backdrop show={props.show} clicked={props.modalClosed} />
        <div 
            className={modules.Modal}
            style={{
                transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: props.show ? '1' : '0'
            }}>
            {props.children}
        </div>
    </Auxi>
    );
}

export default modal;