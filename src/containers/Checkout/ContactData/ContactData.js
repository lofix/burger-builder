import React, { Component } from 'react';
import axios from '../../../axios-orders';
import { connect } from 'react-redux';
import withErrorHandler from '../../../hoc/WithErrorHandler/WithErrorHandler';

import { updateObject, checkValidation } from '../../../shared/utility';

import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input';

import modules from './ContactData.module.css';
import * as actions from '../../../store/actions/index';

class ContactData extends Component {
    state = {
        orderForm: {
                name: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                        placeholder: 'Name'
                    },
                    value: '',
                    validation: {
                        required: true
                    },
                    valid: false,
                    touched: false
                },
                street: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                        placeholder: 'Street'
                    },
                    value: '',
                    validation: {
                        required: true
                    },
                    valid: false,
                    touched: false
                },
                zipCode: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                        placeholder: 'Zip Code'
                    },
                    value: '',
                    validation: {
                        required: true,
                        minLength: 5,
                        maxLength: 5
                    },
                    valid: false,
                    touched: false
                },
                country: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                        placeholder: 'Country'
                    },
                    value: '',
                    validation: {
                        required: true
                    },
                    valid: false,
                    touched: false
                },
                email: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                        placeholder: 'E-Mail'
                    },
                    value: '',
                    validation: {
                        required: true
                    },
                    valid: false,
                    touched: false
                },
                deliveryMethod: {
                    elementType: 'select',
                    elementConfig: {
                        options: [
                             {value: 'fastest', displayValue: 'Fastest'},
                             {value: 'cheapest', displayValue: 'Cheapest'}
                        ]
                    },
                    value: 'Fastest',
                    valid: true,
                    validation: {
                        required: false
                    }
                },
        },
        isFormValid: false
    }

    orderHandler = (e) => {
        e.preventDefault();
        const formData = {};
        for (let elId in this.state.orderForm ) {
            formData[elId] = this.state.orderForm[elId].value; 
        }
        const order = {
            ingredients: this.props.ings,
            price: this.props.price,
            orderData: formData,
            userId: this.props.userId
        };
        this.props.onOrderBurger(order, this.props.token);
    }

    inputChangedHandler = (e, inputId) => {
        const updatedElement = updateObject(this.state.orderForm[inputId], {
            value: e.target.value,
            valid: checkValidation(e.target.value, this.state.orderForm[inputId].validation),
            touched: true
        });
        const updatedOrderForm = updateObject(this.state.orderForm, {
            [inputId]: updatedElement
        } );
        let isFormValid =  true;

        for (let id in updatedOrderForm) {
            isFormValid = updatedOrderForm[id].valid && isFormValid;
        }

        this.setState({
            orderForm: updatedOrderForm,
            isFormValid
        });
    }

    render() {
        const formElementsArray = [];
        Object.keys(this.state.orderForm).map(key => {
            return formElementsArray.push({
                id: key,
                config: this.state.orderForm[key]
            });
        })
        return (
            <div className={modules.ContactData}>
                <h4>Enter your contact data:</h4>
                {this.props.loading ? <Spinner /> : (<form onSubmit={this.orderHandler}>
                    {formElementsArray.map(el => (
                        <Input 
                            key={el.id}
                            elementType={el.config.elementType}
                            elementConfig={el.config.elementConfig}
                            value={el.config.value}
                            invalid={!el.config.valid}
                            shouldValidate = {el.config.validation}
                            touched = {el.config.touched}
                            changed={(event) => this.inputChangedHandler(event, el.id)} />
                    ))}
                    <Button disabled = {!this.state.isFormValid} btnType="Success" clicked={this.orderHandler}>Order</Button>
                </form>)}

            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        ings: state.burgerBuilder.ingredients,
        price: state.burgerBuilder.totalPrice,
        loading: state.order.loading,
        token: state.auth.token,
        userId: state.auth.userId
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onOrderBurger: (orderData, token) => dispatch(actions.purchaseBurger(orderData, token))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(ContactData, axios));