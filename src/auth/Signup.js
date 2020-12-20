import React, { useState, useRef } from 'react'
import { Link, useNavigate } from "@reach/router";
import { useAuth } from "../utils/AuthContext";
import BackHome from "../icons/BackHome";

const Signup = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const { signup } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError('Password do not match')
        }

        try {
            setError('');
            setLoading(true);
            await signup(emailRef.current.value, passwordRef.current.value);
            navigate("/dashboard");
        } catch {
            setError("Failed to create an account");
        }

        setLoading(false);
        return null;
    }

    return (
        <div className="bg-black h-screen">
            <div className="flex md:flex-row flex-col h-screen">
                {/* Pizza Backgrounds */}
                <div className="bg-pizzaMobileBG bg-cover bg-center h-2/5" />
                <div className="bg-pizzaLBG md:bg-cover md:w-1/5" />
                <div className="bg-pizzaMBG md:bg-cover md:w-1/5" />
                <div className="bg-pizzaRBG md:bg-cover md:w-1/5" />
                {/* Singup Form */}
                <div className="bg-black md:w-2/5 w-full md:flex">
                    <form onSubmit={handleSubmit} className="relative grid bg-yellow-200 grid-cols-8 gap-3 md:w-4/5 max-h-full w-5/6 m-auto rounded-lg py-3 shadow-2xl space-y-0 md:space-y-2 md:py-4">
                        <Link to="/" className="absolute h-5 w-5 inset-x-4 inset-y-10">
                            <BackHome />
                        </Link>
                        <div className="col-start-2 col-end-8">
                            <div className="flex flex-row space-x-4 justify-center">
                                <img className="block h-14 w-auto" src="https://www.pinocchiospizza.net/images/pinocchio_72.gif" alt="Pinocchio" />
                                <div className="self-center text-xl font-mono italic">
                                    Pinocchio&apos;s Pizza
                            </div>
                            </div>
                        </div>
                        <div className="col-start-2 col-end-8 place-self-center">
                            <div className="md:text-2xl text-2xl font-serif font-semibold">
                                Create Account
                            </div>
                        </div>
                        <div className="col-start-2 col-end-8">
                            <label htmlFor="email_address" className="block text-sm font-medium text-gray-700">
                                Email address
                                <input required type="email" ref={emailRef} id="email_address" autoComplete="off" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                            </label>
                        </div>
                        <div className="col-start-2 col-end-8">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                Password
                                <input required type="password" ref={passwordRef} id="password" autoComplete="off" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                            </label>
                        </div>
                        <div className="col-start-2 col-end-8">
                            <label htmlFor="confirm_password" className="block text-sm font-medium text-gray-700">
                                Confirm password
                                <input required type="password" ref={passwordConfirmRef} id="confirm_password" autoComplete="off" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                            </label>
                        </div>
                        <div className="col-start-2 col-end-8 my-2">
                            <button disabled={loading} type="submit" className="transition duration-500 ease-in-out bg-gray-700 hover:bg-black transform hover:-translate-y-1 hover:scale-110 group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white focus:outline-none">
                                <span className=" absolute left-0 inset-y-0 flex items-center pl-3">
                                    <svg className="h-5 w-5 text-indigo-600 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="white" aria-hidden="true">
                                        <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                                    </svg>
                                </span>
                                Sign Up
                                </button>
                        </div>
                        {error && (
                            <div className="col-start-2 col-end-8 my-2 bg-red-600 text-center text-white p-2 rounded-md">
                                {error}
                            </div>
                        )}
                        <div className="col-start-2 col-end-8 my-2 py-3 border-t border-gray-600 text-center text-gray-600 hover:text-black cursor-pointer">
                            <Link to="/login">
                                Already have an account? Login
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signup;
