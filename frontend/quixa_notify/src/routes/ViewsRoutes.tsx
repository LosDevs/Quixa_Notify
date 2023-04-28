import {Routes, Route} from "react-router-dom"

import Home from "../pages/Home"
import ReclametionForm from "../components/ReclamationForm"
import Login from "../pages/Login"
import SingUp from "../pages/SingUp"
import Reclamation from "../pages/Reclamation"

const ViewsRoutes = ()=> {
    return(
        <Routes>
            <Route path='/' element={<Home></Home>}/> 
            <Route path='/reclamation' element={<Reclamation></Reclamation>} />
            <Route path='/login' element={<Login></Login>} />
            <Route path="/signup" element={<SingUp></SingUp>}></Route>
        </Routes>
    )
}

export default ViewsRoutes