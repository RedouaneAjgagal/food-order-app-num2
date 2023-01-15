import React, { useContext } from 'react'
import style from './ThankYou.module.css';
import OrderProcess from '../../store/OrderProcess';
const ThankYou = () => {
    const { backHome } = useContext(OrderProcess);
    return (
        <section className={style.ThankYou}>
            <h1>Thank You For Shopping At OrderApp!</h1>
            <button onClick={backHome}>Back To Home Page</button>
        </section>
    )
}

export default ThankYou