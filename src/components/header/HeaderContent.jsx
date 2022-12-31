import style from './HeaderContent.module.css';
import React from 'react';
import Wrapper from '../UI/Wrapper';

const HeaderContent = () => {
    return (
        <section className={style.HeaderContentSection}>
            <Wrapper className={style.HeaderContent}>
                <h1>Delicious Food, Delivred To You</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est a impedit rem! Reiciendis alias veniam aperiam atque recusandae.</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non atque labore, repudiandae ut enim corporis!</p>
            </Wrapper>
        </section>
    )
}

export default HeaderContent;