import React from 'react';
import modules from './Spinner.module.css';

const spinner = () => {
    return (
        <div className={modules.Loader}>Loading...</div>
    )
}

export default spinner;