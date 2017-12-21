
import { combineReducers, createStore } from 'redux';
// import 'bootstrap/dist/css/bootstrap.css';

//-------------------------------------------------------------------
// action(s)
const INCREMENT = "increment";
const DECREMENT = "decrement";
const ADD_TODO = "add_todo";

//-------------------------------------------------------------------
// action creator(s)
function increment(value) {
    return { type: INCREMENT, value };
}

function decrement(value) {
    return { type: DECREMENT, value };
}

function addTodo(title) {
    return { type: ADD_TODO, title };
}

//-----------------------------------------------------------------
// reducer(s)

function counterReducer(state = { count: 0 }, action) {
    console.log('counterReducer');
    console.dir(state);
    switch (action.type) {
        case INCREMENT:
            return Object.assign({}, state, { count: state.count + action.value });
        case ADD_TODO:
            return Object.assign({}, state, { count: state.count + 1 });
        case DECREMENT:
            return Object.assign({}, state, { count: state.count - action.value });
        default:
            return state;
    }
}

function todosReducer(state = [], action) {
    console.log('todosReducer');
    switch (action.type) {
        case ADD_TODO:
            return [...state, { title: action.title, completed: false }];
        default:
            return state;
    }
}

//-----------------------------------------------------------------
// create root-reducer

let rootReducer = combineReducers({
    counter: counterReducer,
    todos: todosReducer
});

//-----------------------------------------------------------------
// store
let preLoadedState = {
    counter: {
        count: 100
    },
    todos: [
        { title: 'Learn JS', completed: true },
        { title: 'Learn React', completed: true },
        { title: 'Learn Redux', completed: false }
    ]
};
let store = createStore(rootReducer, preLoadedState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

//-----------------------------------------------------------------


// View 
let countDisplay = document.getElementById('countDisplay');
store.subscribe(function () {
    let currentState = store.getState();
    //console.log(currentState);
    countDisplay.innerText = currentState.counter.count;
});

store.dispatch(increment(10));
store.dispatch(increment(100));
store.dispatch(decrement(100));
store.dispatch(decrement(10));

let incBtn = document.getElementById('plus');
let decBtn = document.getElementById('minus');
let addTodoBtn = document.getElementById('addTodo');

incBtn.addEventListener('click', function () {
    store.dispatch(increment(1));
})

decBtn.addEventListener('click', function () {
    store.dispatch(decrement(1));
})


addTodoBtn.addEventListener('click', function () {
    store.dispatch(addTodo('I need to go home , leave me'));
})


//-----------------------------------------------------------------

