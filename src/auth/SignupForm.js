import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import './auth.css'

const SignupForm = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:1010/signup', formData);

      console.log(response.data);
      navigate('/login')
    } catch (error) {
      console.error('Signup failed:', error.response.data);
    }
  };

  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
        <div>
          <h2>Signup</h2>
        </div>
          <div className='npt'>
            <div>
              <label>Email:</label>
            </div>
            
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className='npt'>
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
          
        
        <div className='submit'>
          <button type="submit">Sign Up</button>
        </div>
        
        <div className='linkContainer'>
            <Link className='link'  to={'/login'}>Login</Link>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
