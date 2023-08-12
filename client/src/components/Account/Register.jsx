import React from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export default function Register() {
    const navigate = useNavigate();

    const [formData, setFormData] = React.useState({
        firstName: '',
        lastName: '',
        email: '',
        email2: '',
        password: '',
        password2: ''
    });

    const [validationError, setValidationError] = React.useState('');

    const { firstName, lastName, email, email2, password, password2 } = formData;

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    }

    const onSubmit = async (e) => {
        e.preventDefault();

        if (!firstName || !lastName || !email || !email2 || !password || !password2) {
            setValidationError('Please fill in all required fields.');
        } else if (password !== password2) {
            setValidationError('Passwords do not match.');
        } else if (email !== email2) {
            setValidationError('Email addresses do not match.');
        } else {
            setValidationError('');

            const userData = {
                name: `${firstName} ${lastName}`,
                email,
                password
            };

            try {
                const response = await axios.post('https://breakingwaves.onrender.com/api/users', userData);
                // console.log(response.data);
                navigate('/');
            } catch (error) {
                setValidationError('User already exists.')
                // console.error(error);
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
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        placeholder="Password"
                        onChange={onChange}
                    />
                    <label className="account-label">Confirm Password *</label>
                    <input
                        className="account-input"
                        type="password"
                        id="password2"
                        name="password2"
                        value={password2}
                        placeholder="Confirm Password"
                        onChange={onChange}
                    />
                    {validationError && <p className="error-message">{validationError}</p>}
                    <button className="btn-black account-btn" onClick={onSubmit}><span>Register</span></button>
                </form>
            </div>
        </div>
    )
}