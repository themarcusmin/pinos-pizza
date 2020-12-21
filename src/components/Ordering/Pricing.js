import React from "react";
import CalculatePricing from "./CalculatePricing";

/* Function:
    - Renders prices based on CalculatePricing
 */

const Pricing = ({ items, delivery }) => {

    const amount = CalculatePricing(delivery, items);

    return (
        <table className="text-xs">
            <tbody>
                <tr>
                    <td className="p-2">Subtotal</td>
                    <td className="text-right p-2">
                        <span className="mx-4">$</span>
                        {amount.subTotal}
                    </td>
                </tr>
                {delivery ? (
                    <tr>
                        <td className="p-2 flex flex-row">
                            Delivery Fee
                        <div className="hover-effect tooltip mx-2 w-4 h-4 bg-gray-300 hover:bg-black hover:text-white cursor-pointer text-center rounded-full">
                                <span className='tooltip-text bg-blue-200 -mt-1 lg:-mt-8 rounded'>Free delivery on orders above $ 50</span>
                                !
                        </div>
                        </td>
                        <td className="text-right p-2">
                            <span className="mx-4">$</span>
                            {amount.deliveryFee || "Free"}
                        </td>
                    </tr>
                ) : null}
                <tr>
                    <td className="p-2">Sales Tax 8%</td>
                    <td className="text-right p-2">
                        <span className="mx-4">$</span>
                        {amount.taxTotal}
                    </td>
                </tr>
                <tr className="border-t border-black">
                    <td className="p-2 text-bold">Total</td>
                    <td className="text-right p-2">
                        <span className="mx-4">$</span>
                        {amount.totalDue}
                    </td>
                </tr>
            </tbody>
        </table>
    )
}

export default Pricing;