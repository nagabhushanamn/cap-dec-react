
import { createStore, applyMiddleware, compose } from 'redux';
import { rootReducer } from '../reducers'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';

let preloadedState = {
    reviews: [
        { stars: 5, author: 'nag@gmail.com', body: 'good one', productId: 1 }
    ]
};

//let store = createStore(rootReducer, preloadedState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
//let store = createStore(rootReducer, applyMiddleware(ReduxThunk));

let middleware = [thunk];
const composeEnhancers = composeWithDevTools({
    // Specify name here, actionsBlacklist, actionsCreators and other options if needed
});

const store = createStore(rootReducer, preloadedState, composeEnhancers(
    applyMiddleware(...middleware),
    // other store enhancers if any
));

export { store };