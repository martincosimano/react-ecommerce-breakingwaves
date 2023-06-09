import React from "react";
import axios from 'axios';

export default function Register() {
    const [formData, setFormData] = React.useState({
        firstName: '',
        lastName: '',
        email: '',
        email2: '',
        password: '',
        password2: ''
    });

    const {firstName, lastName, email, email2, password, password2} = formData;

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    }

    const onSubmit = async (e) => {
        e.preventDefault();

        if(!firstName || !lastName || !email || !email2 || !password || !password2) {
            console.log('Empty field')
        }else if(password !== password2) {
            console.log('Passwords do not match');
        }else if(email !== email2) {
            console.log('Email Address do not match')
        }else {
            const userData = {
                name: `${firstName} ${lastName}`,
                email,
                password
            }
            try {
                const response = await axios.post('/api/users', userData);
                console.log(response.data);
              } catch (error) {
                console.error(error);
              }
        }
    }
    
    return (
    <div className="registration-container">
        <div>
            <h3 className="account-title">Register</h3>
        </div>
        <div className="register-form">
            <form>
                <label className="account-label">First Name *</label>                    
                    <input
                    className="account-input" 
                    type="text"
                    id="firstName" 
                    name="firstName" 
                    value={firstName}
                    placeholder="First Name"
                    onChange={onChange}
                />
                <label className="account-label">Last Name *</label>                    
                    <input
                    className="account-input" 
                    type="text"
                    id="lastName" 
                    name="lastName" 
                    value={lastName}
                    placeholder="Last Name"
                    onChange={onChange}
                />                        
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
                <label className="account-label">Confirm Email Address *</label>                    
                    <input
                    className="account-input" 
                    type="email"
                    id="email2" 
                    name="email2" 
                    value={email2}
                    placeholder="Confirm Email Address"
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
                <label className="account-label">Confirm Password *</label>                    
                    <input
                    className="account-input" 
                    type="text"
                    id="password2" 
                    name="password2" 
                    value={password2}
                    placeholder="Confirm Password"
                    onChange={onChange}
                />
                <button className="btn-black account-btn" onClick={onSubmit}><span>Register</span></button>                        
            </form>
        </div>                    
    </div>
    )
}