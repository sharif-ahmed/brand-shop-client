/* eslint-disable react/jsx-no-undef */
import { Link } from 'react-router-dom';
const ErrorPage = () => {
    return (
        <div className='flex items-center justify-center h-screen'>
            <div className="flex flex-col items-center justify-center">
                <h2 className='text-[200px] font-bold text-center leading-[190px]'>404</h2>
                <p className="text-center text-[50px] font-medium">Oops! Page Not Found</p>
                <Link to="/"><button className="mt-4 bg-red-500 text-white rounded-lg py-2 px-5">Back to home</button></Link>
            </div>
        </div>
    );
};

export default ErrorPage;