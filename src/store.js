import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import { productListReducer, productDetailsReducer, productSaveReducer, productDeleteReducer } from "./reducers/productReducers";
import thunk from "redux-thunk";


const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    productSave: productSaveReducer,
    productDelete: productDeleteReducer
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)));
//Thunk is a middleware that allows us async operations inside the store
export default store;