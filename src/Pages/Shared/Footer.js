import React from 'react';
import { AiFillFacebook, AiOutlineTwitter, AiOutlineGooglePlus, AiFillLinkedin, AiOutlineArrowRight } from 'react-icons/ai';

const Footer = () => {
    return (
        <div>
            <footer class="footer grid lg:grid-cols-3 grid-justify-items-center p-10 bg-neutral text-neutral-content">
                <div>
                    <span style={{ backgroundColor: '#CA1F26' }} class="mb-5 w-56 h-22 p-3 font-bold text-xl text-white">ABOUT US</span>
                    <img className='mb-5' src="https://transport.thememove.com/data/images/logo.png" alt="" />
                    <p className='mb-5'>Transport offers a host of logistic management services and supply chain solutions. We provide
                        innovative solutions with the best people, processes, and technology.</p>
                    <div className='grid grid-cols-4 gap-5 text-xl'>
                        <AiOutlineTwitter></AiOutlineTwitter>
                        <AiOutlineGooglePlus></AiOutlineGooglePlus>
                        <AiFillLinkedin></AiFillLinkedin>
                        <AiFillFacebook></AiFillFacebook>
                    </div>
                </div>

                <div className='lg:ml-16'>
                    <span style={{ backgroundColor: '#CA1F26' }} class="mb-5 w-56 h-22 p-3 font-bold text-xl text-white">INFORMATION</span>
                    <div className='flex'>
                        <div>
                            <a class="link link-hover flex"><span className='mr-2 mt-1'><AiOutlineArrowRight></AiOutlineArrowRight></span> About Us</a> <br />
                            <a class="link link-hover flex"><span className='mr-2 mt-1'><AiOutlineArrowRight></AiOutlineArrowRight></span>Blog</a><br />
                            <a class="link link-hover flex"><span className='mr-2 mt-1'><AiOutlineArrowRight></AiOutlineArrowRight></span>Checkout</a><br />
                            <a class="link link-hover flex"><span className='mr-2 mt-1'><AiOutlineArrowRight></AiOutlineArrowRight></span>Contact</a><br />
                            <a class="link link-hover flex"><span className='mr-2 mt-1'><AiOutlineArrowRight></AiOutlineArrowRight></span>Our Services</a>
                        </div>
                        <div>
                            <a class="link link-hover flex ml-12"> <span className='mr-2 mt-1'><AiOutlineArrowRight></AiOutlineArrowRight></span>  Classic Blog</a> <br />
                            <a class="link link-hover flex ml-12"> <span className='mr-2 mt-1'><AiOutlineArrowRight></AiOutlineArrowRight></span> Cart</a><br />
                            <a class="link link-hover flex ml-12"> <span className='mr-2 mt-1'><AiOutlineArrowRight></AiOutlineArrowRight></span> Contact</a><br />
                            <a class="link link-hover flex ml-12"> <span className='mr-2 mt-1'><AiOutlineArrowRight></AiOutlineArrowRight></span> My Account</a><br />
                            <a class="link link-hover flex ml-12"> <span className='mr-2 mt-1'><AiOutlineArrowRight></AiOutlineArrowRight></span> Shop Contact</a>
                        </div>
                    </div>
                </div>
                <div className='lg:ml-8'>
                    <span style={{ backgroundColor: '#CA1F26' }} class="mb-5 w-56 h-22 p-3 font-bold text-xl text-white">TRANSPORT OFFICE</span>
                    <p class="link link-hover"> 14 Tottenham Road, London, England.</p>
                    <p class="link link-hover"> (102) 6666 8888</p>
                    <p class="link link-hover"> opisarker99@gmail.com</p>
                    <p class="link link-hover"> (102) 8888 9999</p>
                    <p class="link link-hover"> Mon - Sat: 9:00 - 18:00</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;