import React from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export default function Login(props) {
    const navigate = useNavigate();

    const [formData, setFormData] = React.useState({
        email: '',
        password: ''
    });

    const [validationError, setValidationError] = React.useState('');

    const {email, password} = formData;

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    }

    const onSubmit = async (e) => {
        e.preventDefault();

        if (!email || !password) {
            setValidationError("Please enter both email and password.");
            return;
        }

        const userData = {
            email,
            password
        };

        try {
            const response = await axios.post('https://breakingwaves.onrender.com/api/users/login', userData);
            if (response.data) {
                localStorage.setItem('user', JSON.stringify(response.data));
                props.setIsLogged(true);
                navigate('/');
            }
        } catch (error) {
            console.error(error);
            props.setIsLogged(false);
        }
    };

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
                    type="password"
                    id="password" 
                    name="password" 
                    value={password}
                    placeholder="Password"
                    onChange={onChange}
                />
                {validationError && <p className="error-message">{validationError}</p>}
                <button className="btn-black account-btn" onClick={onSubmit}><span>Log In</span></button>                        
            </form>
        </div>
    </div>        
    )
}