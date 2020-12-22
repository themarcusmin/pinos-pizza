import React, { useState, useEffect } from "react";
import { writeDB } from "../firebase";
import { useAuth } from "../utils/AuthContext";

const Myorders = () => {
    const [orders, setOrders] = useState();
    const { currentUser } = useAuth();
    const { uid } = currentUser;

    useEffect(() => {
        writeDB.ref(`/order-history/${uid}`).once("value").then(snap => {
            if (snap.toJSON() === null) {
                return null
            }
            return setOrders(Object.values(snap.toJSON()));
        })
    }, [uid])

    return (
        <div className="bg-yellow-400 h-screen">
            <div className="sm:p-4 md:p-6 lg:p-6 px-0 py-3">
                <div className="min-w-full inline-block shadow">
                    <table className="table-fixed w-full">
                        <thead>
                            <tr className="text-white bg-gray-800 w-full">
                                <th className="px-4 py-2 w-2/12 text-center">Time</th>
                                <th className="w-8/12 md:w-4/12">Items</th>
                                <th className="w-2/12 hidden md:table-cell">Paid</th>
                                <th className="w-2/12 hidden md:table-cell">Delivery</th>
                                <th className="px-4 py-2 w-2/12">Status</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white border-gray-500">
                            {/* orders array is reversed to show the mose recent orders */}
                            {orders ?
                                orders.slice(0).reverse().map(order => (
                                    <tr key={order.dateTime} className="border-b border-gray-400">
                                        <th className="px-4 py-2 text-sm font-normal text-center">{order.dateTime}</th>
                                        <th className="px-2 py-2 text-sm font-normal text-left">
                                            {(order.items) && (Object.values(order.items).map(item => (
                                                <div className="flex flex-row align-middle space-x-2 text-xs" key={item.id}>
                                                    <div>{`${item.qty} x ${item.name}`}</div>
                                                    <div>{`$ ${item.totalPrice.toFixed(2)}`}</div>
                                                </div>
                                            )))}
                                        </th>
                                        <th className="hidden md:table-cell px-4 py-2 text-sm font-normal text-center">{`$  ${order.amount}`}</th>
                                        <th className="hidden md:table-cell px-8 py-2 text-sm font-normal text-center">
                                            {order.deliveryMethod === "Delivery" ? (
                                                <svg className="w-6 h-6 m-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                            ) : (
                                                    <svg className="w-6 h-6 m-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                                                    </svg>
                                                )}
                                        </th>
                                        <th className="px-2 py-2 md:px-4 text-sm font-normal text-center">{order.status}</th>
                                    </tr>
                                ))
                                : (
                                    <tr className="border-b border-gray-400">
                                        <th />
                                        <th className="text-gray-400">Empty!</th>
                                        <th />
                                        <th />
                                        <th />
                                    </tr>
                                )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Myorders;