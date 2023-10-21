/* eslint-disable no-unused-vars */
import team1 from "../../assets/img/team1.webp"
import team2 from "../../assets/img/team2.webp"
import team3 from "../../assets/img/team3.webp"
import team4 from "../../assets/img/team4.webp"

import { FaInstagram, FaFacebook, FaTwitter, FaDribbble } from "react-icons/fa";
import Footer from "../../components/Footer/Footer";

const Team = () => {
    return (
        <div className='container mx-auto px-4 lg:px-0 pb-16'>
            <div className='flex flex-col justify-center py-4'>
                <div className='mx-auto'>
                    <p className='text-center bg-[#555] text-white
                     uppercase px-2 py-[2px] inline-block text-[12px]
                     mb-2 font-medium'>THE PEOPLE YOU CAN TRUST ON</p>
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
                          mb-4">OUR TEAM MEMBERS</h3>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                <div className="relative group overflow-hidden border-[3px] border-[#fff]
                 hover:border-[#e2564d] p-1 transition ease-in-out">
                    <img className="w-full" src={team1} alt="" />
                    <div className="absolute -bottom-[300px] group-hover:bottom-0 left-0 right-0 transition transform
                     bg-[#e2564d] py-5 ">
                        <div className="text-center py-4">
                            <h2 className="text-2xl font-semibold text-[#fff]">John Smith</h2>
                            <p className="text-white">CEO</p>
                        </div>
                        <div className="flex gap-4 items-center justify-center">
                            <FaFacebook className="w-[36px] h-[36px] text-white  
                            border-2  border-[#fff] rounded-full p-1"></FaFacebook>
                            <FaTwitter className="w-[36px] h-[36px] text-white 
                             border-2  border-[#fff] rounded-full p-1"></FaTwitter>
                            <FaInstagram className="w-[36px] h-[36px] text-white 
                             border-2  border-[#fff] rounded-full p-1"></FaInstagram>
                            <FaDribbble className="w-[36px] h-[36px] text-white  
                            border-2 border-[#fff] rounded-full p-1"></FaDribbble>
                        </div>
                    </div>
                </div>
                <div className="relative group overflow-hidden border-[3px] border-[#fff]
                 hover:border-[#e2564d] p-1 transition ease-in-out">
                    <img className="w-full" src={team2} alt="" />
                    <div className="absolute -bottom-[300px] group-hover:bottom-0 left-0 right-0 transition transform
                     bg-[#e2564d] py-5 ">
                        <div className="text-center py-4">
                            <h2 className="text-2xl font-semibold text-[#fff]">David Miller</h2>
                            <p className="text-white">COO</p>
                        </div>
                        <div className="flex gap-4 items-center justify-center">
                            <FaFacebook className="w-[36px] h-[36px] text-white  
                            border-2  border-[#fff] rounded-full p-1"></FaFacebook>
                            <FaTwitter className="w-[36px] h-[36px] text-white 
                             border-2  border-[#fff] rounded-full p-1"></FaTwitter>
                            <FaInstagram className="w-[36px] h-[36px] text-white 
                             border-2  border-[#fff] rounded-full p-1"></FaInstagram>
                            <FaDribbble className="w-[36px] h-[36px] text-white  
                            border-2 border-[#fff] rounded-full p-1"></FaDribbble>
                        </div>
                    </div>
                </div>
                <div className="relative group overflow-hidden border-[3px] border-[#fff]
                 hover:border-[#e2564d] p-1 transition ease-in-out">
                    <img className="w-full" src={team3} alt="" />
                    <div className="absolute -bottom-[300px] group-hover:bottom-0 left-0 right-0 transition transform
                     bg-[#e2564d] py-5 ">
                        <div className="text-center py-4">
                            <h2 className="text-2xl font-semibold text-[#fff]">Jennifer Adams</h2>
                            <p className="text-white">Executive Director</p>
                        </div>
                        <div className="flex gap-4 items-center justify-center">
                            <FaFacebook className="w-[36px] h-[36px] text-white  
                            border-2  border-[#fff] rounded-full p-1"></FaFacebook>
                            <FaTwitter className="w-[36px] h-[36px] text-white 
                             border-2  border-[#fff] rounded-full p-1"></FaTwitter>
                            <FaInstagram className="w-[36px] h-[36px] text-white 
                             border-2  border-[#fff] rounded-full p-1"></FaInstagram>
                            <FaDribbble className="w-[36px] h-[36px] text-white  
                            border-2 border-[#fff] rounded-full p-1"></FaDribbble>
                        </div>
                    </div>
                </div>
                <div className="relative group overflow-hidden border-[3px] border-[#fff]
                 hover:border-[#e2564d] p-1 transition ease-in-out">
                    <img className="w-full" src={team4} alt="" />
                    <div className="absolute -bottom-[300px] group-hover:bottom-0 left-0 right-0 transition transform
                     bg-[#e2564d] py-5 ">
                        <div className="text-center py-4">
                            <h2 className="text-2xl font-semibold text-[#fff]">Sarah Johnson</h2>
                            <p className="text-white">Marketing Director</p>
                        </div>
                        <div className="flex gap-4 items-center justify-center">
                            <FaFacebook className="w-[36px] h-[36px] text-white  
                            border-2  border-[#fff] rounded-full p-1"></FaFacebook>
                            <FaTwitter className="w-[36px] h-[36px] text-white 
                             border-2  border-[#fff] rounded-full p-1"></FaTwitter>
                            <FaInstagram className="w-[36px] h-[36px] text-white 
                             border-2  border-[#fff] rounded-full p-1"></FaInstagram>
                            <FaDribbble className="w-[36px] h-[36px] text-white  
                            border-2 border-[#fff] rounded-full p-1"></FaDribbble>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;