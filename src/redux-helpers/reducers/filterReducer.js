import {
    SELECTED_CATEGORY,
    PRICE_RANGE
} from '../actions/types';

const initialState = {
    selectedCategory: [],
    totalPrice: 0
}

const filterReducer = (state = initialState, action) => {
    switch (action.type) {

        case SELECTED_CATEGORY:
            return {
                ...state,
                selectedCategory: action.payload
            }

        default:
            return state
    }
}
export default filterReducer;