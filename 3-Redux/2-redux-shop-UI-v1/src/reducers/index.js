
import { combineReducers } from 'redux';
import { reviewsReducer } from './reviewsReducer';

let rootReducer = combineReducers({
    reviews: reviewsReducer
});

export {rootReducer}