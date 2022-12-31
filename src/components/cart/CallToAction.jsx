import style from './CallToAction.module.css'
import React, { useContext } from 'react'
import PrimaryBtn from '../UI/PrimaryBtn'
import SecondaryBtn from '../UI/SecondaryBtn';
import InsideCart from '../../store/InsideCart';

const CallToAction = (props) => {
  const { items } = useContext(InsideCart);
  const closeCartHandler = () => {
    props.onClose();
  }
  return (
    <div className={style.CallToAction}>
      <SecondaryBtn onClick={closeCartHandler}>Close</SecondaryBtn>
      {items.length ? <PrimaryBtn>Order</PrimaryBtn> : null}
    </div>
  )
}

export default CallToAction