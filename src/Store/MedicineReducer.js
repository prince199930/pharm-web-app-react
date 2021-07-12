import { Switch } from "react-router-dom"

const initial = JSON.parse(localStorage.getItem("medicine")) || {"1":{Name:"Aleride-D", Manufacturer_Name:"pfizer", Price:"99", Stock: "1left", Discount:"no_discount"}, "2":{Name:"Paracetamol", Manufacturer_Name:"apollo", Price:"15", Stock: "20left", Discount:"20%"}}
export const MedicineReducer = (state=initial, action)=>{
    let medicinechangeData;
    switch(action.type){
        
        case "ADD":
            medicinechangeData = {...state, ...action.payload}
            localStorage.setItem("medicine", JSON.stringify(medicinechangeData))
            return medicinechangeData
        case "EDIT":
            state[action.id]=action.payload
            localStorage.setItem("medicine", JSON.stringify(state))
            return state
        case "DELETE":
            medicinechangeData = Object.assign({}, state);
            delete medicinechangeData[action.id]
            localStorage.setItem("medicine", JSON.stringify(medicinechangeData))
            return medicinechangeData
        default:
            return state
    }
}