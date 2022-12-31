import style from './Products.module.css';
import React from 'react';
import Item from './Item';
import { mealsData } from '../../Meals_Data/mealsData';

const Products = () => {
    const meals = mealsData.map((meal) => {
        return <Item key={meal.id} value={meal} />
    });
    return (
        <ul className={style.Products}>
            {meals}
        </ul>
    )
}

export default Products