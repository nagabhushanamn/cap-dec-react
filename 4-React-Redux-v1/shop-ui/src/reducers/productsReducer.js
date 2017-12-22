

import { LOAD_PRODUCTS, ADD_PRODUCT } from '../constants';

export function productsReducer(state = [], action) {
    switch (action.type) {
        case ADD_PRODUCT:
            return [...state, action.product]
        case LOAD_PRODUCTS:
            return [...state, ...action.products]
        default:
            return state;
    }

}