/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './../../providers/AuthProvider';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {

    const { loading, signInGoogle, signInUser, handleUpdateProfile } = useContext(AuthContext);
    const [loginLoading, setLoginLoading] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const notify = (msg) => toast(msg);

    const handleFormSubmit = (event) => {
        event.preventDefault();

        const passwordRegex = /^(?=.*[A-Z])(?=.*[\W_]).{6,}$/;
        const emailValue = event.target.email.value;
        const passValue = event.target.password.value;

        console.log(
            "Email: " + emailValue + "\n",
            "Pass : " + passValue
        );

        if (!passwordRegex.test(passValue)) {
            setError("Password should have at least 6 chracter,One uppercase and One special chracter");
            return;
        }


        setError("");
        setLoginLoading(true);
        signInUser(emailValue, passValue)
            .then((result) => {
                console.log(result);
                setLoginLoading(false);
                event.target.email.value = '';
                event.target.password.value = '';
                notify("User logged in successfully");
                navigate("/");
            })
            .catch((error) => {
                setLoginLoading(false);
                console.log(error.message);
                switch (error.code) {
                    case 'auth/invalid-login-credentials':
                        notify(`Email or password does not match.`);
                        break;
                    case 'auth/invalid-email':
                        notify(`Email address ${emailValue} is invalid.`);
                        break;
                    case 'auth/operation-not-allowed':
                        notify(`Error during sign up.`);
                        break;
                    case 'auth/weak-password':
                        notify('Password is not strong enough. Add additional characters including special characters and numbers.');
                        break;
                    default:
                        notify(error.message);
                        break;
                }

            })
    }

    const handleGoogleSignIn = () => {
        signInGoogle()
            .then((result) => {
                console.log(result);
                navigate("/");
            })
            .catch((error) => {
                console.log(error.message);
            })
    }
    return (
        <div>
            <div className="h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card flex-shrink-0 w-full max-w-sm rounded-md shadow-lg bg-base-100">
                        <div className="card-body w-full">
                            <ToastContainer />
                            <form onSubmit={handleFormSubmit}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text tracking-widest ">Email</span>
                                    </label>
                                    <input name='email' type="email" placeholder="email" className="input input-bordered outline-none" required />
                                </div>
                                <div className="form-control mt-3">
                                    <label className="label">
                                        <span className="label-text tracking-widest ">Password</span>
                                    </label>
                                    <input name='password' type="text" placeholder="password" className="input input-bordered" required />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                    <p className='mt-2 text-red-500 text-sm'>{error}</p>
                                </div>
                                <div className="form-control mt-6">
                                    {/* <button className="btn btn-primary bg-[#fff]
                                     hover:bg-[#e2564d] border-[#e2564d]
                                      text-white" type='submit'>Login</button> */}

                                    {/* <button className="uppercase tracking-widest
                                        text-[14px]  font-bold py-3 px-10 
                                        text-white bg-[#e2564d] hover:bg-white
                                        border border-[#e2564d] rounded-lg
                                        hover:border-[#1b1b1b] hover:text-[#1b1b1b] 
                                        hover:transition ease-in-out">Login</button> */}

                                    <button className="uppercase tracking-widest
                                        text-[14px]  font-bold py-3 px-10 
                                        hover:text-white bg-white
                                        border rounded-lg
                                        border-[#1b1b1b] text-[#1b1b1b]  hover:bg-[#d22e2e]
                                         hover:border-[#d22e2e]
                                        hover:transition ease-in-out">Login</button>
                                </div>
                            </form>
                            <p className='mt-4'>New to here? Please
                                <Link to="/register"> <span className='text-[#d22e2e] font-semibold'>Register</span></Link> </p>
                            <p className='text-center mb-2'>OR</p>
                            <div className='flex items-center justify-center'>
                                <button onClick={handleGoogleSignIn} className='btn text-center uppercase tracking-widest
                                        text-[14px]  font-bold py-3 px-10 
                                        hover:text-white bg-white
                                        border rounded-lg
                                        border-[#1b1b1b] text-[#1b1b1b]  hover:bg-[#d22e2e]
                                         hover:border-[#d22e2e]
                                        hover:transition ease-in-out'>Google Sign in</button>
                            </div>
                            {
                                loading && loginLoading && (
                                    <div className='container mx-auto flex items-center justify-center'>
                                        <span className="loading loading-bars loading-lg "></span>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;