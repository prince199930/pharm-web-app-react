import { Switch } from "react-router-dom"

const initial = JSON.parse(localStorage.getItem("orders")) || {"1":{Name:"Sahil", ContactNumber:"1234", selectProductWithQuantity:"99"}, "2":{Name:"Prince", ContactNumber:"5678", selectProductWithQuantity:"15"}}
export const OrderReducer = (state=initial, action)=>{
    let orderchangeData;
    switch(action.type){
        
        case "ORDERADD":
            orderchangeData = {...state, ...action.orderpayload}
            localStorage.setItem("orders", JSON.stringify(orderchangeData))
            alert("add order")
            return orderchangeData
        case "ORDEREDIT":
            state[action.id]=action.orderpayload
            localStorage.setItem("orders", JSON.stringify(state))
            return state
        case "ORDERDELETE":
            orderchangeData = Object.assign({}, state);
            delete orderchangeData[action.id]
            localStorage.setItem("orders", JSON.stringify(orderchangeData))
            alert("delete ordered")
            return orderchangeData
        default:
            return state
    }
}