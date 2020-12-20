import React, { createContext, useReducer, useEffect } from "react";
import Reducer from "./Reducer";

const initialCart = {
    delivery: false,
    items: [],
    amount: {},
    payment: {}
}

const Store = ({ children }) => {
    const [state, dispatch] = useReducer(Reducer, initialCart);

    useEffect(() => {
        console.log("state changed:", state);
    }, [state])

    return (
        <CartContext.Provider value={[state, dispatch]}>
            {children}
        </CartContext.Provider>
    )
}

export const CartContext = createContext(initialCart);
export default Store;