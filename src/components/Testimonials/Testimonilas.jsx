/* eslint-disable no-unused-vars */
import jaguarRev from '../../assets/img/jaguarRev.jpg';
import bmwRev from '../../assets/img/bmwRev.jpg';
import person2 from '../../assets/img/person2.jpg';
import person3 from '../../assets/img/person3.jpg';

const Testimonilas = () => {

    return (
        <div className="bg-bgReview bg-no-repeat bg-cover bg-center py-20 ">
            <div className="container mx-auto px-4 lg:px-0 flex flex-col items-center justify-center">

                <div className='flex flex-col justify-center py-4'>
                    <div className='mx-auto'>
                        <h3 className="text-center uppercase text-[#fff] tracking-[0.1rem]
                         text-xl font-medium relative pl-4 pr-4 inline-block
                         before:absolute before:w-[4px]
                        before:bg-[#d22e2e] before:left-0 
                         before:top-0 before:bottom-0
                          after:absolute after:w-[4px]
                          after:bg-[#d22e2e] after:right-0 
                          after:top-0 after:bottom-0
                          mb-4">WHAT CUSTOMERS SAYING</h3>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-5  lg:grid-cols-2 mt-8">
                    <div className="pb-10">
                        <div className="group relative">
                            <div className="relative overflow-hidden ">
                                <img src={jaguarRev} alt="" />
                                <div className="bg-[#d22e2e] absolute top-0 hidden 
                                    group-hover:flex items-center justify-center bottom-0 left-0 ease-in-out">
                                    <p className=" text-white p-5 text-[15px] leading-[26px] font-thin">I had a fantastic experience buying my car from Car Shop. The process was smooth, and the staff was incredibly helpful. I highly recommend them for anyone looking for a hassle-free car-buying experience.</p>
                                </div>
                            </div>
                            <div className='absolute -bottom-14 left-10 flex'>
                                <div className=" bg-white p-1 w-[80px] h-[80px] rounded-full flex items-center justify-center">
                                    <img className="w-full h-full rounded-full" src={person2} alt="" />
                                </div>
                                <div className='flex flex-col justify-start ml-9'>
                                    <h2 className='text-strat text-white  text-sm mt-14 font-bold'>JOHN SMITH</h2>
                                    <p className='text-strat text-white text-[12px]'>Customer, Ferrari 488 GTB 2 Owner </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="pb-10">
                        <div className="group relative">
                            <div className="relative overflow-hidden ">
                                <img src={bmwRev} alt="" />
                                <div className="bg-[#d22e2e] absolute top-0 hidden 
                                    group-hover:flex items-center justify-center bottom-0 left-0 ease-in-out">
                                    <p className=" text-white p-5 text-[15px] leading-[26px] font-thin">I had a fantastic experience buying my car from Car Shop. The process was smooth, and the staff was incredibly helpful. I highly recommend them for anyone looking for a hassle-free car-buying experience.</p>
                                </div>
                            </div>
                            <div className='absolute -bottom-14 left-10 flex'>
                                <div className=" bg-white p-1 w-[80px] h-[80px] rounded-full flex items-center justify-center">
                                    <img className="w-full h-full rounded-full" src={person3} alt="" />
                                </div>
                                <div className='flex flex-col justify-start ml-9'>
                                    <h2 className='text-strat text-white  text-sm mt-14 font-bold'>JOHN SMITH</h2>
                                    <p className='text-strat text-white text-[12px]'>Customer, Ferrari 488 GTB 2 Owner </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonilas;