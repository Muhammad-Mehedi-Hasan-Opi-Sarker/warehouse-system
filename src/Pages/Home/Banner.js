import React from 'react';
import './Banner.css';
import banner from '../../assets/banner2.jpg';
import banner2 from '../../assets/banner1.jpg';

const Banner = () => {
    return (
        <div className=''>
            {/* <div className="carousel w-full mb-8"> */}
            <div class="carousel w-full">
                <div id="slide1" class="carousel-item relative w-full height">
                    <img src={banner} alt='' class="w-full" />
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" class="btn btn-circle">❮</a>
                        <div>
                            <h1 className='font-bold text-5xl text-white'>Unbeatable Trucking & </h1> <br />
                            <h1 className='font-bold text-5xl text-white'>Transport Services</h1>
                            <button className='btn rounded none boder-none hover:bg-black mt-8 hover:text-white' style={{ backgroundColor: '#CA1F26' }}>Learn more</button>
                        </div>
                        <a href="#slide2" class="btn btn-circle">❯</a>

                    </div>
                </div>
                <div id="slide2" class="carousel-item relative w-full height">
                    <img src={banner} alt='' class="w-full" />
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" class="btn btn-circle">❮</a>
                        <div>
                            <h1 className='font-bold text-5xl text-white'>GROUND OR AIR,</h1><br />
                            <h1 className='font-bold text-5xl text-white'>'THERE IS NO STOPPING FOR US</h1>
                            <button className='btn rounded none boder-none hover:bg-black mt-8 hover:text-white' style={{ backgroundColor: '#CA1F26' }}>Learn more</button>
                        </div>
                        <a href="#slide3" class="btn btn-circle">❯</a>

                    </div>
                </div>
                <div id="slide3" class="carousel-item relative w-full height">
                    <img src={banner} alt='' class="w-full" />
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" class="btn btn-circle">❮</a>
                        <div>
                            <h1 className='font-bold text-5xl text-white'>Unbeatable Trucking & </h1> <br />
                            <h1 className='font-bold text-5xl text-white'>Transport Services</h1>
                            <button className='btn rounded none boder-none hover:bg-black mt-8 hover:text-white' style={{ backgroundColor: '#CA1F26' }}>Learn more</button>
                        </div>
                        <a href="#slide4" class="btn btn-circle">❯</a>

                    </div>
                </div>
                <div id="slide4" class="carousel-item relative w-full height">
                    <img src={banner} alt='' class="w-full" />
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" class="btn btn-circle">❮</a>
                        <div>
                            <h1 className='font-bold text-5xl text-white'>GROUND OR AIR,</h1><br />ser
                            <h1 className='font-bold text-5xl text-white'>'THERE IS NO STOPPING FOR US</h1>
                            <button className='btn rounded none boder-none hover:bg-black mt-8 hover:text-white' style={{ backgroundColor: '#CA1F26' }}>Learn more</button>
                        </div>
                        <a href="#slide1" class="btn btn-circle">❯</a>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;