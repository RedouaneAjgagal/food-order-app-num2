import style from './ItemAddToCart.module.css';
import React, {useContext, useRef} from 'react'
import PrimaryBtn from '../UI/PrimaryBtn';
import {FaPlus} from 'react-icons/fa'
import InsideCart from '../../store/InsideCart';

const ItemAddToCart = (props) => {
    const interedAmount = useRef();
    const ctx = useContext(InsideCart);
    const id = `Amount_${props.details.id}`
    const cartData = {
        id: props.details.id,
        title: props.details.title,
        price: props.details.price
    }
    const addMealHandler = (e) => {
        e.preventDefault();
        ctx.addToCart({
            ...cartData,
            amount: +interedAmount.current.value
        });
    }
    return (
        <form className={style.AddToCartForm} onSubmit={addMealHandler}>
            <div className={style.AddToCartLabel}>
                <label htmlFor={id}>Amount</label>
                <input type="number" defaultValue={1} max={5} min={1} id={id} ref={interedAmount} />
            </div>
            <PrimaryBtn className={style.AddToCartBtn}><FaPlus /> Add</PrimaryBtn>
        </form>
    )
}

export default ItemAddToCart