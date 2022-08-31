import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const BlogInventory = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState({});
    useEffect(() => {
        fetch(`https://warm-oasis-85547.herokuapp.com/blog/${id}`)
            .then(res => res.json()).then(data => setBlog(data));
    }, [])
    return (
        <div className='mt-8 lg:px-12 px-4'>
            <div class="card w-full rounded-none border-none">
                <figure><img src={blog.img} alt="Shoes" /></figure>
                <div class="card-body">
                    <h1 className='mb-5 font-bold text-4xl'>{blog.title}</h1>
                    <p>{blog.p2}</p>
                </div>
            </div>
        </div>
    );
};

export default BlogInventory;