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

        try {
            const response = await axios.post('http://localhost:1010/signin', formData);
            const token = response.headers.authorization;
            const userData = response.data.userData;
            localStorage.setItem('session',  JSON.stringify(userData))
            localStorage.setItem('token', token);
            setIsExist(true);
            setSession(JSON.parse(localStorage.getItem('session')))
        } catch (error) {
        console.error('Login failed:', error.response.data);
        }
    };

    return (
        <div className='container'>
            <div className='container2'>
                <form onSubmit={handleSubmit}>
                    <div className='formContainer'>
                        <div className='auth'>
                        <b>Sign up or login with</b>
                            <p>OR</p>
                            <button className='google'> <img src='./google.png' /> Google</button>
                            <button className='google'> <img src='./facebook.png'/> Facebook</button>
                        </div>
                        <div className='npt'>
                            <div className='email'>
                                <div>
                                <label>Email:</label>
                                </div>
                                <input type="email" placeholder='name@host.com' name="email" value={formData.email} onChange={handleChange} />
                            </div>
                            <div className='email'>
                                <div>
                                    <label>Password:</label>
                                </div>
                                <input
                                    placeholder='*****'
                                    type="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                />
                                <Link className='link' to={'#'}>Forgot your password?</Link>
                            </div>
                            
                            <div className='submit'>
                                <button className='button' type="submit">Sign Up</button>
                            </div>
                            <div className='linkContainer'>
                                <Link className='link' to={'/signup'}>Need an account? Sign Up</Link>
                            </div>
                            <div style={{ height: '3vh' }}></div>
                        </div>
                        <div className='contact'>
                            <Link className='link' to={'#'}>Terms of Services</Link>
                            <Link className='link' to={'#'}>Contact us</Link>
                        </div>
                    </div>
                </form>
            </div>
            
        </div>
    );
};

export default Login;
