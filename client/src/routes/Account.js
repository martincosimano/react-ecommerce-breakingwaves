import React from "react";
import "../styles/routes/account.css"

export default function Account() {
    return (
        <main className="account-main">
            <div className="account-container">
                <div className="login-container">
                    <div>
                        <h3 className="account-title">Log In</h3>
                    </div>
                    <div>
                        <form>
                        <label className="account-label">Email Address *</label>                    
                            <input
                            className="account-input" 
                            type="email"
                            placeholder="Email Address"
                        />
                        <label className="account-label">Password *</label>                    
                            <input
                            className="account-input" 
                            type="text"
                            placeholder="Password"
                        />
                        <div className="account-btn-container">
                            <button className="btn-black account-btn">Log In</button>
                        </div>                     
                        </form>
                    </div>
                </div>
                <div className="registration-container">
                    <div>
                        <h3 className="account-title">Register</h3>
                    </div>
                    <div>
                        <form>
                        <label className="account-label">First Name *</label>                    
                            <input
                            className="account-input" 
                            type="text"
                            placeholder="First Name"
                        />
                        <label className="account-label">Last Name *</label>                    
                            <input
                            className="account-input" 
                            type="text"
                            placeholder="Last Name"
                        />                        
                        <label className="account-label">Email Address *</label>                    
                            <input
                            className="account-input" 
                            type="email"
                            placeholder="Email Address"
                        />
                        <label className="account-label">Confirm Email Address *</label>                    
                            <input
                            className="account-input" 
                            type="email"
                            placeholder="Confirm Email Address"
                        />
                        <label className="account-label">Password *</label>                    
                            <input
                            className="account-input" 
                            type="text"
                            placeholder="Password"
                        />
                        <label className="account-label">Confirm Password *</label>                    
                            <input
                            className="account-input" 
                            type="text"
                            placeholder="Confirm Password"
                        />
                        <div className="account-btn-container">
                            <button className="btn-black account-btn">Register</button>
                        </div>                    
                        </form>
                    </div>                    
                </div>
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