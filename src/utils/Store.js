import React, { createContext, useReducer, useEffect } from "react";
import Reducer from "./Reducer";

const initialCart = {
    delivery: false,
    items: [],
    amount: {}
}

const Store = ({ children }) => {
    const [state, dispatch] = useReducer(Reducer, initialCart);
    useEffect(() => {
        console.log(state);
    }, [state])
    return (
        <CartContext.Provider value={[state, dispatch]}>
            {children}
        </CartContext.Provider>
    )
}

export const CartContext = createContext(initialCart);
export default Store;