import React, { useState } from "react";
import Cart from "./Cart";
import PizzaMenu from "./PizzaMenu";
import PaymentModal from "./PaymentModal";

import Store from "../utils/Store";

const Ordering = () => {

    const [showModal, setModal] = useState(false);

    const handleModal = () => {
        setModal(!showModal);
    }

    return (
        <Store>
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
        </Store>
    )
}

export default Ordering;
