import style from './Navbar.module.css';
import React, { useState, useContext, useEffect } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import Cart from '../cart/Cart';
import InsideCart from '../../store/InsideCart';
const Navbar = () => {
    const ctx = useContext(InsideCart);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const opneCartHandler = () => {
        setIsCartOpen(true);
    }
    const closeCartHandler = () => {
        setIsCartOpen(false);
    }
    const [isAnimation, setIsAnimation] = useState(false);
    useEffect(() => {
        if (ctx.itemsAmount) setIsAnimation(true);
        const timer = setTimeout(() => {
            setIsAnimation(false);
        }, 200);
        return () => {
            clearTimeout(timer);
        }
    }, [ctx.itemsAmount]);
    const animationClass = `${isAnimation ? style.bump : ''}`;
    return (
        <nav className={style.Navbar}>
            <div className={style.NavBarContent}>
                <a href="/">ReactMeals</a>
                <button onClick={opneCartHandler} className={animationClass}><FaShoppingCart /> Your Cart <span>{ctx.itemsAmount}</span></button>
                {isCartOpen ? <Cart onClose={closeCartHandler} /> : null}
            </div>
        </nav>
    )
}

export default Navbar;