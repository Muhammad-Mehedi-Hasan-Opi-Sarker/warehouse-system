import React from 'react';

const OtherService = () => {
    return (
        <div>
            <div className='grid justify-items-center mt-12 mb-8'><h1 className='font-bold text-5xl'>Services</h1></div>
            <div className='grid lg:grid-cols-3 lg:px-12 px-4'>
            {/* card 1 */}
            <div className="card w-96 bg-base-100">
                <figure className="px-10 pt-10 rounded-none">
                    <img src="https://transport.thememove.com/wp-content/uploads/2015/07/image_900x600_04.jpg" alt="Shoes" className="" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">CARGO</h2>
                    <p>Transport specializes in the safe transportation of office, computer,
                         and medical related equipment. From a single laptop to an...</p>
                    <div className="card-actions">
                        <button className="btn rounded-none border-none" style={{backgroundColor:'#CA1F26'}}>Read More</button>
                    </div>
                </div>
            </div>

            {/* card 2 */}
            <div className="card w-96 bg-base-100">
                <figure className="px-10 pt-10 rounded-none">
                    <img src="https://transport.thememove.com/wp-content/uploads/2015/07/image_900x600_03.jpg" alt="Shoes" className="" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">LOGISTIC SERVICE</h2>
                    <p>Transport offers a host of logistic management services and supply chain solutions.
                         We provide innovative solutions with the best...</p>
                    <div className="card-actions">
                        <button className="btn rounded-none border-none" style={{backgroundColor:'#CA1F26'}}>Read More</button>
                    </div>
                </div>
            </div>

            {/* card 3 */}
            <div className="card w-96 bg-base-100">
                <figure className="px-10 pt-10 rounded-none">
                    <img src="https://transport.thememove.com/wp-content/uploads/2015/07/image_900x600_06.jpg" alt="Shoes" className="" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">STORAGE</h2>
                    <p>Transport has access to over a ten million square feet of storage space in strate
                        gic partnership locations throughout the...</p>
                    <div className="card-actions">
                        <button className="btn rounded-none border-none" style={{backgroundColor:'#CA1F26'}}>Read More</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default OtherService;