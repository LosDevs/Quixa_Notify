import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../services/UserService";

import { AuthContext } from "../../context/AuthContext";

import './FormLogin.css';

const FormLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [invalidEmail, setInvalidEmail] = useState(false);
  const [invalidPassword, setInvalidPassword] = useState(false);

  const { loginAC } = useContext(AuthContext);

  const navigate = useNavigate();

  async function buttonLogin(event: { preventDefault: () => void; }) {
    event.preventDefault();

    // Remover indicadores de campos inválidos
    setInvalidEmail(false);
    setInvalidPassword(false);

    let formValid = true;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      setInvalidEmail(true);
      formValid = false;
    }

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,20}$/;
    if (!password || !passwordRegex.test(password)) {
      setInvalidPassword(true);
      formValid = false;
    }

    if (!formValid) {
      return;
    }

    try {
      await login({ email: email, password: password }).then((res) => {
        if (res) {
          loginAC();
          navigate("/");
        }
      });
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="">
      <div className="container-fluid align-items-center justify-content-center p-0 m-0 w-100">
        <div className="row">
          <div className="col-md-4 d-flex flex-column align-items-center justify-content-center logo-container">
            <div>
              <img src="logo1.png" alt="" width={300} />
              <p className="info">
                Faça uma reclamação e acompanhe os problemas que estão
                acontecendo ao seu redor.
              </p>
            </div>
          </div>
          <div className="col-md-6  d-flex flex-column align-items-center justify-content-center login-form-container">
            <form className="d-flex flex-column">
              <h4 className="mb-4 custom-text-color text-center">Login</h4>
              <div className="mb-3 form-group">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label custom-text-color"
                >
                  Email
                </label>
                <input
                  type="email"
                  className={`form-control form-control-sm rounded-pill ${invalidEmail ? 'invalid-field' : ''}`}
                  id="exampleFormControlInput1"
                  placeholder="name@exemplo.com"
                  required={true}
                  onChange={(event) => {
                    setEmail(event.target.value);
                    setInvalidEmail(false);
                  }}
                />
                {invalidEmail && <span className="error-message">Email inválido!</span>}
              </div>
              <div className="mb-3 form-group">
                <label
                  htmlFor="inputPassword5"
                  className="form-label custom-text-color"
                >
                  Senha
                </label>
                <input
                  type="password"
                  id="inputPassword5"
                  className={`form-control form-control-sm rounded-pill ${invalidPassword ? 'invalid-field' : ''}`}
                  aria-labelledby="passwordHelpBlock"
                  required={true}
                  onChange={(event) => {
                    setPassword(event.target.value);
                    setInvalidPassword(false);
                  }}
                />
                {invalidPassword && <span className="error-message">Senha inválida!</span>}
                <div
                  id="passwordHelpBlock"
                  className="form-text custom-text-color"
                >
                  Sua senha tem que ter de 8 a 20 caracteres, letras maiúsculas,
                  minúsculas e números.
                </div>
              </div>
              <div className="form-group mb-3">
                <button
                  className="btn btn-primary mb-3 w-100 rounded-pill "
                  onClick={buttonLogin}
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormLogin;
