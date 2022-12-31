import style from './ControlAmount.module.css'
import React, {useContext} from 'react'
import { FaPlus, FaMinus } from 'react-icons/fa'
import InsideCart from '../../store/InsideCart'

const ControlAmount = (props) => {
  const ctx = useContext(InsideCart);
  const data = props.data;
  const addItemAmountHandler = () => {
    ctx.addToCart({...data, amount: 1});
  }
  const removeItemAmountHandler = () => {
    ctx.removeFromCart(data.id);
  }
  return (
    <div className={style.ControlAmount}>
      <button onClick={removeItemAmountHandler}><FaMinus /></button>
      <button onClick={addItemAmountHandler}><FaPlus /></button>
    </div>
  )
}

export default ControlAmount