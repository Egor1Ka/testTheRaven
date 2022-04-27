import { combineReducers, createStore } from "redux";
import cartReduser from "./cartReduser";
import productReduser from './productReduser'
import { reducer as formReducer, reducer } from 'redux-form'
const rootReduser = combineReducers({
    cartReduser,
    productReduser,
    form:formReducer
})

export const store = createStore(rootReduser)