import React, { useEffect, useState } from 'react';
import Footer from '../../Shared/Footer';
import Product from './Product';

const Shop = () => {
    const [porducts, setProducts] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/product")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div>
            <div className='px-12 mt-12 mb-16'>
                <h1 className='font-bold text-2xl mb-12'>PRODUCT CATEGORIES</h1>

                <div className='grid lg:grid-cols-3'>
                    {
                        porducts.map(product => <Product
                            key={product._id}
                            product={product}
                        ></Product>)
                    }
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Shop;