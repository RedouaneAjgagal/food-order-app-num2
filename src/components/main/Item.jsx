import style from './Item.module.css';
import React from 'react'
import ItemAddToCart from './ItemAddToCart';
const Item = (props) => {
    const price = `$${props.value.price.toFixed(2)}`;
    return (
        <li className={style.Item}>
            <article>
                <h2>{props.value.title}</h2>
                <p>{props.value.description}</p>
                <span>{price}</span>
            </article>
            <ItemAddToCart details={props.value} />
        </li>
    )
}

export default Item