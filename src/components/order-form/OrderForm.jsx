import React, { useRef, useContext, useState } from 'react'
import style from './OrderForm.module.css';
import useHttp from '../../hooks/useHttp';
import OrderProcess from '../../store/OrderProcess';
import InsideCart from '../../store/InsideCart';

const OrderForm = ({ items, totalAmount }) => {
    const { orderSubmit, backHome } = useContext(OrderProcess);
    const { resetCart } = useContext(InsideCart);
    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const emailRef = useRef();
    const addressRef = useRef();
    const addressTwoRef = useRef();
    const countryRef = useRef();
    const stateRef = useRef();
    const zipRef = useRef();

    const { fetchingData: postUserInfo, error } = useHttp();
    const products = items.map((item) => {
        return { title: item.title, amount: item.amount }
    })

    const [validForm, setvalidForm] = useState(null);

    const checkoutHandler = (e) => {
        e.preventDefault();
        const firstName = firstNameRef.current.value.trim();
        const lastName = lastNameRef.current.value.trim();
        const email = emailRef.current.value.trim();
        const address = addressRef.current.value.trim();
        const addressTwo = addressTwoRef.current.value.trim();
        const country = countryRef.current.value.trim();
        const state = stateRef.current.value.trim();
        const zip = zipRef.current.value.trim();

        const validEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email);
        const validForm = firstName !== '' && lastName !== '' && address !== '' && country !== '' && state !== '' && zip !== '' && validEmail;
        if (!validForm) {
            setvalidForm(false);
            return
        }
        const userData = {
            user_info: { firstName, lastName, email, address, addressTwo, country, state, zip },
            user_orders: { products, totalAmount: totalAmount.toFixed(2) }
        }
        const postData = {
            url: 'https://react-http-ae2f9-default-rtdb.europe-west1.firebasedatabase.app/mealOrders.json',
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: userData
        }
        postUserInfo(postData);
        orderSubmit();
        resetCart();
    }

    return (
        <div className={style.OrderForm}>
            <button className={style.Back} onClick={backHome}>Back</button>
            <form onSubmit={checkoutHandler} noValidate>
                <h2>Billing Adress</h2>
                <div className={style.inputsContainerDiv}>
                    <div>
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" name="firstName" id="firstName" ref={firstNameRef} />
                    </div>
                    <div>
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" name="lastName" id="lastName" ref={lastNameRef} />
                    </div>
                </div>
                <div className={style.inputsContainer}>
                    <label htmlFor="email">Email Address</label>
                    <input type="email" name="Email Address" id="email" ref={emailRef} />
                </div>
                <div className={style.inputsContainer}>
                    <label htmlFor="address">Address</label>
                    <input type="text" name="Address" id="address" ref={addressRef} maxLength={30} />
                </div>
                <div className={style.inputsContainer}>
                    <label htmlFor="address2">Address 2 (Optional)</label>
                    <input type="text" name="Address 2" id="address2" ref={addressTwoRef} maxLength={30} />
                </div>
                <div className={style.inputsContainerDiv}>
                    <div>
                        <label htmlFor="country">Country</label>
                        <input type="text" name="country" id="country" ref={countryRef} />
                    </div>
                    <div>
                        <label htmlFor="state">State</label>
                        <input type="text" name="state" id="state" ref={stateRef} />
                    </div>
                    <div>
                        <label htmlFor="zip">Zip</label>
                        <input type="number" name="zip" id="zip" ref={zipRef} />
                    </div>
                </div>
                <button className={style.Checkout}>Checkout</button>
                {error && <h3>{error}</h3>}
                {validForm === false ? <p>Please Enter Valid Values</p> : null}
            </form>
        </div>

    )
}

export default OrderForm