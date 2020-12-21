import React, { useState, useRef } from "react";
import { useNavigate } from "@reach/router";
import { useAuth } from "../utils/AuthContext";

export default function UpdateAccount() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const { currentUser, updateEmail, updatePassword } = useAuth();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError("Passwords do not match!");
        }

        const promises = [];
        setLoading(true);
        setError("");

        if (emailRef.current.value !== currentUser.email) {
            promises.push(updateEmail(emailRef.current.value));
        }
        if (passwordRef.current.value) {
            promises.push(updatePassword(passwordRef.current.value))
        }

        Promise.all(promises).then(() => {
            navigate("/dashboard")
        }).catch(() => {
            setError("Failed to update account")
        }).finally(() => {
            setLoading(false);
        })
        return null;
    }

    return (
        <form onSubmit={handleSubmit} className="m-5 flex flex-col md:w-1/2 sm:3/5 p-10 bg-white opacity-90 rounded-lg">
            <div className="text-center mb-3 text-2xl font-semibold font-mono">
                Update Your Email or Password
            </div>
            {error && (
                <div className="w-full md:w-full px-3 mb-2 bg-red-600 text-center text-white p-2 rounded-md">
                    {error}
                </div>
            )}
            <div className="w-full md:w-full px-3 mb-2">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="email">
                    <p className="mb-2">Email</p>
                    <input className="modal-input" ref={emailRef} type="email" defaultValue={currentUser.email} required />
                </label>
            </div>
            <div className="w-full md:w-full px-3 mb-2">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="password">
                    <p className="mb-2">Password</p>
                    <input className="modal-input" ref={passwordRef} type="password" autoComplete="off" required />
                </label>
            </div>
            <div className="w-full md:w-full px-3 mb-2">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="password-confirm">
                    <p className="mb-2">Confirm Password</p>
                    <input className="modal-input" ref={passwordConfirmRef} type="password" autoComplete="off" required />
                </label>
            </div>
            <button type="submit" disabled={loading} className="update-profile-btn-confirm opacity-100">
                Update
            </button>
        </form>
    )
}
