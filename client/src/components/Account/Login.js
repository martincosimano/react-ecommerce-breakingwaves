import React from "react";

export default function Login() {
    const [formData, setFormData] = React.useState({
        email: '',
        password: ''
    });

    const {email, password} = formData;

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    }
    return (
    <div className="login-container">
        <div>
            <h3 className="account-title">Log In</h3>
        </div>
        <div className="login-form">
            <form>
            <label className="account-label">Email Address *</label>                    
                <input
                className="account-input" 
                type="email"
                id="email" 
                name="email" 
                value={email}
                placeholder="Email Address"
                onChange={onChange}
            />
            <label className="account-label">Password *</label>                    
                <input
                className="account-input" 
                type="text"
                id="password" 
                name="password" 
                value={password}
                placeholder="Password"
                onChange={onChange}
            />
            <button className="btn-black account-btn"><span>Log In</span></button>                        
            </form>
        </div>
    </div>        
    )
}