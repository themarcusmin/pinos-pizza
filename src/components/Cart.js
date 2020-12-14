import React from 'react'

const Cart = ({ handleCheckout }) => {
    return (
        <div className="select-none sticky top-5 font-mono object-contain bg-white rounded-md h-4/5 m-4 p-2 shadow-xl flex flex-col justify-start space-y-2">
            <div className="text-xl italic p-2 font-bold">
                Your Cart
            </div>
            <div className="flex justify-center">
                <button type="button" className="hover-effect w-auto focus:outline-none bg-gray-300 hover:bg-black hover:text-white text-black py-1 px-3 rounded-l-md border-r border-gray-400">
                    Delivery
                </button>
                <button type="button" className="hover-effect w-auto focus:outline-none bg-gray-300 hover:bg-black hover:text-white  text-black py-1 px-3 rounded-r-md">
                    Pickup
                </button>
            </div>
            <table className="table-auto border-b border-black">
                <thead>
                    <tr className="underline">
                        <th className="text-sm text-left p-2">Item</th>
                        <th className="text-sm text-center p-2">Qty</th>
                        <th className="text-sm text-left p-2">Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="text-xs p-2 text-left">Cheese Pizza</td>
                        <td className="text-xs p-2 text-center">
                            <div className="flex flex-row w-20 rounded-lg relative bg-transparent mt-1">
                                <button type="button" data-action="decrement" className="hover-effect bg-gray-400 text-white active:bg-gray-600 hover:bg-black h-full w-20 rounded cursor-pointer focus:outline-none">
                                    <span className="m-auto text-lg font-thin">−</span>
                                </button>
                                <input className="outline-none focus:outline-none text-center w-full font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700 outline-none" name="custom-input-number" value="0" />
                                <button type="button" data-action="increment" className="hover-effect bg-gray-400 text-white active:bg-gray-600 hover:bg-black h-full w-20 rounded cursor-pointer focus:outline-none">
                                    <span className="m-auto text-lg font-thin">+</span>
                                </button>
                            </div>
                        </td>
                        <td className="text-xs p-2 text-center">12.99</td>
                        <td>
                            <svg className="h-3 cursor-pointer active:text-white transform hover:scale-150 hover:text-red-600 hover-effect" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </td>
                    </tr>
                    <tr>
                        <td className="text-xs p-2 text-left">Sausage, Peppers & Onions</td>
                        <td className="text-xs p-2 text-center">
                            <div className="flex flex-row w-20 rounded-lg relative bg-transparent mt-1">
                                <button type="button" data-action="decrement" className="hover-effect bg-gray-400 text-white active:bg-gray-600 hover:bg-black h-full w-20 rounded cursor-pointer focus:outline-none">
                                    <span className="m-auto text-lg font-thin">−</span>
                                </button>
                                <input className="outline-none focus:outline-none text-center w-full font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700 outline-none" name="custom-input-number" value="1" />
                                <button type="button" data-action="increment" className="hover-effect bg-gray-400 text-white active:bg-gray-600 hover:bg-black h-full w-20 rounded cursor-pointer focus:outline-none">
                                    <span className="m-auto text-lg font-thin">+</span>
                                </button>
                            </div>
                        </td>
                        <td className="text-xs p-2 text-center">12.99</td>
                        <td>
                            <svg className="h-3 cursor-pointer active:text-white transform hover:scale-150 hover:text-red-600 hover-effect" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </td>
                    </tr>
                </tbody>
            </table>
            <table className="text-xs border-b border-black">
                <tbody>
                    <tr>
                        <td className="p-2">Subtotal</td>
                        <td className="text-right p-2">50.55</td>
                    </tr>
                    <tr>
                        <td className="p-2 flex flex-row">
                            Delivery Fee
                        <div className="hover-effect tooltip mx-2 w-4 h-4 bg-gray-300 hover:bg-black hover:text-white cursor-pointer text-center rounded-full">
                                <span className='tooltip-text bg-blue-200 -mt-1 lg:-mt-8 rounded'>Free delivery on orders above $ 50</span>
                                !
                        </div>
                        </td>
                        <td className="text-right p-2">Free</td>
                    </tr>
                    <tr>
                        <td className="p-2">Tax</td>
                        <td className="text-right p-2">5.05</td>
                    </tr>
                </tbody>
            </table>
            <table className="text-xs">
                <tbody>
                    <tr>
                        <td className="p-2">Total</td>
                        <td className="text-right p-2">$ 55.60</td>
                    </tr>
                </tbody>
            </table>
            <button type="button" onClick={handleCheckout} className="justify-self-end text-sm bg-yellow-300 rounded-lg py-1 hover-effect hover:bg-yellow-400 transform hover:scale-95 focus:outline-none">
                Checkout
            </button>
        </div>
    )
}

export default Cart;


// {/* <div className="flex flex-col bg-yellow-300 shadow-xl">
//     <div>
//         Your Cart (3 items)
//             </div>
//     <table className="table-auto">
//         <thead>
//             <tr>
//                 <th>Item</th>
//                 <th>Qty</th>
//                 <th>Price</th>
//             </tr>
//         </thead>
//         <tbody>
//             <tr>
//                 <td>Cheese Pizza</td>
//                 <td>1</td>
//                 <td>12.99</td>
//             </tr>
//             <tr className="bg-blue-200">
//                 <td>Tuna Subs</td>
//                 <td>2</td>
//                 <td>20.50</td>
//             </tr>
//         </tbody>
//     </table>
// </div> */}