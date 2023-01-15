import React, { useContext } from 'react';
import OrderForm from './OrderForm';
import OrderMeals from './OrderMeals';
import style from './OrderPage.module.css'
import InsideCart from '../../store/InsideCart';

const OrderPage = () => {
  const orderMeals = useContext(InsideCart);
  return (
    <div className={style.OrderPage}>
      <OrderForm items={orderMeals.items} totalAmount={orderMeals.totalAmount} />
      <OrderMeals items={orderMeals.items} totalAmount={orderMeals.totalAmount} />
    </div>
  )
}

export default OrderPage