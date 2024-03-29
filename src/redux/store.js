import {applyMiddleware, combineReducers, createStore} from "redux";
import authReducer from "./reducers/auth-reducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from 'redux-form'

let reducers = combineReducers({
  auth: authReducer,
  form: formReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;
