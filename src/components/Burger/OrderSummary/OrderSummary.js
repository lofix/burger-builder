import React, { Component } from 'react';

import Button from '../../UI/Button/Button';
import Auxi from '../../../hoc/Auxi/Auxi';

class OrderSummary extends Component {
    render() {
        const ingredientSummary = Object.keys(this.props.ingredients)
        .map(igKey => {
            return <li key={igKey}> 
                    <span style={{textTransform: 'capitalize'}}>{igKey}:</span>
                    {this.props.ingredients[igKey]}
                    </li> 
            });
        return (
            <Auxi>
                <h3>Your Order:</h3>
                <p>Delicious burger with following ingredients:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total Price: {this.props.price}</strong></p>
                <Button btnType="Danger" clicked={this.props.purchaseCancelled}>CANCEL</Button>
                <Button btnType="Success" clicked={this.props.purchaseContinue}>CONTINUE</Button>
            </Auxi>
        );
    }
};

export default OrderSummary;