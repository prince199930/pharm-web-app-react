import React from "react"
import { useHistory, Route, BrowserRouter as Router, Switch, Link, Redirect } from 'react-router-dom'
// import Home from "../Home/home"
// import Login from "../login/log"
// import SalesExecutive from "../Home/SalesExecutive"
// import SalesManager from "../Home/SalesManager"
import Login from "../login/Log"
import SalesExecutive from "../Home/SalesExecutive"
import SalesManager from "../Home/SalesManager"

function Auth() {
   

    const SalesManagerLogin = ({ component: Component, ...rest }) => {
const user=JSON.parse(localStorage.getItem('user'))
        return (
            <Route
                {...rest}
                render={props=>user==="admin" ?
                    <Component {...props} /> :
                    <Redirect
                        to={{
                            pathname: '/',
                            state: { from: props.location }
                        }}
                    />

                }
            />

        )


    }
    const SalesExecutiveLogin = ({ component: Component, ...rest }) => {
        const user= JSON.parse(localStorage.getItem('user'));
        return (
            <Route
                {...rest}
                render={props=>user==="executive" ?
                    <Component {...props} /> :
                    <Redirect
                        to={{
                            pathname: '/',
                            state: { from: props.location }
                        }}
                    />

                    
                }
            />

        )


    }

    return (<>
    <Router>
        <Switch>
            <SalesManagerLogin path='/managerDashboard' component={SalesManager}/>
            <SalesExecutiveLogin path='/executiveDashboard' component={SalesExecutive}/>
            <Route path="/">
            <Login />
            </Route>
        </Switch>
    </Router>
        
    </>
    )
}

export default Auth