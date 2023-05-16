import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="d-flex aline-items-center justify-content-center m-5 p-5">
      <div className="d-flex align-items-center justify-content-center">
        <img src="logo1.png" alt="" width={500} />
      </div>
      <button type="submit" className="btn btn-lg">
        <Link to="reclamation">
          <img
            src="../../node_modules/bootstrap-icons/icons/exclamation-diamond-fill.svg"
            alt=""
            width={"50"}
          />
        </Link>
      </button>
    </div>
  );
};

export default Home;
