import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import ReclametionForm from "../components/ReclamationOffcanvas";
import Login from "../pages/Login";
import SingUp from "../pages/SingUp";
import Reclamation from "../pages/Reclamation";
import Footer from "../components/Footer/Footer";
import NavbarAuth from "../components/Navbar/Navbar";
import ReclamationDetails from "../pages/ReclamationDetails";
import MyReclamation from "../pages/MyReclamation/MyReclamation";

const ViewsRoutes = () => {
  return (
    <>
      <NavbarAuth></NavbarAuth>
      <div className="">
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/reclamation" element={<Reclamation></Reclamation>} />
          <Route path="/reclamation/:id" element={<ReclamationDetails />} /> 
          <Route path="/my-reclamation" element={<MyReclamation />} /> 
          <Route path="/login" element={<Login></Login>} />
          <Route path="/signup" element={<SingUp></SingUp>}></Route>
        </Routes>
      </div>
      <Footer></Footer>
    </>
  );
};

export default ViewsRoutes;
