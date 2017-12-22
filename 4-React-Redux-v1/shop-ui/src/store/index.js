
import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from '../reducers'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
import { loadProductsAsync } from '../actions/index'

let preloadedState = {
    reviews: [],
    products: []
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

store.dispatch(loadProductsAsync());


export { store };