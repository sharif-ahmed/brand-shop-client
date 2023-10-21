/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useContext } from 'react';
import { AuthContext } from './../../providers/AuthProvider';


const ServiceDetails = () => {

    const { loading } = useContext(AuthContext);

    const [service, setService] = useState({})
    const { id } = useParams()
    const { capmpaign_image, capmpaign_title, capmpaign_description, capmpaign_price } = service;


    useEffect(() => {
        fetch("/events.json")
            .then((res) => res.json())
            .then((data) => {
                const findData = data?.find((data) => data.id === parseInt(id))
                setService(findData);
            })
            .catch((error) => console.log(error))
    }, [id])

    return (
        <div className="container mx-auto py-10 px-4 lg:px-0">
            <div className="mb-12 lg:w-[60%] mx-auto">
                <figure className="mb-2"><img className="w-full object-cover h-[220px]" src={capmpaign_image} alt={capmpaign_title} /></figure>
                <div className="mt-8">
                    <h2 className="text-[#1b1b1b] font-semibold
                     mt-3 mb-5 text-xl relative before:absolute before:top-0
                     before:left-0 before:bottom-0 before:bg-[#e2564d] before:w-[2px] 
                     before:mr-[10px] before:inline-block pl-2">{capmpaign_title}</h2>
                    <p className="text-[#7A7A7A] text-[15px] leading-7 mb-10">{capmpaign_description}</p>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;