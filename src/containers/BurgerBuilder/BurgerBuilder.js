import React, {Component} from 'react';
import { connect } from 'react-redux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/WithErrorHandler/WithErrorHandler';
import * as actionTypes from '../../store/actions/actionTypes';

import Auxi from '../../hoc/Auxi/Auxi';

import axios from '../../axios-orders';

class BurgerBuilder extends Component {
    state = {
        purchasing: false,
        loading: false
    }

    componentDidMount () {
    //     axios.get('https://react-my-burger-cf7d0.firebaseio.com/ingredients.json')
    //         .then(response => {
    //             this.setState({ingredients:response.data })
    //         })
    //         .catch(error => {});
    }
    purchaseHandler = () => {
        this.setState({purchasing: true});
    }

    updatePurchaseState = (updatedIngredients) => {
        const sum = Object.keys(updatedIngredients)
            .map(igKey => {
                return updatedIngredients[igKey];
            })
            .reduce((sum, el) => {
                return sum + el;
            }, 0)
        return sum > 0;
    }

    purchaseCancelHandler = () => {
        this.setState({purchasing: false});
    }

    purchaseContinueHandler = () => {
        this.props.history.push({
            pathname: '/checkout'
        })
    }

    render() {
        let orderSummary = null
        
        let burger = <Spinner />

        if (this.props.ings) {
            burger = (
                <Auxi>
                    <Burger ingredients={this.props.ings}/>
                    <BuildControls 
                        ingredientAdded={this.props.onIngredientAdded}
                        ingredientRemoved={this.props.onIngredientRemoved}
                        price = {this.props.price}
                        purchasable = {this.updatePurchaseState(this.props.ings)}
                        ordered = {this.purchaseHandler}
                    />
                </Auxi>);
            orderSummary = (<OrderSummary 
                ingredients = {this.props.ings} 
                purchaseCancelled={this.purchaseCancelHandler}
                purchaseContinue={this.purchaseContinueHandler} 
                price={this.props.price.toFixed(2)}/>)
        }
        
        if ( this.state.loading ) {
            orderSummary = <Spinner />
        }

        return (
        <Auxi>
            <Modal show ={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                {orderSummary}
            </Modal>
            {burger}
        </Auxi>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onIngredientAdded: (ingredientName) => dispatch ({
            type: actionTypes.ADD_INGREDIENT,
            ingredientName            
        }),
        onIngredientRemoved: (ingredientName) => dispatch ({
            type: actionTypes.REMOVE_INGREDIENT,
            ingredientName            
        })
    };
};
const mapStateToProps = state => {
    return {
        ings: state.ingredients,
        price: state.totalPrice
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios));