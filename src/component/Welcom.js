import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";







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
        getUserDataByEmail(JSON.parse(session).email);
        if(data){
            if(data.loginNumber > 1){
                alert('Someone is using your account')
                logout()
            }
        }
    }, [data])

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
        <div>
            <h1>
                Welcome
            </h1>
                <button onClick={logout}>logout</button>
        </div>
    )
}









