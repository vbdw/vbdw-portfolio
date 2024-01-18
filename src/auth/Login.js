import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import './auth.css'

const Login = () => {
    const [session, setSession] = useState(null)
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const [isExist, setIsExist] = useState(false)
    const navigate = useNavigate()


    useEffect(() => {
        if(isExist) {
            alert('you are login now: ', session)
        }
    }, [isExist]);

    const handleChange = (e) => {
        setFormData({
        ...formData,
        [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:1010/signin', formData);
            const token = response.headers.authorization;
            const userData = response.data.userData;
            localStorage.setItem('session',  JSON.stringify(userData))
            localStorage.setItem('token', token);
            setIsExist(true);
            setSession(JSON.parse(localStorage.getItem('session')))
            navigate('/')
        } catch (error) {
        console.error('Login failed:', error.response.data);
        }
    };

    return (
        <div className='container'>
        <form onSubmit={handleSubmit}>
        <h2>Login</h2>
            <div className='npt'>
                <div>
                    <div>
                    <label>Email:</label>
                    </div>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div>
                    <div>
                        <label>Password:</label>
                    </div>
                    <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    />
                </div>
                
                </div>
                
                <div className='submit'>
                    <button type="submit">Sign Up</button>
                </div>
            <div className='linkContainer'>
                <Link className='link' to={'/'}>Sign Up</Link>
            </div>
        </form>
        </div>
    );
};

export default Login;
