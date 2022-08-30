import React, { useEffect, useState } from 'react';
import './blog.css';
import Footer from './Shared/Footer';

const Blog = () => {
    const [blog, setBlog] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/blog")
            .then(res => res.json()).then(data => setBlog(data))
    }, [])
    return (
        <div>
            <div className='h-56 bg-slate-200 grid items-center'>
                <div className='px-12'><h1 className='font-bold text-5xl mb-3'>Blog</h1>
                <p>What is happening around us</p>
                </div>
            </div>

            <div className='lg:flex mt-12 mb-12 px-12 gap-8'>
                <div>
                    {
                        blog.map(b=> <div class="card card-compact w-full rounded-none">
                        <figure><img  className='' src={b.img} alt="Shoes" /></figure>
                        <div class="card-body blo p-2">
                            <h2 class="font-bold text-3xl">{b.title}</h2>
                            <p className=''>{b.p1}</p>
                            <button className='btn border-none rounded-none w-32' style={{ backgroundColor: '#CA1F26' }}>See more</button>
                        </div>
                    </div>)
                    }
                </div>

                <div>
                <input type="text" placeholder="Search.." class="mb-8 input input-bordered w-full max-w-xs" />
                <h1 className='font-bold text-3xl mb-5'> Recent Posts</h1>
                <ul className='' style={{color:'#4ab9cf'}}>
                    <a className='link list-item'>Why choose our warehousing service?</a>
                    <a className='link list-item'>Top benefits of hiring our trucking service</a>
                    <a className='link list-item'>Logistic service providers would understand your business</a>
                    <a className='link list-item'>Our trucking service ensures you best quality services at all times</a>
                    
                </ul>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Blog;