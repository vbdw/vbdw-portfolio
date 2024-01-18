import { Route, Routes } from "react-router-dom";
import Welcom from "./Welcom";










export default function Components () {
    
    return(
        <Routes>
            <Route path='/' element={<Welcom/>}/>
        </Routes>
    )
}







