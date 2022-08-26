import React from 'react';

const Product = ({ product }) => {
    return (
        <div class="card card-compact w-96 bg-base-100 shadow rounded-none mb-5">
            <figure><img src={product.image} alt="Shoes" /></figure>
            <div class="card-body">
                <p className='font-bold'>{product.name}</p>
                <h4 className='font-bold text-2xl'>$ {product.price}</h4>
                <button className='btn rounded-none border-none' style={{backgroundColor:'#CA1F26'}}>Order</button>
            </div>
        </div>
    );
};

export default Product;