import React, { useState } from 'react'
import { useHistory } from 'react-router'
import './Log.css'

function Log() {
    const [managerId, setManagerId] = useState("")
    const [mangerpsswrd, setManagerpsswrd] = useState("")
    const [executiveId, setExecutiveId] = useState("")
    const [executivepsswrd, setExecutivepsswrd] = useState("")
    const history = useHistory()
    const ManagerLogin = ()=>{
        if(managerId=="test-admin" && mangerpsswrd=="test-admin"){
            localStorage.setItem("user", JSON.stringify("admin"))
            history.push("/managerDashboard")
        }
    }
    const ExecutiveLogin = ()=>{
        if(executiveId=="test-sales" && executivepsswrd=="test-sales"){
            localStorage.setItem("user", JSON.stringify("executive"))
            history.push("/executiveDashboard")
        }
    }
    return (
        <div className="LogIn-page">
            <h1>Log In</h1>
            <div className="manager-login">
                <p><b>Manager Login</b></p>
                <input placeholder="Enter Manager Username" value={managerId} onChange={(e)=>setManagerId(e.target.value)}/>
                <input placeholder="Enter Manager Password" value={mangerpsswrd} onChange={(e)=>setManagerpsswrd(e.target.value)}/>
                <button className="Managerlog" onClick={ManagerLogin}><b>LogIn</b></button>
            </div>
            <div className="executive-login">
                <p><b>Executive Login</b></p>
                <input placeholder="Enter Executive Username" value={executiveId} onChange={(e)=>setExecutiveId(e.target.value)}/>
                <input placeholder="Enter Executive Password" value={executivepsswrd} onChange={(e)=>setExecutivepsswrd(e.target.value)}/>
                <button className="ExecutiveLog" onClick={ExecutiveLogin}><b>LogIn</b></button>
            </div>
        </div>
    )
}

export default Log
