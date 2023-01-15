import React from "react"
const OrderProcess = React.createContext({
    orderMeals: (() => {}),
    order: false,
    orderSubmit: (() => {}),
    thankYou: false,
    backHome: (() => {})
}) 
export default OrderProcess;