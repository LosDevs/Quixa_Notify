import {Routes, Route} from "react-router-dom"

import Home from "../views/Home"
import ReclametionForm from "../components/ReclametionForm"
import Login from "../views/Login"

const ViewsRoutes = ()=> {
    return(
        <Routes>
            <Route path='/' element={<Home></Home>}/> 
            <Route path='/reclameitionform' element={<ReclametionForm></ReclametionForm>} />
            <Route path='login' element={<Login></Login>} />
        </Routes>
    )
}

export default ViewsRoutes