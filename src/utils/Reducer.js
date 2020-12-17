const ACTIONS = {
    ADD_ITEM: "addItem",
    REMOVE_ITEM: "removeItem",
    INCREMENT_ITEM: "incrementItem",
    DECREMENT_ITEM: "decrementItem",
    SET_DELIVERY: "setDelivery",
    SET_PRICING: "setPricingDetails"
}

// get next Id (source: redux docs)
function nextId(arr) {
    // eslint-disable-next-line no-shadow
    const maxID = arr.reduce((maxID, x) => Math.max(x.id, maxID), -1)
    return maxID + 1
}

const nonNegativeQty = qty => (qty <= 0 ? 1 : qty);

const Reducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.ADD_ITEM:
            return {
                ...state,
                items: [
                    ...state.items, { ...action.payload, id: nextId(state.items) }
                ]
            };
        case ACTIONS.INCREMENT_ITEM:
            return {
                ...state,
                items: state.items.map(item => (item.id === action.payload.id) ?
                    { ...item, qty: item.qty + 1, totalPrice: item.pricePerQty * (item.qty + 1) } : item)
            }
        case ACTIONS.DECREMENT_ITEM:
            return {
                ...state,
                items: state.items.map(item => (item.id === action.payload.id) ?
                    { ...item, qty: nonNegativeQty(item.qty - 1), totalPrice: item.pricePerQty * nonNegativeQty(item.qty - 1) } : item)
            }
        case ACTIONS.REMOVE_ITEM:
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload.id)
            }
        case ACTIONS.SET_DELIVERY:
            return {
                ...state,
                delivery: action.payload.delivery
            }
        case ACTIONS.SET_PRICING:
            return {
                ...state,
                amount: action.payload.amount
            }
        default:
            return state;
    }
}

export default Reducer;