import {
    SELECTED_CATEGORY,
    PRICE_RANGE
} from './types';



// Cart Actions 

export const selectedCategory = categories => (dispatch) => {
    let trueValues = [];
    categories.filter(item => item.checked ? trueValues.push(item) : '');
    dispatch({
        type: SELECTED_CATEGORY,
        payload: trueValues
    });
}
