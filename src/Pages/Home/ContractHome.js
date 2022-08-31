import React from 'react';

const ContractHome = () => {
    return (
        <div className='lg:px-0 px-5 mt-12 mb-12 h-44 grid grid-cols-2 justify-items-center items-center'
            style={{ backgroundColor: '#eeeeee' }}>
            <h4 className='font-bold'>Not sure which solution fits you business needs?</h4>

            <div style={{ backgroundColor: '#CA1F26' }} tabindex="0" class="text-white rounded-none collapse border border-base-300 bg-base-100 rounded-box">
                <div class="collapse-title text-xl font-medium">
                    Contact Us
                </div>
                <div class="collapse-content">
                    <p>+8801xxxxxxxxx</p>
                </div>
            </div>

            {/* <button className='btn rounded-none w-32 border-none' 
            >Contract Us</button> */}
        </div>
    );
};

export default ContractHome;