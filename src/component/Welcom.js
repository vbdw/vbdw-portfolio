import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";







export default function Welcom () {
    const session = localStorage.getItem('session');
    const [data, setData] = useState(null)
    const navigate = useNavigate()
    const getUserDataByEmail = async (email) => {
        try {
            const response = await axios.get(`http://localhost:1010/${email}`);
            const userData = response.data.user;
            setData(userData)
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    };
    
    // Usage
    useEffect(() => {
        const userEmail = JSON.parse(session)?.email;
        if (userEmail) {
            getUserDataByEmail(userEmail);
            if (data) {
                if (data.loginNumber > 1) {
                    alert('Someone is using your account');
                    logout();
                }
            }
        }
    }, [data, session]);
    

    const logout =async () => {
        try {
            console.log(JSON.parse(session).email)
            await axios.post('http://localhost:1010/logout',{ email: JSON.parse(session).email });
            localStorage.removeItem('session');
            console.log('success')
        } catch (error) {
            console.error('Logout failed', error);
        }
    }
    return (
        <div className="container">
            <div className='container4'>
                <form onSubmit={logout}>
                    <div className='formContainer'>
                        <div className="npt2">
                            <button className="button">logout</button>
                        </div>
                        <div className='contact'>
                            <Link className='link' to={'#'}>Terms of Services</Link>
                            <Link className='link' to={'#'}>Contact us</Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}









