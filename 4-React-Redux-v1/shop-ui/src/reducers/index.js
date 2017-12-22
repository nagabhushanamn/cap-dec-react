
import { combineReducers } from 'redux';
import { reviewsReducer } from './reviewsReducer';
import { productsReducer } from './productsReducer';

let rootReducer = combineReducers({
    reviews: reviewsReducer,
    products: productsReducer
});

export { rootReducer }