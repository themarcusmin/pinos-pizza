import React, { useState } from "react";
import Cart from "./Cart";
import PizzaMenu from "./PizzaMenu";
import PaymentModal from "./PaymentModal";

const Ordering = () => {

    const [showModal, setModal] = useState(false);

    const handleModal = () => {
        setModal(!showModal);
    }

    return (
        <div className="ordering-container">
            <div className="ordering-structure">
                <div className="cart">
                    <Cart openModal={handleModal} />
                </div>
                <div className="food-menu">
                    <PizzaMenu />
                </div>
            </div>
            {showModal ? (
                <PaymentModal closeModal={handleModal} />
            ) : null}
        </div>
    )
}

export default Ordering;
