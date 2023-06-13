import { Link } from "react-router-dom";

import "../stylesCss/Home.css";

const Home = () => {
  return (
    <div className="home-container">
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
  );
};

export default Home;
