import React, {useState, useEffect} from 'react'
import './AddNewModal.css'
import { useDispatch, useSelector } from "react-redux"
import {ADDExecutive,EDITExecutive} from "../../Store/Action"


function SalesExecutiveModal(props) {
    const {
        firstName,
        setFirstName,
        lastName,
        setLastName,
        DOB,
        setDOB,
        gender,
        setGender,
        experienceYear,
        setExperienceYear,
        executiveid,
        setExecutiveId,
        executiveModal,
        setExecutiveModal,
        executiveReset,
        executiveCurrentKey
    }=props;

    const dispatch=useDispatch()
    const state = useSelector(state=>state.executive[executiveCurrentKey])
    useEffect(()=>{
        setFirstName(state?.First_Name);
        setLastName(state?.Last_Name);
        setDOB(state?.Date_of_birth);
        setGender(state?.Gender);
        setExperienceYear(state?.Experience_Years)

    
    },[executiveCurrentKey])
  
    const addExecutive = () => {
        let id = executiveid
        let executive = {}
        executive[id] = {First_Name:firstName, Last_Name:lastName, Date_of_birth:DOB, Experience_Years: experienceYear, Gender:gender}
        dispatch(ADDExecutive(executive))
        executiveReset()
        setExecutiveModal(false)
    }
    
    const executiveChange = ()=>{
        let executive = {}
        executive= {First_Name:firstName, Last_Name:lastName, Date_of_birth:DOB, Experience_Years: experienceYear, Gender:gender}
        dispatch(EDITExecutive(executiveCurrentKey,executive))
        executiveReset()
        setExecutiveModal(false)
    }

    return (<>
        <div className='add-modal-container' hidden={!executiveModal}>
            <div className='add-main-container'><button className="close" onClick={() => {setExecutiveModal(false);executiveReset()}}>X</button>ADD EXECUTIVE

                <div>
                    <div>
                        <p>id</p>
                        <input type="text" placeholder="enter Id" value={executiveid} onChange={(e)=>setExecutiveId(e.target.value)}/>
                    </div>
                    <div>
                        <p>First Name</p>
                        <input type="text" placeholder="Enter First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                    </div>
                    <div>
                        <p>Last Name </p>
                        <input type="text" placeholder="Enter Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                    </div>
                    <div>
                        <p>DOB</p>
                        <input type="text" placeholder="Enter DOB" value={DOB} onChange={(e) => setDOB(e.target.value)} />
                    </div>
                    <div>
                        <p>Gender</p>
                        <input type="text" placeholder="Experience year" value={gender} onChange={(e) => setGender(e.target.value)} />
                    </div>
                    <div>
                        <p>Experience year</p>
                        <input type="text" placeholder="Experience year" value={experienceYear} onChange={(e) => setExperienceYear(e.target.value)} />
                    </div>
                    <div>
                        <button className="add-executive" onClick={executiveCurrentKey?executiveChange: addExecutive}>{executiveCurrentKey?'edit executive':'ADD EXECUTIVE'}</button>
                    </div>
                </div>
            </div>
        </div>

    </>

    )
}

export default SalesExecutiveModal
