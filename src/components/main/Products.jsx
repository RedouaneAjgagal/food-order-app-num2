import style from './Products.module.css';
import React, { useEffect } from 'react';
import Item from './Item';
import useHttp from '../../hooks/useHttp';


const Products = () => {
    const { items: mealsData, loading, error, fetchingData: fetchingMeals } = useHttp();

    useEffect(() => {
        const getData = {
            url: 'https://react-http-ae2f9-default-rtdb.europe-west1.firebasedatabase.app/meals.json',
            errorMsg: "Couldn't Fetch Meals"
        }
        fetchingMeals(getData);
    }, [fetchingMeals]);

    const meals = mealsData.map((meal) => {
        return <Item key={meal.id} value={meal} />
    });

    return (
        <ul className={style.Products}>
            {loading && <h2>Loading...</h2>}
            {!error ? meals : <h2>{error}</h2>}
        </ul>
    )
}

export default Products