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
      <div className='container3'>
          <form onSubmit={handleSubmit}>
              <div className='formContainer'>
                  <div className='npt2'>
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
                      </div>
                      
                      <div className='submit'>
                          <button className='button' type="submit">Sign Up</button>
                      </div>
                      <div className='linkContainer'>
                          <Link className='link' to={'/'}>Already have an account? Sign In</Link>
                      </div>
                      <div style={{ height: '20vh' }}></div>
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

export default SignupForm;
