import style from './Products.module.css';
import React, { useEffect } from 'react';
import Item from './Item';
import useHttp from '../../hooks/useHttp';


const Products = () => {
    const { items: mealsData, loading, error, fetchingData: fetchingMeals } = useHttp();


    // const [mealsData, setMealsData] = useState([]);
    // const, setIsLoading] = useState(false);
    // const [error, setError] = useState(null);


    // const fetchingMeals = useCallback(async () => {
    //     setError(null);
    //     try {
    //         setIsLoading(true);
    //         const response = await fetch('https://react-http-ae2f9-default-rtdb.europe-west1.firebasedatabase.app/meals.json');
    //         if (!response.ok) {
    //             throw new Error("Couldn't fetch meals!");
    //         }
    //         const mealsData = await response.json();
    //         const mealItems = []
    //         for (const key in mealsData) {
    //             mealItems.push({ ...mealsData[key], id: key });
    //         }
    //         setMealsData(mealItems);
    //     } catch (error) {
    //         setError(error.message);
    //     }
    //     setIsLoading(false);
    // }, []);



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