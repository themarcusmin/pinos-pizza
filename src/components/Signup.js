import React from 'react'

const Signup = () => {
    return (
        <div className="bg-yellow-100 bg-contain h-screen">
            <div className="flex md:flex-row flex-col h-screen">
                <div className="bg-pizzaMobileBG bg-cover h-1/2" />
                <div className="bg-pizzaLBG md:bg-cover md:w-1/5" />
                <div className="bg-pizzaMBG md:bg-cover md:w-1/5" />
                <div className="bg-pizzaRBG md:bg-cover md:w-1/5" />
                <div className="bg-indigo-100 md:w-2/5 w-full md:flex py-12">
                    <div className="grid grid-cols-6 gap-4 md:m-auto">
                        <div className="col-start-2 col-span-4">
                            <div className="flex flex-row space-x-4 justify-center">
                                <img className="block h-14 w-auto" src="https://www.pinocchiospizza.net/images/pinocchio_72.gif" alt="Pinocchio" />
                                <div className="self-center text-2xl font-mono italic">
                                    Pinocchio&apos;s Pizza
                            </div>
                            </div>
                        </div>
                        <div className="col-start-2 col-span-4 place-self-center">
                            <div className="text-3xl font-serif     font-semibold">
                                Create Account
                            </div>
                        </div>
                        <div className="col-start-2 col-span-4">
                            <label htmlFor="email_address" className="block text-sm font-medium text-gray-700">
                                Email address
                                <input required type="text" name="email_address" id="email_address" autoComplete="off" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                            </label>
                        </div>
                        <div className="col-start-2 col-span-4">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                Password
                                <input required type="text" name="password" id="password" autoComplete="off" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                            </label>
                        </div>
                        <div className="col-start-2 col-span-4">
                            <label htmlFor="confirm_password" className="block text-sm font-medium text-gray-700">
                                Confirm password
                                <input required type="text" name="confirm_password" id="confirm_password" autoComplete="off" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                            </label>
                        </div>
                        <div className="col-start-2 col-span-4 my-3">
                            <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none">
                                <span className=" absolute left-0 inset-y-0 flex items-center pl-3">
                                    <svg className="h-5 w-5 text-indigo-600 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="white" aria-hidden="true">
                                        <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                                    </svg>
                                </span>
                                Sign Up
                        </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup;
