import React from 'react'
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';

import modules from './CheckoutSummary.module.css';

const checkoutSummary = (props) => {
    return (
        <div className={modules.CheckoutSummary}>
            <h1>Hope it tastes well</h1>
            <div style={{width: '100%', margin: 'auto'}}>
                <Burger ingredients={props.ingredients}/>
            </div>
            <Button clicked={props.onCheckoutCancelled} btnType="Danger">CANCEL</Button>
            <Button clicked={props.checkoutContinued} btnType="Success">CONTINUE</Button>
        </div>
    )
}

export default checkoutSummary;