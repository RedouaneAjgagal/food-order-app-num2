import style from './CartItem.module.css'
import React from 'react'
import ControlAmount from './ControlAmount'

const CartItem = (props) => {
  const price = `$${props.value.price.toFixed(2)}`
  const amount = `x${props.value.amount}`
  return (
    <li className={style.CartItem}>
      <article className={style.CartItem__details}>
        <h2>{props.value.title}</h2>
        <div>
          <span>{price}</span>
          <span>{amount}</span>
        </div>
      </article>
      <ControlAmount data={props.value} />
    </li>
  )
}

export default CartItem