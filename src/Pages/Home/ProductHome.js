import React, { useEffect, useState } from 'react';
import Product from './Shop/Product';

const ProductHome = () => {
    const [porducts, setProducts] = useState([]);
    useEffect(() => {
        fetch("https://warm-oasis-85547.herokuapp.com/product")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className='px-12'>
            <h1 className='font-bold text-4xl mt-8 mb-12'>Our Product Sample</h1>
            <div className='grid lg:grid-cols-3'>
            {
                porducts.slice(0, 3).map(product => <Product
                    key={product._id}
                    product={product}
                ></Product>)
            }
            </div>
        </div>
    );
};

export default ProductHome;