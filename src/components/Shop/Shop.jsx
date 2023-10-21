/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { useEffect } from 'react';
import ShopCard from '../ShopCard/ShopCard';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Banner from '../Banner/Banner';


const Shop = () => {
    const { user } = useContext(AuthContext);
    const [products, setProducts] = useState([]);
    const pathLocation = useLocation();
    const { pathname } = pathLocation;
    const [location, setLocation] = useState(null)
    useEffect(() => {
        fetch("https://brand-shop-server-dw8vl5gg3-sharif-ahmeds-projects.vercel.app/products")
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setProducts(data);
            })
            .catch((error) => console.log(error))
    }, [])

    useEffect(() => {
        setLocation(pathLocation);
        console.log(pathLocation);
    }, [pathLocation])


    const handleDelete = (product) => {
        const filteredProducts = products?.filter((data) => data._id !== product._id);
        setProducts(filteredProducts);
    }

    return (
        <>
            <div className='bg-bannerBG_With_Overlay bg-cover h-[50vh] w-full'>
                <div className="container px-4 lg:px-0 mx-auto">
                    {/* <div className="flex items-center justify-start h-screen ">
                        <div className="">
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
                    </div> */}

                    <div className='flex flex-col items-center h-[50vh] justify-center py-4'>
                        <div className='mx-auto'>
                            <p className='text-center bg-[#555] text-white
                     uppercase px-2 py-[2px] inline-block text-[12px]
                     mb-2 font-medium'>Find Your Dream</p>
                        </div>
                        <div className='mx-auto'>
                            <h3 className="text-center uppercase text-[#fff] tracking-[0.1rem]
                            text-2xl font-medium relative pl-4 pr-4 inline-block before:absolute before:w-[4px]
                            before:bg-[#d22e2e] before:left-0 before:top-0 before:bottom-0
                            after:absolute after:w-[4px] after:bg-[#d22e2e] after:right-0 
                            after:top-0 after:bottom-0 mb-4">OUR ALL CARS</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container mx-auto py-16 px-4 lg:px-0'>

                <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                    {
                        user && products?.length > 0
                            ?
                            products?.map((product, idx) => <ShopCard key={idx} product={product} handleDelete={handleDelete}></ShopCard>)
                            : (
                                <div className='flex items-center justify-center'>
                                    <h2 className='text-center font-medium text-lg'>There is no items here !!!</h2>
                                </div>
                            )
                    }
                </div>
            </div>
        </>
    );
};

export default Shop;