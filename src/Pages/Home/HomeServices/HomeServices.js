import React from 'react';
import { AiFillCar,AiFillCodeSandboxCircle,AiOutlineRadarChart } from "react-icons/ai";
import { FaPlane } from "react-icons/fa";

const HomeServices = () => {
    return (
        <div className='px-12 grid justify-center mt-12'>
            <h1 className='font-bold lg:text-5xl text-2xl lg:ml-96 mb-12'>OUR FEATURES</h1>
            <div className='grid lg:grid-cols-2 lg:ml-28'>
                {/* card 1 */}
                <div class="card w-3/4 bg-base-100 shadow-xl mb-8 rounded-none">
                    <div class="card-body">
                        <div className='text-5xl text-red-600'><AiFillCar></AiFillCar></div>
                        <div>
                        <h2 class="card-title">GROUND TRANSPORT</h2>
                        <p>Transport began providing transportation solutions to
                            Transport’s contract warehousing customers in the 1980s.</p>
                        </div>
                    </div>
                </div>

                {/* card 2 */}
                <div class="card w-3/4 bg-base-100 shadow-xl mb-8 rounded-none">
                    <div class="card-body">
                        <div className='text-5xl text-red-600'><AiFillCodeSandboxCircle></AiFillCodeSandboxCircle></div>
                        <div>
                        <h2 class="card-title">WAREHOUSING</h2>
                        <p>Transport provides warehousing, fulfillment services,
                            and transportation management across North America.</p>
                        </div>
                    </div>
                </div>

                {/* card 3 */}
                <div class="card w-3/4 bg-base-100 shadow-xl mb-8 rounded-none">
                    <div class="card-body">
                        <div className='text-5xl text-red-600'><AiOutlineRadarChart></AiOutlineRadarChart></div>
                        <div>
                        <h2 class="card-title">PACKAGING AND STORAGE</h2>
                        <p>Transport offers complete, customized solutions
                            for all of your business storage needs.</p>
                        </div>
                    </div>
                </div>
                <div class="card w-3/4 bg-base-100 shadow-xl mb-8 rounded-none">
                    <div class="card-body">
                        <div className='text-5xl text-red-600'><FaPlane></FaPlane></div>
                        <div>
                        <h2 class="card-title">LOGISTIC SERVICE</h2>
                        <p>Transport offers a host of logistic management
                            services and supply chain solutions.</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default HomeServices;