import style from './TotalAmount.module.css'
import React, { useContext } from 'react'
import InsideCart from '../../store/InsideCart'

const TotalAmount = () => {
  const ctx = useContext(InsideCart);
  const totalAmount = `$${ctx.totalAmount.toFixed(2)}`

  return (
    <div className={style.TotalAmount}>
      <h3>Total Amount</h3>
      <span>{totalAmount}</span>
    </div>
  )
}

export default TotalAmount