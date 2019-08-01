import React, { Component } from 'react';
import axios from '../../axios-orders';
import { connect } from 'react-redux';
import Order from '../../components/Order/Order';
import withErrorHandler from '../../hoc/WithErrorHandler/WithErrorHandler';
import * as actions from '../../store/actions/index';
import Spinner from '../../components/UI/Spinner/Spinner';

class Orders  extends Component {

    componentDidMount() {
        this.props.onFetchOrders()
    }

    render() {
        let orders = <Spinner />
        if (!this.props.loading) {
            orders =  this.props.orders.map(order => 
                (
                    <Order 
                        key={order.id}
                        price={ +order.price}
                        ingredients={order.ingredients} />
                ))
        }
        return (
            <div>
                {orders}
            </div>
        )
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchOrders: () => dispatch(actions.fetchOrders())
    };
}
const mapStateToProps = state => {
    return {
        orders: state.order.orders,
        loading: state.order.loading
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Orders, axios));