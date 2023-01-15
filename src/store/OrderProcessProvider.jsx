import React, { useReducer } from 'react';
import OrderProcess from './OrderProcess';

const initialState = {
    order: false,
    thankYou: false
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'ORDER_MEALS':
            return { thankYou: false, order: true }
        case 'ORDER_SUBMISSION':
            return { order: false, thankYou: true }
        case 'RESET':
            return { order: false, thankYou: false }
        default:
            return state;
    }
}


const OrderProcessProvider = (props) => {

    const [orderState, dispatchOrder] = useReducer(reducer, initialState)

    const orderHandler = () => {
        dispatchOrder({ type: 'ORDER_MEALS' });
    }
    const orderSubmitHandler = () => {
        dispatchOrder({ type: 'ORDER_SUBMISSION' });
    }
    const resetHandler = () => {
        dispatchOrder({ type: 'RESET' });
    }
    const data = {
        orderMeals: orderHandler,
        order: orderState.order,
        orderSubmit: orderSubmitHandler,
        thankYou: orderState.thankYou,
        reset: resetHandler
    }
    return (
        <OrderProcess.Provider value={data}>
            {props.children}
        </OrderProcess.Provider>
    )

}

export default OrderProcessProvider