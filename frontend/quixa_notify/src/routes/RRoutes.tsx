import {Routes, Route} from "react-router-dom"

import Home from "../views/Home"
import ReclametionForm from "../components/ReclametionForm"

const RRoutes = ()=> {
    return(
        <Routes>
            <Route path='/' element={<Home></Home>}/> 
            <Route path='/reclameitionform' element={<ReclametionForm></ReclametionForm>} />
        </Routes>
    )
}

export default RRoutes