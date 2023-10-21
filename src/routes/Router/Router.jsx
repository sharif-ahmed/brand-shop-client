import {
    createBrowserRouter
} from "react-router-dom";
import MainLayout from "../../layouts/MainLayout";
import ErrorPage from "../../pages/Error/ErrorPage";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";
import PrivateRoute from './../PrivateRoute';
import AboutUs from "../../pages/AboutUs/AboutUs";
import Shop from "../../components/Shop/Shop";
import ServiceDetails from "../../components/ServiceDetails/ServiceDetails";
import AddProduct from "../../pages/AddProduct/AddProduct";
import BrandProducts from "../../pages/BrandProduts/BrandProducts";
import Carts from "../../pages/Carts/Carts";
import EditProduct from "../../pages/EditProduct/EditProduct";
import ProductDetails from "../../pages/ProductDetails/ProductDetails";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/add-product",
                element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
            },
            {
                path: "/edit-product/:id",
                element: <PrivateRoute><EditProduct></EditProduct></PrivateRoute>,
            },
            {
                path: "/view-product/:id",
                element: <PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>,
            },
            {
                path: "/shop",
                element: <PrivateRoute><Shop></Shop></PrivateRoute>
            },
            {
                path: "/products/:brandName",
                element: <PrivateRoute>
                    <BrandProducts></BrandProducts>
                </PrivateRoute>
            },
            {
                path: "/carts",
                element: <PrivateRoute>
                    <Carts></Carts>
                </PrivateRoute>
            },
            {
                path: "/about-us",
                element: <PrivateRoute> <AboutUs></AboutUs></PrivateRoute>
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <Register />
            }
        ]
    },

]);

export default Router;