import React from 'react';
import OrderForm from './OrderForm';
import OrderMeals from './OrderMeals';
import style from './OrderPage.module.css'

const OrderPage = () => {
  return (
    <div className={style.OrderPage}>
        <OrderForm />
        <OrderMeals />
    </div>
  )
}

export default OrderPage