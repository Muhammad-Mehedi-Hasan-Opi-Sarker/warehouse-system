import React from 'react';
import './Form.css';
import { toast } from 'react-toastify';

const Form = () => {
    const handleForm=e=>{
        e.preventDefault();
        const name=e.target.name.value;
        const subject=e.target.subject.value;
        const email=e.target.email.value;
        const phone=e.target.phone.value;
        const message=e.target.message.value;
        e.target.reset();
        const data ={
            name:name,
            subject:subject,
            email:email,
            phone:phone,
            message:message
        }
        console.log(data)
        toast('sent your message')
    }

    return (
        <div className='lg:pl-8 lg:py-8 px-4 bg-center bg-[url("https://transport.thememove.com/wp-content/uploads/2015/06/parallax021.jpg")]'>
            <div className='grid lg:ml-0 ml-8 p-0'>
            <div className='res bg-slate-800'>
               <div className='p-5'>
               <h1 className='font-bold text-3xl mb-12 text-white'>REQUEST A QUICK QUOTE</h1>
                <p className='mb-8 text-white'>We love to listen and we are eagerly waiting to talk to you
                    regarding your project. Get in touch with us if you have any
                    queries and we will get back to you as soon as possible.</p>
                <form onClick={handleForm}>
                    <input name='name' type="text" placeholder="Your name" className="bg-stone-600 placeholder-white text-white border-none rounded-none input mb-2 input-bordered input-info w-full max-w-xs" />
                    <input name='subject' type="text" placeholder="Subject" className="bg-stone-600 placeholder-white text-white border-none rounded-none lg:ml-5 mb-2 input input-bordered input-info w-full max-w-xs" /><br />
                    <input name='email' type="email" placeholder="Your email" className="bg-stone-600 placeholder-white text-white border-none rounded-none mb-2 input input-bordered input-info w-full max-w-xs" />
                    <input name='phone' type="phone" placeholder="Phone" className="bg-stone-600 placeholder-white text-white border-none rounded-none mb-2 lg:ml-5 input input-bordered input-info w-full max-w-xs" /><br />
                    <input name='message' type="text" placeholder="Your message" className="bg-stone-600 placeholder-white text-white border-none rounded-none mb-2 input input-bordered input-lg w-full max-w-xs" /> <br />
                    <input className='mb-5 btn rounded-none' style={{backgroundColor:'#CA1F26'}} type="submit" value="Send Message" />
                </form>
               </div>
            </div>
        </div>
        </div>
    );
};

export default Form;