import React, { useState } from "react";
import Cart from "./Cart";
import Pizza from "./Pizza";
import PaymentModal from "./PaymentModal";

import Store from "../utils/Store";

const Ordering = () => {

    const [showModal, setModal] = useState(false);

    const handlePayment = () => {
        setModal(!showModal);
    }

    // const handleOrderReceived = (order) => {
    //     console.log(order);
    // }

    return (
        <Store>
            <div className="ordering-container">
                <div className="ordering-structure">
                    <div className="cart">
                        <Cart handleCheckout={handlePayment} />
                    </div>
                    <div className="food-menu">
                        <Pizza />
                    </div>
                </div>
                {showModal ? (
                    <PaymentModal handleCheckout={handlePayment} />
                ) : null}
            </div>
        </Store>
    )
}

export default Ordering;
