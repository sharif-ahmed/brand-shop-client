/* eslint-disable no-unused-vars */
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
//import Footer from "../components/Footer/Footer";
import { AuthContext } from './../providers/AuthProvider';
import { useContext } from 'react';

const MainLayout = () => {
    const { user } = useContext(AuthContext);
    return (
        <div>
            <header>
                <Navbar></Navbar>
            </header>
            <main>
                <Outlet></Outlet>
            </main>
            {/* <footer>
                <Footer></Footer>
            </footer> */}
        </div>
    );
};

export default MainLayout;