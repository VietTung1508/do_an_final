import React, {useEffect, useState} from 'react';
import useStateProducts from "../../ReuseHook/useStateProducts.jsx";
import {Link} from "react-router-dom";
const ImageGrid = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:5000/product/products');
                const data = await response.json();
                setProducts(data);
                if(data)
                    setProducts(data)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    useStateProducts(setProducts, setProducts, )
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 mx-16">
            <h1>HEY</h1>
            {products.map((product, index) => (
                <Link to={`/women/${product._id}`} key={product._id}>
                    <div className="cursor-pointer py-6 px-1 inline-block w-full group">
                        <figure className={`relative h-64 ${index % 2 === 0 ? "md:h-96" : "md:h-64"} w-full hidden md:block mb-3 sm:mb-0 mr-6 border border-gray-100 overflow-hidden rounded-lg transform group-hover:translate-x-0 group-hover:shadow group-hover:translate-y-0 transition duration-700 ease-out`}>
                            <div className="absolute w-full h-full object-cover rounded-lg transform group-hover:scale-105 transition duration-700 ease-out cursor-pointer">
                                <img
                                    style={{objectFit: 'cover', width: '100%', height: '100%'}}
                                    className="rounded-lg contrast-115"
                                    src={product?.image?.url}
                                    alt={product?.title}
                                />
                            </div>
                        </figure>

                        <h4 className="text-black-1 font-semibold text-lg leading-normal mt-2">
                            <Link to={`/women/${product._id}`}>
                                <a>{product.title}</a>
                            </Link>
                        </h4>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default ImageGrid;
