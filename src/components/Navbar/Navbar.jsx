/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from './../../providers/AuthProvider';
import logo from '../../assets/img/logo.png'
import { FaEdit } from 'react-icons/fa';

const Navbar = () => {

    const { user, signOutUser } = useContext(AuthContext);

    const navigate = useNavigate();

    const [isChecked, setIsChecked] = useState(false);

    const handleToggle = () => {
        setIsChecked((prev) => !prev);
        const htmlRoot = document.getElementById('htmlRoot');
        if (isChecked) {
            htmlRoot.setAttribute('data-theme', 'light');
        } else {
            htmlRoot.setAttribute('data-theme', 'dark');
        }
    };

   /*  useEffect(() => {
        const currentTheme = document.getElementById('htmlRoot').getAttribute('data-theme');
        console.log('Current theme:', currentTheme);
        const htmlRoot = document.getElementById('htmlRoot');
        if (isChecked) {
            htmlRoot.setAttribute('data-theme', 'dark');
        } else {
            htmlRoot.setAttribute('data-theme', 'light');
        }
    }, [isChecked]); */



    const handleSignOut = () => {
        signOutUser()
            .then((result) => {
                console.log(result);
                navigate("/login");
            })
            .catch((error) => { console.error(error) })
    }

    return (
        // text-[#3eb896]
        <header className='shadow-md py-5'>
            <div className='container mx-auto flex flex-col lg:flex-row
                 gap-3 lg:gap-0 px-3 lg:px-0 items-center justify-between'>
                <h2 className='font-bold text-3xl uppercase'>
                    <img src={logo} alt="" />
                </h2>
                <nav>
                    <ul className='flex flex-wrap gap-8'>
                        <li className='text-[16px] text-[#131313] font-medium'>
                            <NavLink to={"/"} className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#d22e2e]" : "hover:text-[#d22e2e]"}>Home</NavLink>
                        </li>

                        {
                            user ? <>
                                <li className='text-[16px] text-[#131313] font-medium'>
                                    <NavLink
                                        to={"/shop"}
                                        className={
                                            ({ isActive, isPending }) => isPending ? "pending" :
                                                isActive ? "text-[#d22e2e]" : "hover:text-[#d22e2e]"
                                        }
                                    >Shop</NavLink>
                                </li>

                                <li className='text-[16px] text-[#131313] font-medium '>
                                    <NavLink to={"/carts"} className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-[#d22e2e]" : "hover:text-[#d22e2e]"}>My Cart</NavLink>
                                </li>
                                <li className='text-[16px] text-[#131313] font-medium  '>
                                    <NavLink to={"/add-product"} className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-[#d22e2e]" : "hover:text-[#d22e2e]"}>Add Product</NavLink>
                                </li>
                                <li className='text-[16px] text-[#131313] font-medium '>
                                    <NavLink to={"/about-us"} className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-[#d22e2e]" : "hover:text-[#d22e2e]"}>About Us</NavLink>
                                </li>
                            </> : <>
                                <li className='text-[16px] text-[#131313] font-medium '>
                                    <NavLink to={"/login"} className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-[#d22e2e]" : "hover:text-[#d22e2e]"}>Login</NavLink>
                                </li>
                                <li className='text-[16px] text-[#131313] font-medium '>
                                    <NavLink to={"/register"} className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-[#d22e2e]" : "hover:text-[#d22e2e]"}>Sign Up</NavLink>
                                </li>
                            </>

                        }

                    </ul>
                </nav>
                {
                    user && (<div className='flex gap-2 items-center justify-center'>
                        <img className='w-[38px] h-[38px] rounded-full' src={user?.photoURL} alt="" />
                        <p>{user?.displayName}</p>
                        {/* <button onClick={handleSignOut}
                            className='btn hover:text-black hover:btn-ghost
                         text-white bg-red-500 border-none
                          rounded-lg py-4 px-6'>Log Out</button> */}
                        <button onClick={handleSignOut}
                            className="uppercase  tracking-widest
                                    text-[14px]  font-bold py-3 px-10 
                                    border border-[#ddd] rounded-lg
                                    hover:bg-[#d22e2e] hover:text-white
                                    hover:border-[#d22e2e] text-[#1b1b1b]
                                    hover:transition ease-in-out">Log Out</button>
                    </div>)
                }

                <div>
                    <input type="checkbox" className="toggle"
                        checked={isChecked} onChange={handleToggle} />
                </div>
            </div>
        </header>
    );
};

export default Navbar;