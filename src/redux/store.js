import {combineReducers, createStore} from "redux";
import authReducer from "./reducers/auth-reducer";
import { reducer as formReducer } from 'redux-form';


let reducers = combineReducers({
  auth: authReducer,
  form: formReducer
});

let store = createStore(reducers);
window.store = store;

export default store;
