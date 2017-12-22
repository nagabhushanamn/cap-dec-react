


import { store } from './store';
import * as actions from './actions';
import { submitNewReviewAsync } from './actions';
console.log('-index.js-');


document.getElementById('newReview')
    .addEventListener('click', function () {

        let newReview = { stars: 4, author: 'someone@gmail.com', body: 'bla bla', productId: 1 }

        //store.dispatch(actions.submitNewReview(newReview));  // sync action

        store.dispatch(actions.submitNewReviewAsync(newReview));  // async action

        //submitNewReviewAsync(newReview);  // manual

    });


//-----------------------------------------------------

store.subscribe(function () {
    let state = store.getState();
    console.dir(state);
});