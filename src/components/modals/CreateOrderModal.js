import React, {useEffect, useState} from 'react'
import {useSelector, useDispatch } from 'react-redux';
import {ADDOrder, CreateOrder,EDITOrder} from '../../Store/Action'
import './AddNewModal.css'

function CreateOrderModals(props) {

    const {
        customerName,
        setCustomerName,
        contactNumber,
        setContactNumber,
        selectProductWithQuantity,
        setSelectProductWithQuantity,
        createOrderModal,
        setCreateOrderModal,
        orderReset,
        orderCurrentKey,
    }=props;
    const dispatch=useDispatch()
    const state = useSelector(state=>state.order[orderCurrentKey])
    useEffect(()=>{
        setCustomerName(state?.Name);
        setContactNumber(state?.ContactNumber);
        setSelectProductWithQuantity(state?.selectProductWithQuantity);

    
    },[orderCurrentKey])
  
    
    const CreateOrder = () => {
        let id = JSON.parse(localStorage.getItem("Orderid")) || 5
        localStorage.setItem("Orderid", JSON.stringify(id+1))
        id+=1
        let Order = {}
        Order[id] = {Name:customerName, ContactNumber:contactNumber, selectProductWithQuantity:selectProductWithQuantity}
        dispatch(ADDOrder(Order))
        orderReset()
        setCreateOrderModal(false)
    }

    const editOrder = ()=>{
        let order = {}
        order= {Name:customerName, ContactNumber:contactNumber, selectProductWithQuantity:selectProductWithQuantity}
        dispatch(EDITOrder(orderCurrentKey,order))
        orderReset()
        setCreateOrderModal(false)
    }

   
    

    

    return (
        <div className='order-modal-container' hidden={!createOrderModal}>
            <div className='order-main-container'><button className="close" onClick={() => {setCreateOrderModal(false);orderReset()}}>X</button>ADD ORDER
                <div>
                    <div>
                        <p >Customer Name</p>
                        <input type="text" placeholder="Enter Medicine Name" value={customerName} onChange={(e)=>setCustomerName(e.target.value)} />
                    </div>
                    <div>
                        <p>Contact Number</p>
                        <input type="text" placeholder="Enter Manufacture Name" value={contactNumber} onChange={(e)=>setContactNumber(e.target.value)}/>
                    </div>
                    <div>
                        <p>Select Product With Qunatity</p>
                        <input type="text" placeholder="Enter Price" value={selectProductWithQuantity} onChange={(e)=>setSelectProductWithQuantity(e.target.value)} />
                    </div>
                    <div>
                        <button className="create-order" onClick={orderCurrentKey?editOrder:CreateOrder}>{orderCurrentKey?'edit order':"Create Order"}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateOrderModals
