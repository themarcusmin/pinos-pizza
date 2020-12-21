import React from "react";
import { Link } from "@reach/router";

const NotFound = () => {
    return (
        <div className="bg-black h-screen w-screen flex justify-center items-center">
            <div className="flex flex-col text-center rounded-md items-center space-y-5 p-4 bg-yellow-300 w-4/5 md:w-1/2 h-1/2">
                <div className="text-3xl">ERROR: Page Not Found</div>
                <div>The page you are looking for does not exist!</div>
                <Link to="/" className="text-blue-500 font-semibold">Home</Link>
            </div>
        </div>
    )
}

export default NotFound;