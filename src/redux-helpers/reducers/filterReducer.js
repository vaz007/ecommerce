import {
    SELECTED_CATEGORY,
    PRICE_RANGE
} from '../actions/types';

const initialState = {
    selectedCategory: [],
    priceRange : [],
    totalPrice: 0
}

const filterReducer = (state = initialState, action) => {
    switch (action.type) {

        case SELECTED_CATEGORY:
            return {
                ...state,
                selectedCategory: action.payload
            }
        case PRICE_RANGE : 
            return {
                ...state,
                priceRange: action.payload
            }

        default:
            return state
    }
}
export default filterReducer;