/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { useEffect } from 'react';
//import ShopCard from '../ShopCard/ShopCard';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { useLocation, useParams } from 'react-router-dom';
import ShopCard from '../../components/ShopCard/ShopCard';
import Slider from '../../components/Slider/Slider';

const BrandProducts = () => {


    const { user } = useContext(AuthContext);
    const { brandName } = useParams();
    const [products, setProducts] = useState([]);
    const pathLocation = useLocation();
    const { pathname } = pathLocation;


    useEffect(() => {
        fetch(`https://brand-shop-server-dw8vl5gg3-sharif-ahmeds-projects.vercel.app/products/${brandName}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setProducts(data);
            })
            .catch((error) => console.log(error))
    }, [brandName])

    useEffect(() => {
        //setLocation(pathLocation);
        console.log(pathLocation);
    }, [pathLocation])

    const handleDelete = (product) => {
        const filteredProducts = products?.filter((data) => data._id !== product._id);
        setProducts(filteredProducts);
    }

    return (
        <>
            <Slider products={products}></Slider>
            {/* <div className='bg-bannerBG_With_Overlay bg-cover h-[50vh] w-full'>
                <div className="container px-4 lg:px-0 mx-auto">

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
                            after:top-0 after:bottom-0 mb-4">OUR ALL <span className='bg-[#d22e2e] px-1'>{brandName}</span> CARS</h3>
                        </div>
                    </div>
                </div>
            </div> */}
            <div className='container mx-auto py-16 px-4 lg:px-0'>

                <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                    {
                        user && products?.length > 0
                            ?
                            products?.map((product, idx) => <ShopCard key={idx} product={product} handleDelete={handleDelete}></ShopCard>)
                            :
                            (
                                <div className='flex items-center justify-center'>
                                    <h2 className='text-center font-medium text-lg'>There is no items in here !!!</h2>
                                </div>
                            )
                    }
                </div>
            </div>
        </>
    );
};

export default BrandProducts;