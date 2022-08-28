import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Inventory = () => {
    const { id } = useParams();
    const [product, setProduct] = useState([]);
    useEffect(() => {
        const url = `http://localhost:5000/product/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [])
    return (
        <div>
            <h1 className='font-bold text-5xl'>{product.name}</h1>
            
            {/* <p>{product.name}</p> */}
        </div>
    );
};

export default Inventory;