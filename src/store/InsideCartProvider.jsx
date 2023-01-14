import React, { useReducer } from "react";
import InsideCart from "./InsideCart";

const initialState = {
    items: [],
    itemsAmount: 0,
    totalAmount: 0,
    order: false
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_MEAL':
            let newItem = state.items.concat(action.item);
            const updatedTotalAmount = state.totalAmount + action.item.amount * action.item.price;
            const itemsAmount = state.itemsAmount + action.item.amount;
            const findIndex = state.items.findIndex((item) => item.id === action.item.id);
            const exsitingItem = state.items[findIndex];
            if (exsitingItem) {
                newItem = state.items.map((item) => {
                    if (item.id === action.item.id) {
                        return { ...item, amount: action.item.amount + item.amount }
                    } else {
                        return item
                    }
                });
            }
            return {
                items: [...newItem],
                itemsAmount: itemsAmount,
                totalAmount: updatedTotalAmount
            }
        case 'REMOVE_MEAL':
            let updatedItems;
            const indexItem = state.items.findIndex((item) => item.id === action.id);
            const exsitItem = state.items[indexItem];
            const totalAmount = state.totalAmount - exsitItem.price;
            const updatedItemsAmount = state.itemsAmount - 1;
            if (exsitItem.amount === 1) {
                updatedItems = state.items.filter((item) => {
                    return item.id !== action.id
                });
            } else {
                updatedItems = state.items.map((item) => {
                    if (item.id === action.id) {
                        return { ...item, amount: item.amount - 1 }
                    } else {
                        return item
                    }
                });
            }
            return {
                items: [...updatedItems],
                itemsAmount: updatedItemsAmount,
                totalAmount: totalAmount
            }
        case 'ORDER_MEALS':
            if (action.isOrder) {
                return { ...state, order: true }
            }
            return state
        default:
            return state
    }
}

const InsideCartProvider = (props) => {
    const [cartState, dispatchCartAction] = useReducer(reducer, initialState);
    const addToCartHandler = (item) => {
        dispatchCartAction({ type: 'ADD_MEAL', item: item });
    }
    const removeItemHandler = (id) => {
        dispatchCartAction({ type: 'REMOVE_MEAL', id: id });
    }
    const orderHandler = (e) => {
        dispatchCartAction({ type: 'ORDER_MEALS', isOrder: e })
    }
    const data = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        itemsAmount: cartState.itemsAmount,
        addToCart: addToCartHandler,
        removeFromCart: removeItemHandler,
        orderMeals: orderHandler,
        order: cartState.order
    }
    return (
        <InsideCart.Provider value={data}>
            {props.children}
        </InsideCart.Provider>
    )
}

export default InsideCartProvider