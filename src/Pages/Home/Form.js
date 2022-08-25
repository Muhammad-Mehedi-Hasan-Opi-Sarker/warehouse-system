import React from 'react';

const Form = () => {
    return (
        <div className='mt-12 lg:ml-96'>
            <h1 className='font-bold text-3xl mb-12'>REQUEST A QUICK QUOTE</h1>
            <p className='mb-8'>We love to listen and we are eagerly waiting to talk to you 
                regarding your project. Get in touch with us if you have any
                 queries and we will get back to you as soon as possible.</p>
                 <form className=''>
                 <input name='name' type="text" placeholder="Type here" className="input mb-2 input-bordered input-info w-full max-w-xs" />
                 <input name='subject' type="text" placeholder="Type here" className="ml-5 mb- input input-bordered input-info w-full max-w-xs" /><br />
                 <input name='email' type="email" placeholder="Type here" className="mb-2 input input-bordered input-info w-full max-w-xs" />
                 <input name='phone' type="phone" placeholder="Type here" className="mb-2 ml-5 input input-bordered input-info w-fit max-w-xs" /><br />
                    <input type="text" placeholder="Type here" className="mb-2 input input-bordered input-lg w-full max-w-xs" /> <br />
                 <input className='mb-5 btn' type="submit" value="Send Message" />
                 </form>
        </div>
    );
};

export default Form;