import React from 'react'
import { useHistory } from 'react-router-dom'
import "./Nav.css"

function Nav() {
    const history = useHistory()
    const LogOut = ()=>{
        localStorage.setItem("user", JSON.stringify(null))
        history.push("/")
    }
    
    return (
        <nav className="medcity-nav">
            <div className="logo">
                <img className="logo-img" src="https://res.cloudinary.com/dfrqcrgdn/image/upload/v1626012329/phar_5hA_2_zkzsrq.ico"/>
                <h1>MedCity</h1>
            </div>
            <div className="login-part">
                <p>{`WELCOME ${JSON.parse(localStorage.getItem("user"))}`}</p>
                <button className="logout" onClick={LogOut}>LogOut</button>
            </div>
        </nav>
    )
}

export default Nav
