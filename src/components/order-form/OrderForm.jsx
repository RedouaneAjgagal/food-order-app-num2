import React, { useRef, useContext, useState } from 'react'
import style from './OrderForm.module.css';
import useHttp from '../../hooks/useHttp';
import OrderProcess from '../../store/OrderProcess';
import InsideCart from '../../store/InsideCart';
import InputContainer from './InputContainer';

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
                    <InputContainer id={'firstName'} label={'First Name'} refInput={firstNameRef} />
                    <InputContainer id={'lastName'} label={'Last Name'} refInput={lastNameRef} />
                </div>
                <div className={style.inputsContainer}>
                    <InputContainer id={'email'} label={'Email Address'} refInput={emailRef} />
                </div>
                <div className={style.inputsContainer}>
                    <InputContainer id={'address'} label={'Address'} refInput={addressRef} />
                </div>
                <div className={style.inputsContainer}>
                    <InputContainer id={'addressTwo'} label={'Address 2 (Optional)'} refInput={addressTwoRef} />
                </div>
                <div className={style.inputsContainerDiv}>
                    <div>
                        <InputContainer id={'country'} label={'Country'} refInput={countryRef} />
                    </div>
                    <div>
                        <InputContainer id={'state'} label={'States'} refInput={stateRef} />
                    </div>
                    <div>
                        <InputContainer id={'zip'} label={'Zip'} refInput={zipRef} />
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