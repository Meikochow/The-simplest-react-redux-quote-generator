import { createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {};

const middleware = [thunk];
//
const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middleware)
);
//the store variable takes in 3 variables : 
// --rootReducer:
// --initialState:
// --any enhanchers which includes applyMiddleware to which we pass the array middleware
export default store;


















// 
// const initialState = {};


// const store = createStore(
//     rootReducer,
//     initialState,
//     compose(
//       applyMiddleware(...middleware),
//       window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//     )
// );


// export default store;

// //this fille comes as is 
// //we shouldn't touch it at all