import React from 'react';

const Testimonials = () => {
    return (
        <div className="grid justify-items-center mb-12 bg-center bg-[url('https://img.freepik.com/premium-vector/black-wide-technology-background_79145-249.jpg?w=996')]">
            <h2 className='font-bold text-4xl mb-12 mt-16 text-white'>TESTIMONIALS</h2>

            {/* card 1 */}
            <div className='lg:flex gap-8 mb-20'>
                <div class="card w-96 bg-base-100 shadow-xl rounded-none mb-3">
                    <div class="card-body">
                        <p>I have always reived good service from Transport. Timing and qulaity have
                            always met my expectations and everything is communicated in a professional
                            and timely manner.</p>
                        <div className='font-bold text-white p-2' style={{ backgroundColor: '#CA1F26' }}>
                            <p>Johny Vu</p>
                            <i>CEO Transport Ltd</i>
                        </div>
                    </div>
                </div>

                {/* card 2  */}
                <div class="card w-96 bg-base-100 shadow-xl rounded-none mb-3">
                    <div class="card-body">
                        <p>I've been happy with the services provided by Construction LLC. Scooter
                            Libby has been wonderfull! He has returned my calls quickly, and he answered
                            all my questions</p>
                        <div className="font-bold text-white p-2" style={{ backgroundColor: '#CA1F26' }}>
                            <p>Frankie Kao..</p>
                            <i>Fouder & CEO ThemeMove Ltd..</i>
                        </div>
                    </div>
                </div>

                {/* card 3 */}
                <div class="card w-96 bg-base-100 shadow-xl rounded-none mb-3">
                    <div class="card-body">
                        <p>I've been happy with the services provided by Construction LLC. Scooter
                            Libby has been wonderfull! He has returned my calls quickly, and he answered
                            all my questions</p>
                        <div className="font-bold text-white p-2" style={{ backgroundColor: '#CA1F26' }}>
                            <p>Jone De..</p>
                            <i>CEO Transport Ltd..</i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;