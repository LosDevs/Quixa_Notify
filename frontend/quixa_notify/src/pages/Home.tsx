import { Link } from "react-router-dom";

import "../stylesCss/Home.css";
import Listar from "../components/Listar";


const Home = () => {
  return (
    <div className="home-container">
      <div className="titulo">
      <img src="logo2.png" alt="" width={500} />
      
      <Link className="reclamation-link" to="reclamation">
        <img
          src="../../node_modules/bootstrap-icons/icons/geo-alt-fill.svg"
          alt=""
          width={"20"}
        />
        <h3>Clique <span>aqui</span> para começar</h3>
      </Link>
      </div>
      <div className="listar">
        <Listar></Listar>
      </div>
    </div>
  );
};

export default Home;
