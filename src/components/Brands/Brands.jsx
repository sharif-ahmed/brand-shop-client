/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';

import wolks from '../../assets/img/wolks.jpg';
import mazda from '../../assets/img/mazda.jpg';
import chevrolet from '../../assets/img/chevrolet.jpg';
import BrandCard from '../BrandCard/BrandCard';
import { AuthContext } from '../../providers/AuthProvider';

const Brands = () => {

    const { user } = useContext(AuthContext);
    const [brands, setBrands] = useState([]);

    useEffect(() => {
        fetch("/brands.json")
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setBrands(data);
            })
            .catch((error) => console.log(error))
    }, [])

    return (
        <div className='container mx-auto pt-12 px-4 lg:px-0'>
            <div className='flex flex-col justify-center py-4'>
                <div className='mx-auto'>
                    <p className='text-center bg-[#555] text-white
                     uppercase px-2 py-[2px] inline-block text-[12px]
                     mb-2 font-medium'>Find Out More</p>
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
                          mb-4">BRANDS WE OFFER</h3>
                </div>
            </div>
            <div className='grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-6 pt-8'>
                {
                    brands?.map((brand, idx) => <BrandCard key={idx} brand={brand}></BrandCard>)
                }
            </div>
        </div>
    );
};

export default Brands;