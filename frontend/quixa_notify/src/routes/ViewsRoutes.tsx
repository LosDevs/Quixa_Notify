import {Routes, Route} from "react-router-dom"

import Home from "../views/Home"
import ReclametionForm from "../components/ReclametionForm"
import Login from "../views/Login"
import SingUp from "../views/SingUp"

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