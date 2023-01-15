import { useState, useCallback } from 'react'

const useHttp = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchingData = useCallback(async (req) => {
        setError(null);
        try {
            setLoading(true);
            const response = await fetch(req.url, {
                method: req.method ? req.method : 'GET',
                headers: req.headers ? req.headers : {},
                body: req.body ? JSON.stringify(req.body) : null
            });
            if (!response.ok) {
                throw new Error(req.errorMsg);
            }
            const mealsData = await response.json();
            if (req.method !== 'POST') {
                const mealItems = []
                for (const key in mealsData) {
                    mealItems.push({ ...mealsData[key], id: key });
                }
                setItems(mealItems);
            }
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