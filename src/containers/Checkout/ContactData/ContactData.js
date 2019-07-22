import React, { Component } from 'react';
import axios from '../../../axios-orders';

import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';

import modules from './ContactData.module.css';

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false
    }

    orderHandler = (e) => {
        e.preventDefault();
        this.setState({ loading: true })
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: 'Maciek Bla',
                address: {
                    street: 'Teststreet 1',
                    zipCode: '48223',
                    country: 'Russia'
                },
                email: 'test@est.com'
            },
            deliveryMethod: 'pickup'
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

    render() {
        return (
            <div className={modules.ContactData}>
                <h4>Enter your contact data:</h4>
                {this.state.loading ? <Spinner /> : (<form>
                    <input className={modules.Input} type="text" name="name" placeholder="Your Name" />
                    <input className={modules.Input} type="email" name="email" placeholder="Your email" />
                    <input className={modules.Input} type="text" name="street" placeholder="Street" />
                    <input className={modules.Input} type="text" name="postal" placeholder="Postal Code" />
                    <Button btnType="Success" clicked={this.orderHandler}>Order</Button>
                </form>)}

            </div>
        )
    }
}

export default ContactData;