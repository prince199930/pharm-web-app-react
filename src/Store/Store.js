import { createStore, combineReducers } from "redux";
import { ExecutiveReducer } from "./ExecutiveReducer";
import {MedicineReducer} from "./MedicineReducer"
import {OrderReducer} from "./OrderReducer"


const final=combineReducers({

    medicine:MedicineReducer,
    executive:ExecutiveReducer,
    order:OrderReducer
})

const Store =createStore(final);

export default Store