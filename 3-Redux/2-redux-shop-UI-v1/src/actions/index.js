
import { BUY_PRODUCT, SUBMIT_NEW_REVIEW } from '../constants'
import $ from 'jquery';
import { store } from '../store';

export function buy(product) {
    return { type: BUY_PRODUCT, product }
}

export function submitNewReview(review) {
    return { type: SUBMIT_NEW_REVIEW, review }
}


export function submitNewReviewAsync(review) {
    const apiUrl = "http://localhost:3000/api/products/5a3cb27a1571a304b51edb71/reviews"
    return function (dispatch) {
        // dispatch action indicating, review saving
        
        $.ajax(apiUrl, {
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(review),
            success: function (resp) {
                // dispatch action indicating, review  saved...
                dispatch(submitNewReview(resp))
                // store.dispatch(submitNewReview(resp));
            },
            error: function (error) {
                // dispatch action indicating, review not saved...
            }
        });
    }
}
