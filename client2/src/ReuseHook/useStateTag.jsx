import {useEffect, useState} from 'react';

const UseStateTag = (setTag, setFilterTag) => {
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:5000/category/categories");
                const data = await response.json();
                if(setTag !== "")
                    setFilterTag(data.filter((p) => p.tag === setTag))
                else
                    setFilterTag(data)
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, [setTag, setFilterTag])
};

export default UseStateTag;
