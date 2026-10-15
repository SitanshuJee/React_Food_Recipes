import React, { useState,useEffect } from 'react'

export const API_URL = "https://www.themealdb.com/api/json/v1/1/"

export const useFetch = (url) => {

    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        if (!url) {
            setLoading(false);
            return;
        }
        const fetchData = async () => {
            try {
                setLoading(true);
                setError(null);
                const res = await fetch(url);
                if (!res.ok) throw new Error(`Error: ${res.status}`);

                const json = await res.json();
                setData(json);

            } catch (error) {
                setError(error.message || "something went wrong")
            } finally {
                setLoading(false)
            }
        }
        fetchData();

    }, [url])


    return {data,loading,error}
}