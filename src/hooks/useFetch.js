import { useEffect, useState } from "react";

const url = import.meta.env.VITE_URL_API
  const options = {
    headers: {
      'X-RapidAPI-Key': import.meta.env.VITE_URL_KEY,
      'X-RapidAPI-Host': import.meta.env.VITE_URL_HOST
    }
}

export const useFetch = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [ error, setError] = useState(false);

    const fetchData = async () => {

        try {
            const response = await fetch(url, options);
            const data = await response.json();
            setData(data);
            setLoading(false);


        } catch (error) {
            setError(true);
            setLoading(false);
        }

    }

    useEffect(() => {
        fetchData();
    }, []);

    return { data, loading, error };
}