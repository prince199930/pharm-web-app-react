import React, { useState, useEffect } from 'react'
import Nav from "../navbar/Nav"
import { useSelector, useDispatch } from "react-redux"
import { ADDMedicine, DELETEMedicine, EDITMedicine } from "../../Store/Action"
import AddNewModals from "../modals/AddNewModals"
import EditNewModals from '../modals/EditModal'
import SalesExecutiveModal from '../modals/SalesExecutiveModal'
import "./SalesManager.css"
import CreateOrderModals from '../modals/CreateOrderModal'
import { DELETEOrder, DELETEExecutive } from '../../Store/Action'



function SalesManager() {
    const [executiveid, setExecutiveId] = useState("")
    const [executiveModal, setExecutiveModal] = useState("")
    const [currentKey, setCurrentKey] = useState("1")
    const [addModal, setAddModal] = useState(false)
    const [editModal, setEditModal] = useState(false)
    const [medicineName, setMedicineName] = useState("")
    const [manufactureName, setManufactureName] = useState("")
    const [price, setPrice] = useState("")
    const [stockAvailability, setStockAvailability] = useState("")
    const [discount, setDiscount] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [DOB, setDOB] = useState("")
    const [gender, setGender] = useState("")
    const [experienceYear, setExperienceYear] = useState("")
    const [customerName, setCustomerName] = useState("")
    const [contactNumber, setContactNumber] = useState("")
    const [selectProductWithQuantity, setSelectProductWithQuantity] = useState("")
    const [createOrderModal, setCreateOrderModal] = useState(false)
    const [orderCurrentKey, setOrderCurrentKey] = useState(null)
    const [executiveCurrentKey, setExecutiveCurrentKey] = useState(null)
    
    const addOrder = () => {
        setCreateOrderModal(true)
    }
    const orderReset = () => {
        setCustomerName("")
        setContactNumber("")
        setSelectProductWithQuantity("")
    }
    const dispatch = useDispatch()
    const state = useSelector(state => state.medicine)
    const order = useSelector(state => state.order)
    console.log(state)

    const executive = useSelector(state => state.executive)
    console.log(executive)

    const reset = () => {
        setMedicineName("")
        setPrice("")
        setManufactureName("")
        setStockAvailability("")
        setDiscount("")
    }

    const executiveReset = () => {
        setFirstName("")
        setLastName("")
        setDOB("")
        setGender("")
    }
    const Edit = (key) => {
        setCurrentKey(key)
        setEditModal(true)
    }

    // useEffect(() => {
    //     setCurrentKey(currentKey)
    // }, [editModal])
    const Delete = (key) => {
        console.log(key)
        dispatch(DELETEMedicine(key))
    }
    const AddNew = () => {
        setAddModal(true)
    }
    const addExecutive = () => {
        setExecutiveModal(true)
    }

    const editOrder=(key)=>{
        setOrderCurrentKey(key)
        setCreateOrderModal(true)

    }

    const deleteOrder=(key)=>{
        dispatch(DELETEOrder(key))

    }

    const editExecutive=(key)=>{
        setExecutiveCurrentKey(key)
        setExecutiveModal(true)

    }
    const deleteExecutive=(key)=>{
        dispatch(DELETEExecutive(key))
    }
    return (
        <>
            <Nav />
            <AddNewModals
                stockAvailability={stockAvailability}
                setStockAvailability={setStockAvailability}
                discount={discount}
                setDiscount={setDiscount}
                reset={reset}
                medicineName={medicineName}
                setMedicineName={setMedicineName}
                price={price}
                setPrice={setPrice}
                manufactureName={manufactureName}
                setManufactureName={setManufactureName}
                addModal={addModal}
                setAddModal={setAddModal}

            />

            <CreateOrderModals
                customerName={customerName}
                setCustomerName={setCustomerName}
                contactNumber={contactNumber}
                setContactNumber={setContactNumber}
                selectProductWithQuantity={selectProductWithQuantity}
                setSelectProductWithQuantity={setSelectProductWithQuantity}
                createOrderModal={createOrderModal}
                setCreateOrderModal={setCreateOrderModal}
                orderReset={orderReset}
                orderCurrentKey={orderCurrentKey}
                
            />

            <EditNewModals
                editModal={editModal}
                setEditModal={setEditModal}
                stockAvailability={stockAvailability}
                setStockAvailability={setStockAvailability}
                discount={discount}
                setDiscount={setDiscount}
                reset={reset}
                medicineName={medicineName}
                setMedicineName={setMedicineName}
                price={price}
                setPrice={setPrice}
                currentKey={currentKey}
                manufactureName={manufactureName}
                setManufactureName={setManufactureName}
                

            />

            <SalesExecutiveModal
                firstName={firstName}
                setFirstName={setFirstName}
                lastName={lastName}
                setLastName={setLastName}
                DOB={DOB}
                setDOB={setDOB}
                gender={gender}
                setGender={setGender}
                experienceYear={experienceYear}
                setExperienceYear={setExperienceYear}
                executiveModal={executiveModal}
                setExecutiveModal={setExecutiveModal}
                executiveReset={executiveReset}
                executiveid={executiveid}
                setExecutiveId={setExecutiveId}
                executiveCurrentKey={executiveCurrentKey}
            />
            <h1 className="store-page">STORE MANAGER</h1>
            <div className="products">
                <h1 className="medicine">MEDICINE DETAILS</h1>
                {
                    Object.keys(state).map((medkey) => <><div key={state[medkey].Name} className="product-details"><div>Medicine Name : {state[medkey].Name}</div>
                        <div>Manufacture Name : {state[medkey].Manufacturer_Name}</div>
                        <div>Price : {state[medkey].Price}</div>
                        <div>Stock Avalaibility : {state[medkey].Stock}</div>
                        <div>Discount : {state[medkey].Discount}</div>
                        <div className="Buttons">
                        <button className="edit-button" onClick={() => Edit(medkey)}>EDIT</button><button key={state[medkey].Name} className="delete-button" onClick={() => Delete(medkey)}>DELETE</button></div></div></>)
                }
                <button className="add-new-button" onClick={AddNew}>ADD NEW</button>
            </div>

            

            <div className="executive">
                <h1>EXECUTIVE DETAILS</h1>
                {
                    Object.keys(executive).map((exekey) => <><div key={executive[exekey].First_Name} className="executive-details" ><div>First Name : {executive[exekey].First_Name}</div>
                        <div>Last Name : {executive[exekey].Last_Name}</div>
                        <div>Date Of Birth : {executive[exekey].Date_of_birth}</div>
                        <div>Gender : {executive[exekey].Gender}</div>
                        <div>Experience of Years : {executive[exekey].Experience_Years}</div>
                        <div className="executive-button">
                        <button className="edit-btn" onClick={()=>editExecutive(exekey)}>Edit</button>
                        <button key={executive[exekey].First_Name} className="delete-btn" onClick={()=>deleteExecutive(exekey)}>Delete</button></div></div>
                    </>)

                }
                <button className="add-executive-btn" onClick={addExecutive}>Executive Add</button>
            </div>

            <div className="order">
                <h1 className="order-detail">ORDER DETAILS</h1>
                {  
                    Object.keys(order).map((orderkey) => <><div key={order[orderkey].Name} className="order-info"><div>Name : {order[orderkey].Name}</div>
                        <div>Contact Number : {order[orderkey].ContactNumber}</div>
                        <div>Select Product With Qunatity : {order[orderkey].selectProductWithQuantity}</div>
                        <div className="order-btn">
                        <button  className="edit-order-btn" onClick={()=>editOrder(orderkey)}>Edit</button>
                        <button key={order[orderkey].Name} className="delete-order-btn" onClick={()=>deleteOrder(orderkey)}>Delete</button></div></div>
                        </>)
                }

                <button className="add-order-btn" onClick={addOrder}>Add Order</button>
                </div>
        </>
    )
}

export default SalesManager
