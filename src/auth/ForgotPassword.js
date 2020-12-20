import React, { useState, useRef } from 'react';
import { Link } from "@reach/router";
import { useAuth } from "../utils/AuthContext";
import BackHome from "../icons/BackHome";

const ForgotPassword = () => {
    const emailRef = useRef();
    const { resetPassword } = useAuth();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();
    const [message, setMessage] = useState();

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            setMessage("");
            setError("")
            setLoading(true);
            await resetPassword(emailRef.current.value)
            setMessage("Check your inbox for further instruction");
        } catch {
            setError("Failed to reset password")
        }

        setLoading(false);
        emailRef.current.value = "";
    }

    return (
        <div className="bg-black h-screen">
            <div className="flex md:flex-row flex-col h-screen">
                {/* Pizza Backgrounds */}
                <div className="bg-pizzaMobileBG bg-cover bg-center h-2/5" />
                {/* Form */}
                <div className="bg-black md:w-2/5 w-full md:flex">
                    <form onSubmit={handleSubmit} className="relative grid bg-yellow-200 grid-cols-8 md:gap-3 gap-y-4 md:w-4/5 max-h-full w-5/6 m-auto rounded-lg py-3 shadow-2xl space-y-0 md:space-y-2 md:py-4">
                        <Link to="/login" className="absolute h-5 w-5 inset-x-4 inset-y-10">
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
                                Reset your password
                            </div>
                        </div>
                        <div className="col-start-2 col-end-8">
                            <div className="font-serif text-xs">
                                Tell us your email address and we will send you a link to reset your password.
                            </div>
                        </div>
                        <div className="col-start-2 col-end-8">
                            <label htmlFor="email_address" className="block text-sm font-medium text-gray-700">
                                Email address
                                <input required type="email" ref={emailRef} autoComplete="off" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                            </label>
                        </div>
                        <div className="col-start-2 col-end-8 my-2">
                            <button disabled={loading} type="submit" className="transition duration-500 ease-in-out bg-gray-700 hover:bg-black transform hover:-translate-y-1 hover:scale-110 group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white focus:outline-none">
                                Reset Password
                            </button>
                        </div>
                        {error && (
                            <div className="col-start-2 col-end-8 my-2 bg-red-600 text-center text-white p-2 rounded-md">
                                {error}
                            </div>
                        )}
                        {message && (
                            <div className="col-start-2 col-end-8 my-2 bg-green-500 text-center text-white p-2 rounded-md">
                                {message}
                            </div>
                        )}
                    </form>
                </div>
                <div className="bg-pizzaLBG md:bg-cover md:w-1/5" />
                <div className="bg-pizzaMBG md:bg-cover md:w-1/5" />
                <div className="bg-pizzaRBG md:bg-cover md:w-1/5" />
            </div>
        </div>
    )
}

export default ForgotPassword;
