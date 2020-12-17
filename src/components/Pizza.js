import React, { useState, useContext } from 'react'
import { CartContext } from "../utils/Store";

import data from "./testData.json";

/* Control:
    - Price are only shown if pizzaStyle and pizzaSize have state
    - Reclicking Toppings switches back to inactive state 
    - Toppings are only available if type is not Cheese
    - Choosing toppings must be within the toppingAmount
    - Add Button is clickable only after pizza is incomplete
    - Add Button triggers cart to receive items and cleans up previous state
*/

/* Function:
    - Dispatch food Object to CartContext
    - Empty pizzaData on clicking "Add" button
*/

const initialPizza = {
    pizzaStyle: "",
    pizzaSize: "",
    pizzaType: "",
    toppings: [],
    toppingAmount: null,
    price: null,
}

const Pizza = () => {
    // CartContext from Store.js as Central State
    const [, dispatch] = useContext(CartContext);

    const [pizzaData, setPizzaData] = useState(initialPizza);

    const { pizzaStyle, pizzaSize, pizzaType, toppings, toppingAmount, price } = pizzaData;

    const cartReady = ((pizzaStyle && pizzaSize && pizzaType && toppings.length === toppingAmount) || (pizzaStyle && pizzaSize && pizzaType === "Cheese"));

    // Choosing pizza type determines the amount of clickable toppings
    const handlePizzaTypeAndPrice = (e) => {
        // Updating price and toppingAmount are restricted unless pizzaStyle and pizzaSize 
        if (pizzaStyle && pizzaSize) {
            const getPrice = data.Pizza[pizzaStyle][e.target.value][pizzaSize];

            // Reset Toppings & update toppingAmount & update pizzaType
            switch (e.target.value) {
                case "Cheese":
                    setPizzaData({ ...pizzaData, price: getPrice, pizzaType: e.target.value, toppings: [], toppingAmount: 0 });
                    break;
                case "1 Topping":
                    setPizzaData({ ...pizzaData, price: getPrice, pizzaType: e.target.value, toppings: [], toppingAmount: 1 });
                    break;
                case "2 Toppings":
                    setPizzaData({ ...pizzaData, price: getPrice, pizzaType: e.target.value, toppings: [], toppingAmount: 2 });
                    break;
                case "3 Toppings":
                    setPizzaData({ ...pizzaData, price: getPrice, pizzaType: e.target.value, toppings: [], toppingAmount: 3 });
                    break;
                case "Special":
                    setPizzaData({ ...pizzaData, price: getPrice, pizzaType: e.target.value, toppings: [], toppingAmount: 5 });
                    break;
                default:
                    break;
            }
        }
    }

    // Select Toppings within the amount of Toppings
    // Remove first element if over the limit
    const handleToppings = (e) => {
        // Remove if already selected
        if (toppings.includes(e.target.value)) {
            const newToppings = toppings.filter(t => t !== e.target.value);
            setPizzaData({ ...pizzaData, toppings: newToppings })
            return;
        }
        if (toppings.length > toppingAmount - 1) {
            toppings.shift();
        }
        setPizzaData({ ...pizzaData, toppings: [...toppings, e.target.value] });
    }

    // Add Pizza to Cart: handle payload, clear state
    const handleAddToCart = () => {
        const payload = {
            "name": `${pizzaSize} ${pizzaStyle} Pizza with ${toppings.length ? toppings : "Cheese"}`,
            'pricePerQty': price,
            'qty': 1,
            'totalPrice': price
        };
        setPizzaData(initialPizza);
        dispatch({ type: 'addItem', payload });
    }

    return (
        <div className="select-none font-mono object-contain bg-white rounded-md w-full h-full lg:h-auto p-2 shadow-xl flex inline-flex flex-col justify-start space-y-2">
            <div className="text-2xl text-center">Pizza</div>
            <div className="flex flex-col">
                <div className="px-4 font-roboto font-semibold">
                    Choose your style:
                </div>
                <div className="flex justify-center flex-wrap mb-2">
                    {
                        Object.entries(data.PizzaStyle).map(([k, pizza]) => (
                            <button onClick={() => setPizzaData({ ...pizzaData, pizzaStyle: pizza })} type="button" key={k} value={pizza} className={pizzaStyle === pizza ? "menu-button-active" : "menu-button-inactive"}>{pizza}</button>
                        ))
                    }
                </div>
                <div className="px-4 font-roboto font-semibold">
                    Choose your size:
                </div>
                <div className="flex justify-center flex-wrap mb-2">
                    {
                        Object.entries(data.PizzaSize).map(([k, val]) => (
                            <button onClick={() => setPizzaData({ ...pizzaData, pizzaSize: val })} key={k} value={val} type="button" className={pizzaSize === val ? "menu-button-active" : "menu-button-inactive"}>{val}</button>
                        ))
                    }
                </div>
                <div className="px-4 font-roboto font-semibold">
                    Choose your type:
                </div>
                <div className="flex justify-center flex-wrap mb-2">
                    {
                        Object.entries(data.PizzaTopping).map(([k, val]) => (
                            <button onClick={handlePizzaTypeAndPrice} key={k} value={val} type="button" className={pizzaType === val ? "menu-button-active" : "menu-button-inactive"}>
                                {val}
                                <br />
                                {(pizzaStyle && pizzaSize) ? (<span className="text-xs">{data.Pizza[pizzaStyle][val][pizzaSize].toFixed(2)}</span>) : null}
                            </button>
                        ))
                    }
                </div>
                {/* Toggle toppings based on the amount of toppings */}
                <div className={(toppingAmount) ? "block" : "hidden"}>
                    <div className="px-4 font-roboto font-semibold">
                        Choose your toppings:
                    </div>
                    <div className="flex justify-center flex-wrap mb-2">
                        {
                            Object.entries(data.Toppings).map(([k, topping]) => (
                                <button onClick={handleToppings} type="button" key={k} value={topping} className={(toppings.includes(topping)) ? "menu-button-active" : "menu-button-inactive"}>
                                    {topping}
                                </button>
                            ))
                        }
                    </div>
                </div>
                <div className="text-right px-4 mb-2">
                    {
                        (cartReady) ? (<button onClick={handleAddToCart} type="button" className="hover-effect w-32 rounded-md border border-transparent shadow-sm px-8 py-2 bg-yellow-300 font-semibold font-medium transform hover:scale-95 hover:text-white hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:outline-none sm:ml-3 sm:w-auto sm:text-sm">Add</button>)
                            : (<button disabled type="button" className="disabled:opacity-50 w-32 rounded-md border border-transparent shadow-sm px-8 py-2 bg-yellow-300 font-semibold font-medium sm:ml-3 sm:w-auto sm:text-sm">Add</button>)
                    }
                </div>
            </div>
        </div>
    )
}

export default Pizza;