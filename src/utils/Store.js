import React, { createContext, useReducer } from "react";
import Reducer from "./Reducer";

/* Function:
    - This context along with Reducer.js handle all things related to ordering
 */

const initialCart = {
    delivery: false,
    items: [],
    amount: {},
    payment: {}
}

const Store = ({ children }) => {
    const [state, dispatch] = useReducer(Reducer, initialCart);

    return (
        <CartContext.Provider value={[state, dispatch]}>
            {children}
        </CartContext.Provider>
    )
}

export const CartContext = createContext(initialCart);
export default Store;