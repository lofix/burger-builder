import React, { Component } from 'react';
import axios from '../../axios-orders';

import Order from '../../components/Order/Order';
import withErrorHandler from '../../hoc/WithErrorHandler/WithErrorHandler';

class Orders  extends Component {
    state = {
        orders: [],
        loading: true
    }
    componentDidMount() {
        axios.get('/orders.json')
            .then(response => {
                const fetchedOrders = [];
                for (let key in response.data) {
                    fetchedOrders.push({
                        ...response.data[key],
                        id: key
                    });
                }
                this.setState({
                    loading: false,
                    orders: fetchedOrders
                })
            })
            .catch(err => {
                this.setState({
                    loading: false
                })
            })
    }
    render() {
        return (
            <div>
                {this.state.orders.map(order => (
                    <Order 
                        key={order.id}
                        price={ +order.price}
                        ingredients={order.ingredients} />
                ))}
            </div>
        );
    }
}

export default withErrorHandler(Orders, axios);