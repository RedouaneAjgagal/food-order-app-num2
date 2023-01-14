import style from './Header.module.css';
import Navbar from './Navbar';
import HeaderContent from './HeaderContent';
import React from 'react';
const Header = () => {
    console.log('navbar');
    return (
        <header className={style.Header}>
            <Navbar />
            <HeaderContent />
        </header>
    )
}
export default Header;