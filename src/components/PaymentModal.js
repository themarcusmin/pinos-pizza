import React, { useContext } from 'react'
import { CartContext } from "../utils/Store";

/* Function:
    - Renders Order Summary: item count, pickup/delivery, total amount due
    - Dispatch delivery address & payment details on Confirm Button
 */

// Compute total quantity of all items
const totalItems = arr => {
    return arr.reduce((acc, item) => acc + item.qty, 0);
}

// Render delivery details for ORDER SUMMARY
const helperDeliveryFee = amt => {
    return (
        <tr className="border-t border-gray-300 h-8">
            <td className="text-left">Delivery</td>
            <td className="text-right">
                {amt ? (
                    <span className="mx-3">{`$ ${amt}`}</span>
                ) : (
                        `Free`
                    )}
            </td>
        </tr>
    )
}

// Render pickup details for ORDER SUMMARY
const helperPickup = () => {
    return (
        <tr className="border-t border-gray-300 h-8">
            <td className="text-left">
                <span className="text-md">Store Pickup</span>
                <br />
                <span className="ml-4 text-xs italic">Pinocchio&apos;s Pizza & Subs</span>
                <br />
                <span className="ml-4 text-xs italic">74 Winthrop Street</span>
                <br />
                <span className="ml-4 text-xs italic">Harvard Square</span>
                <br />
                <span className="ml-4 text-xs italic">617-876-4897</span>
            </td>
            <td />
        </tr>
    )
}

const PaymentModal = ({ handleCheckout }) => {
    const [{ items, delivery, amount },] = useContext(CartContext);
    console.log(amount);

    return (
        <div className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                {/* <!--
                  Background overlay, show/hide based on modal state.

                  Entering: "ease-out duration-300"
                    From: "opacity-0"
                    To: "opacity-100"
                  Leaving: "ease-in duration-200"
                    From: "opacity-100"
                    To: "opacity-0"
                --> */}
                <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                    <div className="absolute inset-0 bg-gray-500 opacity-75" />
                </div>

                {/* <!-- This element is to trick the browser into centering the modal contents. --> */}
                <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
                {/* <!--
                  Modal panel, show/hide based on modal state.

                  Entering: "ease-out duration-300"
                    From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    To: "opacity-100 translate-y-0 sm:scale-100"
                  Leaving: "ease-in duration-200"
                    From: "opacity-100 translate-y-0 sm:scale-100"
                    To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                --> */}
                <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
                    {/* <div className="px-4 pt-5 pb-4 sm:p-6 sm:pb-4"> */}
                    <div className="sm:flex sm:items-start">
                        <form className="w-full max-w-xl bg-white rounded-lg shadow-md p-4">
                            <div className="flex flex-wrap -mx-3">
                                <div className="w-full md:w-full px-3 mb-4 text-2xl font-semibold">
                                    ORDER SUMMARY
                                </div>
                                <div className="w-full md:w-full px-3 mx-4 mb-4 text-base border border-gray-300 p-3">
                                    <table className="table-fixed w-full">
                                        <thead>
                                            <tr>
                                                <th className="w-2/3 text-left font-lg font-mono font-bold h-8">{`${totalItems(items)} ITEM(S)`}</th>
                                                <th className="w-1/3" />
                                            </tr>
                                        </thead>
                                        <tbody className="text-sm">
                                            {delivery ? (
                                                helperDeliveryFee(amount.deliveryFee)
                                            ) : (
                                                    helperPickup()
                                                )}
                                            <tr className="border-t border-gray-300 h-8">
                                                <td className="text-left">Total</td>
                                                <td className="text-right">
                                                    <span className="mx-3">$</span>
                                                    {amount.totalDue}
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="w-full md:w-full px-3 mb-4 text-2xl font-semibold">
                                    DELIVERY ADDRESS
                                </div>
                                <div className="w-full md:w-full px-3 mb-2">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="full-name">
                                        <p className="mb-2">Full Name</p>
                                        <input id="full-name" className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500" type="text" autoComplete="off" required />
                                    </label>
                                </div>
                                <div className="w-full md:w-full px-3 mb-2">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold" htmlFor="address">
                                        <p className="mb-2">Address</p>
                                        <input id="address" className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500" type="text" autoComplete="off" required />
                                    </label>
                                </div>
                                <div className="w-full flex items-center justify-between px-3 mb-2">
                                    <label htmlFor="remember" className="flex items-center w-1/2">
                                        <input type="checkbox" name="" id="" className="mr-1 bg-white shadow" />
                                        <span className="text-sm text-gray-700 pt-1">Save Address</span>
                                    </label>
                                </div>
                                <div className="w-full md:w-full px-3 mb-4 text-2xl font-semibold">
                                    PAYMENT DETAILS
                                </div>
                                <div className="w-full md:w-full px-3">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="address">
                                        <p className="mb-2">Card Number</p>
                                        <input id="address" className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500" type="password" autoComplete="off" required />
                                    </label>
                                </div>
                                <div className="w-full flex items-center justify-between px-3 mb-2">
                                    <label htmlFor="remember" className="flex items-center w-1/2">
                                        <input type="checkbox" name="" id="" className="mr-1 bg-white shadow" />
                                        <span className="text-sm text-gray-700 pt-1">Save Card</span>
                                    </label>
                                </div>
                                <div className="w-full px-4 sm:px-6 sm:flex sm:flex-row-reverse">
                                    <button type="button" onClick={handleCheckout} className="hover-effect w-full inline-flex justify-self-end rounded-md border border-transparent shadow-sm px-4 py-2 bg-yellow-300 text-base font-medium text-black transform hover:scale-95 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:outline-none sm:ml-3 sm:w-auto sm:text-sm">
                                        Confirm
                                    </button>
                                    <button type="button" onClick={handleCheckout} className="mt-3 w-full inline-flex justify-self-end rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 transform hover:scale-95 focus:outline-none focus:ring-2 focus:outline-none sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                    {/* </div> */}
                </div>
            </div>
        </div>
    )
}

export default PaymentModal;