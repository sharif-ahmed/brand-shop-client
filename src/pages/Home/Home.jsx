/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import About from "../../components/About/About";
import Banner from "../../components/Banner/Banner";
import Services from "../../components/Shop/Shop";
import Testimonilas from "../../components/Testimonials/Testimonilas";
import { useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from './../../providers/AuthProvider';
import Footer from './../../components/Footer/Footer';
import Features from './../../components/Features/Features';
import Brands from './../../components/Brands/Brands';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Brands></Brands>
            <Features></Features>
            <Testimonilas></Testimonilas>
            <Footer></Footer>
        </div>
    );
};

export default Home;