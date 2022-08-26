import React from 'react';

const Testimonials = () => {
    return (
        <div className=''>
            <h2 className='font-bold text-4xl'>TESTIMONIALS</h2>

            {/* card 1 */}
            <div>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <div class="card-body">
                        <p>I have always reived good service from Transport. Timing and qulaity have
                            always met my expectations and everything is communicated in a professional
                            and timely manner.</p>
                        <div>
                            <p>Johny Vu</p>
                            <p>CEO Transport Ltd</p>
                        </div>
                    </div>
                </div>

                {/* card 2  */}
                <div class="card w-96 bg-base-100 shadow-xl">
                    <div class="card-body">
                        <p>I've been happy with the services provided by Construction LLC. Scooter
                            Libby has been wonderfull! He has returned my calls quickly, and he answered
                            all my questions</p>
                        <div>
                            <p>Frankie Kao</p>
                            <p>Fouder & CEO ThemeMove Ltd..</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;