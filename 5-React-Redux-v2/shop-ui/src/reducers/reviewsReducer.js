

import { SUBMIT_NEW_REVIEW, LOAD_REVIEWS } from '../constants';

export function reviewsReducer(state = [], action) {
    switch (action.type) {
        case LOAD_REVIEWS:
            return [...state, ...action.reviews]
        case SUBMIT_NEW_REVIEW:
            return [...state, action.review]
        default:
            return state;
    }

}