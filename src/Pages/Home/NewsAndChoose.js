import React from 'react';

const NewsAndChoose = () => {
    return (
        <div className='px-12 lg:ml-28 mt-20'>
            <h3 className='font-bold text-2xl mb-16'>WHY CHOOSE US</h3>

            <div className='grid lg:grid-cols-2'>
                <div class="accordion mb-4" id="accordionExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingOne">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                We Are Creative & Professional
                            </button>
                        </h2>
                        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                {/* <p>With over 60 years of providing world class service to their customers on the asset side, a need to provide a one stop shop for a” true customer service logistic solution” was introduced. By adding this dimension to an already dynamic and customer centric asset based provider, we feel we bring a total solution.</p> */}
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingTwo">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Honest And Dependable
                            </button>
                        </h2>
                        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                {/* <p>I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p> */}
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingThree">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Quality Commitment
                            </button>
                        </h2>
                        <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                {/* <p>I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p> */}
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingThree">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                We Are Always Improving
                            </button>
                        </h2>
                        <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                {/* <p>I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p> */}
                            </div>
                        </div>
                    </div>
                </div>

                <div className='ml-8'>
                    {/* card 1 */}
                    <div class="card w-96 bg-base-100 shadow-xl rounded-none mb-3">
                        <div>
                            <div className='flex'>
                                <img src="https://transport.thememove.com/wp-content/uploads/2015/07/image_900x600_05-120x90.jpg" alt="" />
                                <h5 class="font-bold ml-3">Freight Transport in Alaska: The Haul of the Wild</h5> <br />
                                <div className=''><p>- thememove - June 26, 2015 - No response</p></div>
                            </div>
                        </div>
                    </div>

                    {/* card 2 */}
                    <div class="card w-96 bg-base-100 shadow-xl rounded-none mb-3">
                        <div>
                            <div className='flex'>
                                <img src="https://transport.thememove.com/wp-content/uploads/2015/07/image_900x600_07-120x90.jpg" alt="" />
                                <h5 class="font-bold ml-3">Freight Transport in Alaska: The Haul of the Wild</h5> <br />
                                <div className=''><p>- thememove - June 26, 2015 - No response</p></div>
                            </div>
                        </div>
                    </div>

                    {/* card 3 */}
                    <div class="card w-96 bg-base-100 shadow-xl rounded-none mb-3">
                        <div>
                            <div className='flex'>
                                <img src="https://transport.thememove.com/wp-content/uploads/2015/07/image_900x600_06-120x90.jpg" alt="" />
                                <h5 class="font-bold ml-3">Freight Transport in Alaska: The Haul of the Wild</h5> <br />
                                <div className=''><p>- thememove - June 26, 2015 - No response</p></div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default NewsAndChoose;