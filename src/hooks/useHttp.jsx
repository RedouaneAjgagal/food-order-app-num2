import { useState, useCallback } from 'react'

const useHttp = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchingData = useCallback(async (args) => {
        setError(null);
        try {
            setLoading(true);
            const response = await fetch(args.url, {
                method: args.method ? args.method : 'GET',
                headers: args.headers ? args.headers : {},
                body : args.body ? JSON.stringify(args.body) : null
            });
            if (!response.ok) {
                throw new Error(args.errorMsg);
            }
            const mealsData = await response.json();
            const mealItems = []
            for (const key in mealsData) {
                mealItems.push({ ...mealsData[key], id: key });
            }
            setItems(mealItems);
        } catch (error) {
            setError(error.message);
        }
        setLoading(false);
    }, []);

    return {
        items, loading, error, fetchingData
    }
}

export default useHttp