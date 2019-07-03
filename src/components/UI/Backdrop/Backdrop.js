import React from 'react';

import modules from './Backdrop.module.css';

const backdrop = (props) => (
    props.show ? <div className={modules.Backdrop} onClick={props.clicked}></div> : null
);

export default backdrop;