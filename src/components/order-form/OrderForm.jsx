import React, { useState, useRef } from 'react'
import style from './OrderForm.module.css';

const OrderForm = () => {
    const [order, setOrder] = useState(false);
    const cardNumberRef = useRef();
    const cardHolderRef = useRef();
    const expiresRef = useRef();
    const cvcRef = useRef();
    const checkoutHandler = (e) => {
        e.preventDefault();
        const validForm = cardNumberRef.current.value.trim() !== '' && cardHolderRef.current.value.trim() !== '' && expiresRef.current.value.trim() !== '' && cvcRef.current.value.trim() !== '';
        if (!validForm) {
            console.log(false);
            return
        }
        console.log(true);
        // setOrder(true);
    }

    return (
        <form className={style.OrderForm} onSubmit={checkoutHandler}>
            <div className={style.inputsContainer}>
                <label htmlFor="cardNumber">Card Number</label>
                <input type="number" name="Card Number" id="cardNumber" ref={cardNumberRef} />
            </div>
            <div className={style.inputsContainer}>
                <label htmlFor="cardHolder">Card Holder</label>
                <input type="text" name="Card Holder" id="cardHolder" ref={cardHolderRef} />
            </div>
            <div className={style.inputsContainer}>
                <div>
                    <label htmlFor="Expires">Expires</label>
                    <input type="text" name="Expires" id="Expires" ref={expiresRef} />
                </div>
                <div>
                    <label htmlFor="CVC">CVC</label>
                    <input type="number" name="CVC" id="CVC" ref={cvcRef} />
                </div>
            </div>
            <button>Checkout</button>
        </form>
    )
}

export default OrderForm