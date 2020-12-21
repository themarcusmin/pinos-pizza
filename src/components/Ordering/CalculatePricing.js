/* Function:
    - Consumes state of items & delivery
    - Returns an Object of pricing data
 */

const DELIVERY_RATE = 5;
const SALES_TAX = 0.08;

const CalculatePricing = (delivery, items) => {
    const subTotal = items.length ? items.map(item => item.totalPrice).reduce((acc, cur) => acc + cur).toFixed(2) : "-";
    const deliveryFee = ((delivery && subTotal >= 50) || !delivery) ? 0 : DELIVERY_RATE.toFixed(2);
    const taxTotal = items.length ? (subTotal * SALES_TAX).toFixed(2) : "-";
    const totalDue = items.length ? (parseFloat(subTotal) + parseFloat(deliveryFee) + parseFloat(taxTotal)).toFixed(2) : "-";

    // Delivery
    if (delivery) {
        return { subTotal, deliveryFee, taxTotal, totalDue };
    }
    // Pickup
    return { subTotal, taxTotal, totalDue };
}

export default CalculatePricing;