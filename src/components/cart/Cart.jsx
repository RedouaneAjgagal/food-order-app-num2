import style from './Cart.module.css';
import React, { Fragment } from 'react'
import ReactDOM from 'react-dom';
import CartProducts from './CartProducts';
import TotalAmount from './TotalAmount';
import CallToAction from './CallToAction';
import Wrapper from '../UI/Wrapper';

const Cart = (props) => {
    const closeCartHandler = () => {
        props.onClose();
    }
    return (
        ReactDOM.createPortal(
            <Fragment>
                <div className={style.overlay} onClick={closeCartHandler}></div>
                <section className={style.Cart}>
                    <Wrapper className={style.CartWrapper}>
                        <CartProducts />
                        <TotalAmount />
                        <CallToAction onClose={closeCartHandler} />
                    </Wrapper>
                </section>
            </Fragment>
            ,
            document.getElementById('overLay')
        )
    )
}

export default Cart