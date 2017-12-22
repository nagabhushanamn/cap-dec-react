
import { BUY_PRODUCT, SUBMIT_NEW_REVIEW, LOAD_PRODUCTS, LOAD_REVIEWS } from '../constants'
import $ from 'jquery';
// import { store } from '../store';

export function buy(product) {
    return { type: BUY_PRODUCT, product }
}

export function submitNewReview(review) {
    return { type: SUBMIT_NEW_REVIEW, review }
}


export function submitNewReviewAsync(review) {
    const apiUrl = `http://localhost:8181/api/products/${review.productId}/reviews`
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


export function loadProductsAsync() {
    const apiUrl = "http://localhost:8181/api/products"
    return function (dispatch) {
        $.ajax(apiUrl, {
            method: 'GET',
            success: function (products) {
                dispatch({ type: LOAD_PRODUCTS, products });
            }
        });
    }
}

export function loadReviewsAsync(productId) {
    const apiUrl = `http://localhost:8181/api/products/${productId}/reviews`
    return function (dispatch) {
        $.ajax(apiUrl, {
            method: 'GET',
            success: function (reviews) {
                dispatch({ type: LOAD_REVIEWS, reviews });
            }
        });
    }
}

