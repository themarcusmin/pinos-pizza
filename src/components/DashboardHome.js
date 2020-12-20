import React from 'react'

/* Credits to: Animation demos By Gazi Muhammad Akil tailwindcss@1.9.6 @https://tailwindcomponents.com/component/animation
    Function:
     - Default Cover component for Home after logging in
 */

const DashboardHome = () => {
    return (
        <section className="bg-yellow-500 p-10 min-h-screen flex md:flex-row items-center justify-around flex-wrap sm:flex-col select-none">
            <div className="p-8 py-4 w-full text-center text-white font-bold text-6xl italic">
                Ordering Pizza Made Simple
            </div>
            {/* <!-- scale --> */}
            <div className="h-32 w-32 relative cursor-pointer mb-5">
                <div className="absolute inset-0 bg-white opacity-25 rounded-lg shadow-2xl" />
                <div className="absolute inset-0 transform  hover:scale-75 transition duration-300">
                    <div className="h-full w-full bg-white rounded-lg shadow-2xl flex justify-center items-center p-2">
                        <div className="font-mono text-2xl text-center">
                            Start Ordering
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- roatate and scale --> */}
            <div className="h-32 w-32 relative cursor-pointer mb-5">
                <div className="absolute inset-0 bg-white opacity-25 rounded-lg shadow-2xl" />
                <div className="absolute inset-0 transform hover:rotate-90 hover:scale-75 transition duration-300">
                    <div className="h-full w-full bg-white rounded-lg shadow-2xl flex justify-center items-center p-2">
                        <div className="font-mono text-2xl text-center">
                            Checkout
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- rotate --> */}
            <div className="h-32 w-32 relative cursor-pointer mb-5">
                <div className="absolute inset-0 bg-white opacity-25 rounded-lg shadow-2xl" />
                <div className="absolute inset-0 transform  hover:rotate-45 transition duration-300">
                    <div className="h-full w-full bg-white rounded-lg shadow-2xl flex justify-center items-center p-2">
                        <div className="font-mono text-2xl text-center">
                            Delivery
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Origin --> */}
            <div className="h-32 w-32 relative cursor-pointer mb-5">
                <div className="absolute inset-0 bg-white opacity-25 rounded-lg shadow-2xl" />
                <div className="absolute inset-0 transform origin-left hover:-rotate-45 transition duration-300">
                    <div className="h-full w-full bg-white rounded-lg shadow-2xl flex justify-center items-center p-2">
                        <div className="font-mono text-2xl text-center">
                            Store Pickup
                        </div>
                    </div>
                </div>
            </div>

            <div className="h-32 w-32 relative cursor-pointer mb-5">
                <div className="absolute inset-0 bg-white opacity-25 rounded-lg shadow-2xl" />
                <div className="absolute inset-0 transform hover:rotate-90 hover:translate-x-full hover:scale-150 transition duration-300">
                    <div className="h-full w-full bg-white rounded-lg shadow-2xl flex justify-center items-center p-2">
                        <div className="font-mono text-2xl text-center">
                            Enjoy Your Hot Pizza!
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DashboardHome;