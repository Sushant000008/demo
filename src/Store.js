import { combineReducers,legacy_createStore } from "redux";
import cartReducer from "./redux/reducer/cartReducer";
import StudentReducer from './redux/reducer/StudentReducer'
const reducer=combineReducers({
    cart:cartReducer,
    student:StudentReducer
})
const store=legacy_createStore(reducer)

export default store
