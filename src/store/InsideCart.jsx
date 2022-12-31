import React from "react";
const InsideCart = React.createContext({
    items: [],
    totalAmount: 0,
    itemsAmount: 0,
    addToCart: (() => {}),
    removeFromCart: (() => {})
});
export default InsideCart;