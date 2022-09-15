import { useEffect, useState } from "react";

export const useFetch = (url, options) => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const fetchData = async () => {

        const response = await fetch(url, options);
        if(!response.ok) {
            setError(true);
            setLoading(false);
            return;
        }

        const data = await response.json();
        setItems(data);
        setLoading(false);

    }

    useEffect(() => {
        fetchData();
    }, []);

    return { items, loading, error };
}