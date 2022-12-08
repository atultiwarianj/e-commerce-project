// import {combineReducers} from  "redux";
// import { cartReducer } from './reduser';

// const rootred = combineReducers({
//     cartReducer
// });
// export default rootred;
import handleCart from "./Handlecart";
import { combineReducers } from "redux";
const rootReducers =combineReducers({
    handleCart,
})

export default rootReducers;