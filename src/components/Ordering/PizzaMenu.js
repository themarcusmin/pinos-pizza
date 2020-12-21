import React, { useState, useEffect, useContext } from 'react'
import { CartContext } from "../../utils/Store";
import { useMenu } from "../../utils/MenuContext";

/* Control:
    - Price are only shown if customiseStyle and customiseSize have state
    - Reclicking Toppings switches back to inactive state 
    - Toppings are only available if type is not Cheese
    - Choosing toppings must be within the toppingAmount
    - Add Button is clickable only after pizza is incomplete
    - Add Button triggers cart to receive items and cleans up previous state
*/

/* Function:
    - Renders pizza JSON
    - Dispatch food Object to CartContext
    - Clear state of pizzaData on clicking "Add" button
*/

const initialPizza = {
    customiseStyle: "",
    customiseSize: "",
    customiseToppingAmount: "",
    chooseToppings: [],
    toppingAmount: null,
    price: null,
}

const PizzaMenu = () => {
    // Pizza Customisation for each order
    const [pizzaData, setPizzaData] = useState(initialPizza);
    const { customiseStyle, customiseSize, customiseToppingAmount, chooseToppings, toppingAmount, price } = pizzaData;
    // CartContext from Store.js as Central State
    const [, dispatch] = useContext(CartContext);
    // Destructure Menu JSON from MenuContext
    const [menu,] = useMenu();
    const { PizzaStyle, PizzaSize, PizzaTopping, Toppings, ToppingAmount, Pizza } = menu;

    const cartReady = ((customiseStyle && customiseSize && customiseToppingAmount && chooseToppings.length === toppingAmount) || (customiseStyle && customiseSize && customiseToppingAmount === "Cheese"));

    // On refresh, redirect to dashboard as menu is null for PizzaMenu component
    useEffect(() => {
        window.onbeforeunload = () => {
            window.setTimeout(() => {
                window.location = "/dashboard"
            })
            window.onbeforeunload = null;
        }
    }, [])

    // Choosing pizza topping amount determines the amount of clickable toppings
    const handlePizzaToppingAmtAndPrice = (e) => {
        e.preventDefault();
        // Updating price and toppingAmount are restricted unless customiseStyle and customiseSize
        if (customiseStyle && customiseSize) {
            const getPrice = Pizza[customiseStyle][e.target.value][customiseSize];
            setPizzaData({ ...pizzaData, price: getPrice, customiseToppingAmount: e.target.value, chooseToppings: [], toppingAmount: ToppingAmount[e.target.value] });
        }
    }

    // Select Toppings within the amount of Toppings
    // Remove first element if over the limit
    const handleToppings = (e) => {
        e.preventDefault();
        // Remove if already selected
        if (chooseToppings.includes(e.target.value)) {
            const newToppings = chooseToppings.filter(t => t !== e.target.value);
            setPizzaData({ ...pizzaData, chooseToppings: newToppings })
            return;
        }
        if (chooseToppings.length > toppingAmount - 1) {
            chooseToppings.shift();
        }
        setPizzaData({ ...pizzaData, chooseToppings: [...chooseToppings, e.target.value] });
    }

    // Add Pizza to Cart: handle payload, clear state
    const handleAddToCart = (e) => {
        e.preventDefault();
        const payload = {
            "name": `${customiseSize} ${customiseStyle} Pizza with ${chooseToppings.length ? chooseToppings : "Cheese"}`,
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
                        Object.entries(PizzaStyle).map(([k, pizza]) => (
                            <button onClick={() => setPizzaData({ ...pizzaData, customiseStyle: pizza })} type="button" key={k} value={pizza} className={customiseStyle === pizza ? "menu-button-active" : "menu-button-inactive"}>{pizza}</button>
                        ))
                    }
                </div>
                <div className="px-4 font-roboto font-semibold">
                    Choose your size:
                </div>
                <div className="flex justify-center flex-wrap mb-2">
                    {
                        Object.entries(PizzaSize).map(([k, val]) => (
                            <button onClick={() => setPizzaData({ ...pizzaData, customiseSize: val })} type="button" key={k} value={val} className={customiseSize === val ? "menu-button-active" : "menu-button-inactive"}>{val}</button>
                        ))
                    }
                </div>
                <div className="px-4 font-roboto font-semibold">
                    Choose your type:
                </div>
                <div className="flex justify-center flex-wrap mb-2">
                    {
                        Object.entries(PizzaTopping).map(([k, val]) => (
                            <button onClick={handlePizzaToppingAmtAndPrice} key={k} value={val} type="button" className={customiseToppingAmount === val ? "menu-button-active" : "menu-button-inactive"}>
                                {val}
                                <br />
                                {(customiseStyle && customiseSize) ? (<span className="text-xs">{Pizza[customiseStyle][val][customiseSize].toFixed(2)}</span>) : null}
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
                            Object.entries(Toppings).map(([k, topping]) => (
                                <button onClick={handleToppings} type="button" key={k} value={topping} className={(chooseToppings.includes(topping)) ? "menu-button-active" : "menu-button-inactive"}>
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

export default PizzaMenu;