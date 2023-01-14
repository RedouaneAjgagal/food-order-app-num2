import React from 'react'
import style from './OrderList.module.css';

const OrderList = (props) => {
  const amount = `x${props.value.amount}`;
  const price = `$${(props.value.price * props.value.amount).toFixed(2)}`;
  return (
    <li className={style.OrderList}>
        <article>
            <h3>{props.value.title}</h3>
            <span>{amount}</span>
        </article>
        <span>{price}</span>
    </li>
  )
}

export default OrderList