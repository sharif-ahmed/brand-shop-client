/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

const SingleSlide = ({ product , idx, len}) => {
    return (
        <div id={idx} className="carousel-item relative w-full h-[80vh]">
            <img src={product.productImage} className="w-full object-cover object-center" />
            <div className="container px-4 lg:px-0 mx-auto absolute">
                <div className='flex flex-col items-center h-[80vh] justify-center py-8'>
                    <div className='mx-auto'>
                        <p className='text-center bg-[#555] text-white
                     uppercase px-2 py-[2px] inline-block text-[12px]
                     mb-2 font-medium'>Find Your Dream</p>
                    </div>
                    <div className='mx-auto'>
                        <h3 className="text-center uppercase text-[#fff] lg:tracking-[0.1rem]
                            text-xl lg:text-2xl font-medium relative pl-4 pr-4 inline-block before:absolute before:w-[4px]
                            before:bg-[#d22e2e] before:left-0 before:top-0 before:bottom-0
                            after:absolute after:w-[4px] after:bg-[#d22e2e] after:right-0 
                            after:top-0 after:bottom-0 mb-4">OUR ALL <span className='bg-[#d22e2e] px-1'>{product.brandName}</span> CARS</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleSlide;