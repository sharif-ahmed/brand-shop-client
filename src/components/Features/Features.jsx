/* eslint-disable no-unused-vars */
import React from 'react';

import wolks from '../../assets/img/wolks.jpg';
import mazda from '../../assets/img/mazda.jpg';
import chevrolet from '../../assets/img/chevrolet.jpg';

const Features = () => {
    return (
        <div className='container mx-auto py-4 px-4 lg:px-0'>
            <div className='flex flex-col justify-center py-4'>
                <div className='mx-auto'>
                    <p className='text-center bg-[#555] text-white
                     uppercase px-2 py-[2px] inline-block text-[12px]
                     mb-2 font-medium'>CUSTOMERS ARE IMPORTANT FOR US</p>
                </div>
                <div className='mx-auto'>
                    <h3 className="text-center uppercase text-[#525252] tracking-[0.1rem]
                         text-xl font-medium relative pl-4 pr-4 inline-block
                         before:absolute before:w-[4px]
                        before:bg-[#d22e2e] before:left-0 
                         before:top-0 before:bottom-0
                          after:absolute after:w-[4px]
                          after:bg-[#d22e2e] after:right-0 
                          after:top-0 after:bottom-0
                          mb-4">WHAT WE OFFERS</h3>
                </div>
            </div>
            <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-4'>
                <div className="mb-12">
                    <figure className="mb-2"><img className="w-full object-cover h-[220px]" src={wolks} alt="Shoes" /></figure>
                    <div className="">
                        <p className="text-[10px] mt-6 mb-4 font-thin uppercase">WE OFFER</p>
                        <h2 className="text-[#1b1b1b] font-semibold
                     mt-3 mb-5 text-xl relative before:absolute before:top-0
                     before:left-0 before:bottom-0 before:bg-[#d22e2e] before:w-[3px] 
                     before:mr-[10px] before:inline-block pl-4">Low Prices, No Haggling</h2>
                        <p className="text-[#7A7A7A] text-[14px] leading-7 mb-10 font-thin
                         border-t-[1px] border-[#ccc] pt-8 relative after:absolute after:bg-chevronDown
                          after:left-8 after:top-[-1px] after:bottom-0 after:w-[15px] after:h-[7px] after:bg-no-repeat
                        ">At our dealership, we believe in transparency and simplicity. With our commitment to offering the best prices without the need for negotiation, we aim to provide you  </p>

                    </div>
                </div>
                <div className="mb-12">
                    <figure className="mb-2"><img className="w-full object-cover h-[220px]" src={mazda} alt="Shoes" /></figure>
                    <div className="">
                        <p className="text-[10px] mt-6 mb-4 font-thin uppercase">WE ARE THE</p>
                        <h2 className="text-[#1b1b1b] font-semibold
                     mt-3 mb-5 text-xl relative before:absolute before:top-0
                     before:left-0 before:bottom-0 before:bg-[#d22e2e] before:w-[3px] 
                     before:mr-[10px] before:inline-block pl-4">Largest Car Dealership</h2>
                        <p className="text-[#7A7A7A] text-[14px] leading-7 mb-10 font-thin
                         border-t-[1px] border-[#ccc] pt-8 relative after:absolute after:bg-chevronDown
                          after:left-8 after:top-[-1px] after:bottom-0 after:w-[15px] after:h-[7px] after:bg-no-repeat
                        ">At our dealership, we believe in transparency and simplicity. With our commitment to offering the best prices without the need for negotiation, we aim to provide you  </p>

                    </div>
                </div>
                <div className="mb-12">
                    <figure className="mb-2"><img className="w-full object-cover h-[220px]" src={chevrolet} alt="Shoes" /></figure>
                    <div className="">
                        <p className="text-[10px] mt-6 mb-4 font-thin uppercase">OUR CUSTOMERS GET</p>
                        <h2 className="text-[#1b1b1b] font-semibold
                     mt-3 mb-5 text-xl relative before:absolute before:top-0
                     before:left-0 before:bottom-0 before:bg-[#d22e2e] before:w-[3px] 
                     before:mr-[10px] before:inline-block pl-4">Multipoint Safety Check</h2>
                        <p className="text-[#7A7A7A] text-[14px] leading-7 mb-10 font-thin
                         border-t-[1px] border-[#ccc] pt-8 relative after:absolute after:bg-chevronDown
                          after:left-8 after:top-[-1px] after:bottom-0 after:w-[15px] after:h-[7px] after:bg-no-repeat
                        ">At our dealership, we believe in transparency and simplicity. With our commitment to offering the best prices without the need for negotiation, we aim to provide you  </p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;