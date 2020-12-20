import React from 'react';
import { Link } from "@reach/router";

import cart from "../img/cart.svg";
import truck from "../img/truck.svg";
import pizza from "../img/pizza.svg";
import arrow from "../img/right-arrow.svg";

const Home = () => {
    return (
        <div className="h-screen w-screen">
            {/* Background */}
            <div className="relative bg-pizzaHome lg:bg-right bg-right-bottom md:bg-top-right bg-cover h-4/5">
                {/* Branding */}
                <div className="absolute flex flex-row m-6 space-x-5">
                    <img className="block h-auto w-auto" src="https://www.pinocchiospizza.net/images/pinocchio_72.gif" alt="Pinocchio" />
                    <div className="text-white font-mono animate-pulse">
                        <div className="text-3xl">Pinocchio&apos;s Pizza</div>
                        <div className="text-sm">74 Winthrop Street Harvard Square</div>
                        <div className="text-sm">617-876-4897</div>
                    </div>
                </div>
                {/* Login/Register Buttons */}
                <div className="absolute inset-x-0 bottom-20 flex w-screen justify-center items-center">
                    <div className="flex flex-row space-x-6">
                        <Link to="/login">
                            <button type="button" className="btn-login-create-account">
                                Login
                            </button>
                        </Link>
                        <Link to="/signup">
                            <button type="button" className="btn-login-create-account">
                                Create Account
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            {/* Bottom Strip on order-pickup-delivery-pizza */}
            <div className="h-1/5 md:p-3 p-4">
                <div className="flex flex-row md:p-0 md:space-x-10 space-x-5 justify-center items-center">
                    <div className="flex flex-col">
                        <img className="h-16" src={cart} alt="shopping-cart" />
                        <div className="font-mono self-center">Order Online</div>
                    </div>
                    <img className="h-11 self-center hover:animate-bounce transform animate-none transition ease-out delay-300 duration-300" src={arrow} alt="right-arrow" />
                    <div className="flex flex-col">
                        <img className="h-16" src={truck} alt="delivery-truck" />
                        <div className="font-mono self-center">Delivery</div>
                    </div>
                    <img className="h-11 self-center hover:animate-bounce transform animate-none transition ease-out delay-300 duration-300" src={arrow} alt="right-arrow" />
                    <div className="flex flex-col">
                        <img className="h-16" src={pizza} alt="pizza" />
                        <div className="font-mono self-center">Eat & Enjoy</div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Home;