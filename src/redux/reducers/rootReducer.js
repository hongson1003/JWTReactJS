import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import appReducer from "./appReducer";
const rootReducer = combineReducers({
    appReducer,
    cartReducer,
})

export default rootReducer;