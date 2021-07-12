import React, {useState} from 'react'
import CreateOrderModals from '../modals/CreateOrderModal'
import Nav from "../navbar/Nav"
import { useSelector, useDispatch } from "react-redux"
import "./SalesExecutive.css"

function SalesExecutive() {
    const [customerName, setCustomerName] = useState("")
    const [contactNumber, setContactNumber] = useState("")
    const [selectProductWithQuantity, setSelectProductWithQuantity] = useState("")
    const [createOrderModal, setCreateOrderModal] = useState(false)
    const [orderCurrentKey, setOrderCurrentKey] = useState(null)
    const order = useSelector(state=>state.order)
    const addOrder = ()=>{
        setCreateOrderModal(true)
    }
    const orderReset = ()=>{
        setCustomerName("")
        setContactNumber("")
        setSelectProductWithQuantity("")
    }
    return (
        <>
        <Nav/>
        <CreateOrderModals
        customerName = {customerName}
        setCustomerName = {setCustomerName}
        contactNumber={contactNumber}
        setContactNumber={setContactNumber}
        selectProductWithQuantity={selectProductWithQuantity}
        setSelectProductWithQuantity={setSelectProductWithQuantity}
        createOrderModal = {createOrderModal}
        setCreateOrderModal = {setCreateOrderModal}
        orderReset={orderReset}
        orderCurrentKey={orderCurrentKey}
        />
        <h1 class="sales-page">SALES EXECUTIVE</h1>
        <div class="sales-executive">
            {
                Object.keys(order).map((key)=><><div class="Order-executive"><div>Name : {order[key].Name}</div>
                <div>Contact Number : {order[key].ContactNumber}</div>
                <div>Select Product With Qunatity : {order[key].selectProductWithQuantity}</div></div></>)
            }
            <button className="executive-add-btn" onClick={addOrder}>Add Order</button>
        </div>

        </>
    )
}

export default SalesExecutive
