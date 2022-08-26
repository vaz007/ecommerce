import {
    ADD_ITEM,
    DELETE_ITEM,
    UPDATE_PRICE,
    DECREMENT_QTY
} from '../actions/types';

const initialState = {
    cartItems: [],
    totalPrice: 0
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
     
        case ADD_ITEM:
            const isAlreadyAdded = state.cartItems.find(
                product => product.id === action.payload.id)
            if (!isAlreadyAdded) action.payload.qty = 1

            return {
                ...state,
                cartItems: !isAlreadyAdded
                    ? [action.payload, ...state.cartItems]
                    : state.cartItems.map(
                        item =>
                            item.id === action.payload.id
                                ? { ...item, qty: ++item.qty }
                                : item
                    )
            }

        // Delete Item 

        case DELETE_ITEM:
            console.log(state.cartItems)
            return {
                ...state,
                cartItems: state.cartItems.filter(item => item.id !== action.payload)
            }

        // Decrement Qty
        case DECREMENT_QTY:
            console.log("ACTION PAYLOAD ", action.payload)
            const decrement = state.cartItems.find(
                product => product.id === action.payload.id)
            if (decrement) action.payload.qty = -1

            console.log("DECREMENT ", decrement)
            return {
                ...state,
                cartItems:  state.cartItems.map(
                    item => item.id === action.payload.id ? {...item, qty: --item.qty} : item
                ) 
                // cartItems: !decrement
                // ? [action.payload, ...state.cartItems]
                // : state.cartItems.map(
                //     item =>
                //         item.id === action.payload.id
                //             ? { ...item, qty: --item.qty }
                //             : item
                // )
            }

        // Update the final Price

        case UPDATE_PRICE:
            return {
                ...state,
                totalPrice: state.cartItems
                    .reduce((acc, val) => acc + val.qty * val.price, 0)
                    .toFixed(2)
            }

        default:
            return state
    }
}
export default cartReducer;