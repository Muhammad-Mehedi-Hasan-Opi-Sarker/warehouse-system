import React from 'react';
import './Form.css';

const Form = () => {
    return (
        <div className='p-5 lg:pl-8 lg:py-8 px-4 bg-center bg-[url("https://transport.thememove.com/wp-content/uploads/2015/06/parallax021.jpg")]'>
            <div className='grid lg:ml-0 ml-8 p-0'>
            <div className='res bg-slate-800'>
               <div className='p-5'>
               <h1 className='font-bold text-3xl mb-12 text-white'>REQUEST A QUICK QUOTE</h1>
                <p className='mb-8 text-white'>We love to listen and we are eagerly waiting to talk to you
                    regarding your project. Get in touch with us if you have any
                    queries and we will get back to you as soon as possible.</p>
                <form>
                    <input name='name' type="text" placeholder="Your name" className="input mb-2 input-bordered input-info w-full max-w-xs" />
                    <input name='subject' type="text" placeholder="Subject" className="lg:ml-5 mb-2 input input-bordered input-info w-full max-w-xs" /><br />
                    <input name='email' type="email" placeholder="Your email" className="mb-2 input input-bordered input-info w-full max-w-xs" />
                    <input name='phone' type="phone" placeholder="Phone" className="mb-2 lg:ml-5 input input-bordered input-info w-full max-w-xs" /><br />
                    <input type="text" placeholder="Your message" className="mb-2 input input-bordered input-lg w-full max-w-xs" /> <br />
                    <input className='mb-5 btn' type="submit" value="Send Message" />
                </form>
               </div>
            </div>
        </div>
        </div>
    );
};

export default Form;