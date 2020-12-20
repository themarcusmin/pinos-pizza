import React, { useState, useContext } from 'react'
import { CartContext } from "../utils/Store";

import Pricing from "./Pricing";
import CalculatePricing from "./CalculatePricing";

/* Control:
    - Minimum Qty is 1
    - Trashcan Icon deletes the item from the state
    - Checkout is clickable only if there is an item
*/

/* Function:
    - Render all items from state
    - Render pricing based on state
    - Dispatch for delivery, increment, decrement and remove items
    - Dispatch pricing details on Checkout button
*/

const Cart = ({ openModal }) => {
    const [deliveryMethod, setDeliveryMethod] = useState();
    const [{ delivery, items }, dispatch] = useContext(CartContext);

    return (
        <div className="cart-container">
            <div className="text-xl text-center italic p-2 font-bold">
                Your Cart
            </div>
            <div className="flex justify-center">
                <button onClick={() => {
                    setDeliveryMethod("Delivery");
                    dispatch({ type: "setDelivery", payload: { delivery: true } });
                }} type="button" className={deliveryMethod === "Delivery" ? "btn-delivery method-btn-active" : "btn-delivery method-btn-inactive"}>
                    Delivery
                </button>
                <button onClick={() => {
                    setDeliveryMethod("Pickup");
                    dispatch({ type: "setDelivery", payload: { delivery: false } });
                }} type="button" className={deliveryMethod === "Pickup" ? "btn-pickup method-btn-active" : "btn-pickup method-btn-inactive"}>
                    Pickup
                </button>
            </div>
            <table className="table-fixed border-b border-black">
                <thead>
                    <tr className="underline">
                        <th className="text-sm text-left p-2 w-7/12">Item</th>
                        <th className="text-sm text-center p-2 w-2/12">Qty</th>
                        <th className="text-sm text-center p-2 w-2/12">Price</th>
                        <th className="w-1/12" />
                    </tr>
                </thead>
                <tbody>
                    {
                        items.map(item => (
                            <tr key={item.id}>
                                <td className="text-xs p-2 text-left break-all">{item.name}</td>
                                <td className="text-xs p-2 text-center">
                                    <div className="self-center flex flex-row">
                                        <svg onClick={() => dispatch({ type: 'decrementItem', payload: { id: item.id } })} className="svg-operation" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <div className="text-center md:w-6 w-10 font-semibold text-md text-black">{item.qty}</div>
                                        <svg onClick={() => dispatch({ type: 'incrementItem', payload: { id: item.id } })} className="svg-operation" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                </td>
                                <td className="text-xs p-2 text-center">{item.totalPrice.toFixed(2)}</td>
                                <td>
                                    <svg onClick={() => dispatch({ type: 'removeItem', payload: { id: item.id } })} className="svg-delete" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                    </svg>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <Pricing items={items} delivery={delivery} />
            {items.length ? (
                <button type="button" onClick={() => {
                    openModal();
                    dispatch({ type: 'setPricingDetails', payload: { amount: CalculatePricing(delivery, items) } });
                }} className="btn-checkout">
                    Checkout
                </button>
            ) : (
                    <button disabled type="button" className="btn-checkout-disabled">
                        Checkout
                    </button>
                )
            }

        </div >
    )
}

export default Cart;
