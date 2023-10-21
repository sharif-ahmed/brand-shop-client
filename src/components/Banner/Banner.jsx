
const Banner = () => {
    return (
        <div className='bg-bannerBG_With_Overlay bg-cover h-screen w-full'>
            <div className="container px-4 lg:px-0 mx-auto">
                <div className="flex items-center justify-start h-screen lg:ml-[280px]">
                    <div  className="">
                        <h3 className="uppercase text-white tracking-[0.3rem]
                         text-xl font-medium relative pl-4 pr-4
                         inline-block
                         before:absolute 
                         before:w-[4px]
                        before:bg-[#d22e2e]
                         before:left-0 
                         before:top-0
                          before:bottom-0
                          after:absolute 
                          after:w-[4px]
                          after:bg-[#d22e2e]
                          after:right-0 
                          after:top-0
                          after:bottom-0
                          mb-4
                          ">Find Your Dream</h3>
                        <h2 className="text-white text-[31px] lg:text-[50px] font-semibold lg:leading-[65px]">Lamborghini Aventador</h2>
                        <p className="text-[#ededed] text-[14px] 
                        lg:text-[22px] lg:leading-7 mt-4 tracking-wider
                        font-medium">
                            MODEL 2015 <span className="bg-[#d22e2e] px-4 py-1 font-semibold">$184,900</span></p>
                        <button className="uppercase mt-10 hover:text-[#fff] 
                        text-sm tracking-wider font-medium 
                        py-3 px-10 border text-[#0c0b0b]
                        hover:bg-[#d22e2e] hover:border-[#d22e2e] bg-white
                         hover:transition ease-in-out rounded-full">Find Out More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;