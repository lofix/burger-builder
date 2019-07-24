import React, { Component } from 'react';
import axios from '../../../axios-orders';

import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input';

import modules from './ContactData.module.css';

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
                    value: '',
                    valid: true,
                    validation: {
                        required: false
                    }
                },
        },
        loading: false,
        isFormValid: false
    }

    orderHandler = (e) => {
        e.preventDefault();
        this.setState({ loading: true })
        const formData = {};
        for (let elId in this.state.ordeerForm ) {
            formData[elId] = this.state.orderForm[elId].value; 
        }
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            orderData: formData
        };
        axios.post('/orders.json', order)
            .then(response => {
                this.setState({ loading: false });
                this.props.history.push('/');
            })
            .catch(error => {
                this.setState({ loading: false })
            });
    }

    inputChangedHandler = (e, inputId) => {
        const updatedOrderForm = {
            ...this.state.orderForm
        };
        const updatedElement = {
            ...updatedOrderForm[inputId]
        };
        updatedElement.value = e.target.value;
        updatedElement.valid = this.checkValidation(updatedElement.value, updatedElement.validation);
        updatedElement.touched = true;
        updatedOrderForm[inputId] = updatedElement;

        let isFormValid =  true;

        for (let id in updatedOrderForm) {
            isFormValid = updatedOrderForm[id].valid && isFormValid;
        }

        this.setState({
            orderForm: updatedOrderForm,
            isFormValid
        });
    }

    checkValidation(val, rule) {
        let isValid = true;
        if ( rule.required ) {
            isValid = val.trim() !== '' && isValid;
        }

        if (rule.minLength) {
            isValid = val.length >= rule.minLength  && isValid;
        }

        if (rule.maxLength) {
            isValid = val.length >= rule.maxLength  && isValid;
        }
        return isValid;
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
                {this.state.loading ? <Spinner /> : (<form onSubmit={this.orderHandler}>
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

export default ContactData;