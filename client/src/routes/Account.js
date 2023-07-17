import React from "react";
import Login from "../components/Account/Login";
import Register from "../components/Account/Register";
import "../styles/routes/account.css"

export default function Account(props) {
    return (
        <main className="account-main">
            <div className="account-container">
                <Login 
                    setIsLogged={props.setIsLogged}
                />
                <Register />
            </div>
        </main>
    )
}



{/* <form className="account-form">
<h3>Create an Account</h3>
    <label>First Name</label>
    <input
    className="account-input" 
    type="text"
    placeholder="First Name"
    />
    <label>Last Name</label>
    <input
    className="account-input" 
    type="text"
    placeholder="Last Name"
    />
    <label>Email Address</label>                    
    <input
    className="account-input" 
    type="email"
    placeholder="Email Address"
    />
    <label>Confirm Email Address</label>   
    <input
    className="account-input" 
    type="email"
    placeholder="Confirm Email Address"
    />
    <label>Password</label>                       
    <input
    className="account-input" 
    type="text"
    placeholder="Password"
    />
    <label>Confirm Password</label>    
    <input
    className="account-input" 
    type="text"
    placeholder="Confirm Password"
    />                                                            
</form> */}