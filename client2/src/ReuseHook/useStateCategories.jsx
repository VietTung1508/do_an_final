import { useEffect } from 'react';

const UseStateCategories = (setTo) => {
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:5000/category/categories");
                const data = await response.json();
                setTo(data)
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, [setTo])
};

export default UseStateCategories;
