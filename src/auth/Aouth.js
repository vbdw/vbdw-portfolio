import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import SignupForm from "./SignupForm";


export default function Aouth () {
    return(
        <Routes>
            <Route path='/login' element={<Login/>}/>
            <Route path='/' element={<SignupForm/>}/>
        </Routes>
    )
}








