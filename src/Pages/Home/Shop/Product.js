import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({ product }) => {
    const navigate = useNavigate();
    const handleOrder = id => {
        navigate(`/inventory/${id}`)
    }
    return (
        <div class="card card-compact w-80 bg-base-100 shadow rounded-none mb-5">
            <figure><img className='w-56 h-56' src={product.image} alt="Shoes" /></figure>
            <div class="card-body">
                <p className='font-bold'>{product.name}</p>
                <h4 className='font-bold text-2xl'>$ {product.price}</h4>
                <button onClick={() => handleOrder(product._id)} className='btn rounded-none border-none' style={{ backgroundColor: '#CA1F26' }}>Order</button>
            </div>
        </div>
    );
};

export default Product;