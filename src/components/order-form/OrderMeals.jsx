import React, { useContext } from 'react';
import style from './OrderMeals.module.css';
import OrderList from './OrderList';
import InsideCart from '../../store/InsideCart';

const OrderMeals = () => {
  const { items, totalAmount } = useContext(InsideCart);
  const showMeals = items.map((meal) => <OrderList key={meal.id} value={meal} />)
  const totalPrice = `$${totalAmount.toFixed(2)}`
  return (
    <section className={style.OrderMeals}>
      <ul>
        {showMeals}
      </ul>
      <hr />
      <div>
        <h2>Total Amount:</h2>
        <span>{totalPrice}</span>
      </div>
    </section>
  )
}

export default OrderMeals