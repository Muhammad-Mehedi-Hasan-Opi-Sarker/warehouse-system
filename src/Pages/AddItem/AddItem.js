import React from 'react';
import Footer from '../Shared/Footer';

const AddItem = () => {
    return (
        <div>
            <div className='grid justify-items-center mt-12 mb-20'>
            <div className="card w-96 bg-base-100 shadow rounded-none grid justify-items-center p-4">
                <div>
                    <h4 className='ml-8 font-bold text-2xl mt-8'>Add Your Item</h4>
                    <div className="card-body">
                        <form>
                            <input name='email' type="email" placeholder="Email Address" className="input input-bordered w-full max-w-xs mb-5" />
                            <input name='password' type="password" placeholder="Password" className="input input-bordered w-full max-w-xs mb-5" />
                            <input className='btn rounded-none border-none w-full' style={{ backgroundColor: '#4f77ff' }} type="submit" value="Add Product" />
                        </form>
                    </div>
                </div>

            </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AddItem;