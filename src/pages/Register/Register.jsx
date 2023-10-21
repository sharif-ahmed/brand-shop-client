/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { AuthContext } from '../../providers/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import avatar from '../../assets/img/avatar.jpg'

const Register = () => {

    const { createUser, loading, handleUpdateProfile } = useContext(AuthContext);
    const navigate = useNavigate();
    const [regLoading, setRegLoading] = useState(false);

    const [error, setError] = useState('');

    const handleFormSubmit = (event) => {
        event.preventDefault();

        const passwordRegex = /^(?=.*[A-Z])(?=.*[\W_]).{6,}$/;

        const form = event.target;
        let nameValue = event.target.name.value;
        let emailValue = event.target.email.value;
        let passValue = event.target.password.value;

        if (!passwordRegex.test(passValue)) {
            setError("Password should have at least 6 chracter,One uppercase and One special chracter");
            return;
        }

        setError("");
        setRegLoading(true);
        
        createUser(emailValue, passValue)
            .then((result) => {
                console.log(result);
                handleUpdateProfile(nameValue, avatar)
                    .then(() => {
                        notify("User created successfully");
                        form.reset();
                        navigate("/");
                        window.location.reload();
                        setRegLoading(false);
                    })
            })
            .catch((error) => {
                console.log(error);
                setRegLoading(false);
                switch (error.code) {
                    case 'auth/email-already-in-use':
                        notify(`Email address ${emailValue} already in use.`);
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

    const notify = (msg) => toast(msg);


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
                                        <span className="label-text tracking-wider">Name</span>
                                    </label>
                                    <input name='name' type="text" placeholder="Your name" className="input input-bordered outline-none" required />
                                </div>
                                <div className="form-control mt-3">
                                    <label className="label">
                                        <span className="label-text tracking-wider">Email</span>
                                    </label>
                                    <input name='email' type="email" placeholder="Email" className="input input-bordered outline-none" required />
                                </div>
                                <div className="form-control mt-3">
                                    <label className="label">
                                        <span className="label-text tracking-wider">Password</span>
                                    </label>
                                    <input name='password' type="text" placeholder="Password" className="input input-bordered" required />
                                    <p className='mt-2 text-red-500 text-sm'>{error}</p>
                                </div>
                                {/* <div className="mb-1 mt-3">
                                    <input type="checkbox" name="terms" id="terms" />
                                    <label className="ml-2" htmlFor="terms">Accept our <a href="">Terms and Conditions</a></label>
                                </div> */}
                                <div className="form-control mt-6">
                                    {/* <button className="btn btn-primary text-white">Register</button> */}
                                    <button className="uppercase tracking-widest
                                        text-[14px]  font-bold py-3 px-10 
                                        hover:text-white bg-white
                                        border rounded-lg
                                        border-[#1b1b1b] text-[#1b1b1b]  hover:bg-[#d22e2e]
                                         hover:border-[#d22e2e]
                                        hover:transition ease-in-out">Register</button>
                                </div>
                                {
                                    loading && regLoading && (
                                        <div className='container mx-auto flex items-center justify-center'>
                                            <span className="loading loading-bars loading-lg "></span>
                                        </div>
                                    )
                                }
                            </form>
                            <p className='mt-4'>Already have an account? Please <Link to="/login"><span className='text-[#d22e2e] font-semibold'>Login</span></Link> </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;