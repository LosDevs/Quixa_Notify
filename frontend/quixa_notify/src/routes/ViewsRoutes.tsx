import {Routes, Route} from "react-router-dom"

import Home from "../pages/Home"
import ReclametionForm from "../components/DemandForm"
import Login from "../pages/Login"
import SingUp from "../pages/SingUp"

const ViewsRoutes = ()=> {
    return(
        <Routes>
            <Route path='/' element={<Home></Home>}/> 
            <Route path='/reclameitionform' element={<ReclametionForm></ReclametionForm>} />
            <Route path='/login' element={<Login></Login>} />
            <Route path="/signup" element={<SingUp></SingUp>}></Route>
        </Routes>
    )
}

export default ViewsRoutes