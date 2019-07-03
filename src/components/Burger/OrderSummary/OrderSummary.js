import React from 'react';

import Button from '../../UI/Button/Button';
import Auxi from '../../../hoc/Auxi';

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return <li key={igKey}> 
                    <span style={{textTransform: 'capitalize'}}>{igKey}:</span>
                    {props.ingredients[igKey]}
                    </li> 
        });
    return (
        <Auxi>
            <h3>Your Order:</h3>
            <p>Delicious burger with following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price: {props.price}</strong></p>
            <Button btnType="Danger" clicked={props.purchaseCancelled}>CANCEL</Button>
            <Button btnType="Success" clicked={props.purchaseContinue}>CONTINUE</Button>
        </Auxi>
    );
};

export default orderSummary;