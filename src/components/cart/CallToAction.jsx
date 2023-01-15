import style from './CallToAction.module.css'
import React, { useContext } from 'react'
import PrimaryBtn from '../UI/PrimaryBtn'
import SecondaryBtn from '../UI/SecondaryBtn';
import InsideCart from '../../store/InsideCart';
import OrderProcess from '../../store/OrderProcess';

const CallToAction = (props) => {
  const { items } = useContext(InsideCart);
  const { orderMeals } = useContext(OrderProcess);
  const closeCartHandler = () => {
    props.onClose();
  }
  return (
    <div className={style.CallToAction}>
      <SecondaryBtn onClick={closeCartHandler}>Close</SecondaryBtn>
      {items.length ? <PrimaryBtn onClick={orderMeals}>Order</PrimaryBtn> : null}
    </div>
  )
}

export default CallToAction