import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';
// import { createStoreHook } from "react-redux";

import { composeWithDevTools } from 'redux-devtools-extension';
const initialState = {};
const middleware = [thunk];
const applied = composeWithDevTools(applyMiddleware(...middleware)); //error!
const store = createStore(rootReducer, initialState, applied);

export default store;
