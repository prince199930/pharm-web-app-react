import React, {useState} from 'react'
import './AddNewModal.css'
import { useDispatch } from "react-redux"
import {ADDMedicine} from "../../Store/Action"

function AddNewModals(props) {
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
        addModal,
        setAddModal,
        reset
    }=props;


    const dispatch = useDispatch()
    const addMedicine = () => {
        let id = JSON.parse(localStorage.getItem("productid")) || 5
        localStorage.setItem("productid", JSON.stringify(id+1))
        id+=1
        let product = {}
        product[id] = {Name:medicineName, Manufacturer_Name:manufactureName, Price:price, Stock: stockAvailability, Discount:discount}
        dispatch(ADDMedicine(product))
        reset()
    }
    

    return (<>
        <div className='add-modal-container' hidden={!addModal}>
            <div className='add-main-container'><button className="close" onClick={() => {setAddModal(false);reset()}}>X</button>ADD MEDICINE 

                <div>
                    <div>
                        <p>Medicine Name</p>
                        <input type="text" placeholder="Enter Medicine Name" value={medicineName} onChange={(e) => setMedicineName(e.target.value)} />
                    </div>
                    <div>
                        <p>Manufacture Name</p>
                        <input type="text" placeholder="Enter Manufacture Name" value={manufactureName} onChange={(e) => setManufactureName(e.target.value)} />
                    </div>
                    <div>
                        <p>Price</p>
                        <input type="text" placeholder="Enter Price" value={price} onChange={(e) => setPrice(e.target.value)} />
                    </div>
                    <div>
                        <p>Stock Availability</p>
                        <input type="text" placeholder="In Stock or not" value={stockAvailability} onChange={(e) => setStockAvailability(e.target.value)} />
                    </div>
                    <div>
                        <p>Discount</p>
                        <input type="text" placeholder="Discount" value={discount} onChange={(e) => setDiscount(e.target.value)} />
                    </div>
                    <div>
                        <button className="add-medicine" onClick={addMedicine}>ADD</button>
                    </div>
                </div>
            </div>
        </div>

    </>

    )
}

export default AddNewModals
