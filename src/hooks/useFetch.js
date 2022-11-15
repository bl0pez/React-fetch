import { useEffect, useState } from "react";

const url = import.meta.env.VITE_URL_API
  const options = {
    headers: {
      'X-RapidAPI-Key': import.meta.env.VITE_URL_KEY,
      'X-RapidAPI-Host': import.meta.env.VITE_URL_HOST
    }
}

export const useFetch = () => {
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