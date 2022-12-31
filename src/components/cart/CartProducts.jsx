import style from './CartProducts.module.css'
import React, { useContext } from 'react'
import CartItem from './CartItem'
import InsideCart from '../../store/InsideCart'
const CartProducts = () => {
  const ctx = useContext(InsideCart);
  const cartItem = ctx.items.map((item) => {
    return <CartItem value={item} key={item.id} />
  });
  return (
    <ul className={style.CartProducts}>
      {cartItem}
    </ul>
  )
}

export default CartProducts