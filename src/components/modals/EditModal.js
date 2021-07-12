import React, {useEffect, useState} from 'react'
import { useSelector,useDispatch } from 'react-redux';
import {EDITMedicine} from '../../Store/Action'
import './AddNewModal.css'

function EditNewModals(props) {

    const {
        medicineName,
        setMedicineName,
        manufactureName,
        setManufactureName,
        price,
        setPrice,
        stockAvailability,
        setStockAvailability,
        discount,
        setDiscount,
        editModal,
        setEditModal,
        currentKey,
        product,
        reset
    }=props;

    

    console.log(currentKey)
    const state = useSelector(state=>state.medicine[currentKey])
    const dispatch=useDispatch()
    console.log(state)

    useEffect(()=>{
        setMedicineName(state?.medicineName);
        setManufactureName(state?.manufactureName);
        setPrice(state?.price);
        setStockAvailability(state?.stockAvailability);
        setDiscount(state?.discount);
    },[currentKey])
    const saveChanges = ()=>{
        let product = {}
        product= {Name:medicineName, Manufacturer_Name:manufactureName, Price:price, Stock: stockAvailability, Discount:discount}
        dispatch(EDITMedicine(currentKey,product))
        reset()
        setEditModal(false)
    }
    

    

    return (
        <div className='edit-modal-container' hidden={!editModal}>
            <div className='edit-main-container'><button className="close" onClick={() => {setEditModal(false);reset()}}>X</button>Edit
                <div>
                    <div>
                        <p >Medicine Name</p>
                        <input type="text" placeholder="Enter Medicine Name" value={medicineName} onChange={(e)=>setMedicineName(e.target.value)} />
                    </div>
                    <div>
                        <p>Manufacture Name</p>
                        <input type="text" placeholder="Enter Manufacture Name" value={manufactureName} onChange={(e)=>setManufactureName(e.target.value)}/>
                    </div>
                    <div>
                        <p>Price</p>
                        <input type="text" placeholder="Enter Price" value={price} onChange={(e)=>setPrice(e.target.value)} />
                    </div>
                    <div>
                        <p>Stock Availability</p>
                        <input type="text" placeholder="In Stock or not" value={stockAvailability} onChange={(e)=>setStockAvailability(e.target.value)} />
                    </div>
                    <div>
                        <p>Discount</p>
                        <input type="text" placeholder="Discount" value={discount} onChange={(e)=>setDiscount(e.target.value)} />
                    </div>
                    <div>
                        <button className="save-changes" onClick={saveChanges}>Save Changes</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditNewModals
