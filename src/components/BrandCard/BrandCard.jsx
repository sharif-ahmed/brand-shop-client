/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

const BrandCard = ({ brand }) => {
    const { brand_image, brand_name } = brand;
    return (
        <div>
            <Link to={`/products/${brand_name}`}>
                <div className="mb-12 flex flex-col items-center justify-center group cursor-pointer">
                    <div className="mb-2 w-[150px] h-[150px] rounded-full shadow-md 
                    flex items-center justify-center bg-slate-50 group-hover:bg-slate-100">
                        <img className="" src={brand_image} alt="Shoes" />
                    </div>
                    <h2 className="text-[#1b1b1b] uppercase font-semibold text-center mt-4 text-lg group-hover:text-[#d22e2e]">{brand_name}</h2>
                </div>
            </Link>
        </div>
    );
};

export default BrandCard;