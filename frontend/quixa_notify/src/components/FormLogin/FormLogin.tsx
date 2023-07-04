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

          const isCompanyString = localStorage.getItem('isCompany');
          const isCompany = isCompanyString ? JSON.parse(isCompanyString) : false;
          
          if(isCompany) {
            navigate("/company");
          } else {
            navigate("/");
          }
        }
      });
    } catch (error) {
      console.error(error);
      alert("Email ou senha incorretos");
    }
  }

  return (
    <div className="form-page">
      <form className="form-container">
        <h4 className="mb-4 custom-text-color texto text-center">Entre na sua conta</h4>
        <p className="info custom-text-color texto text-center">
          Faça uma reclamação e acompanhe os problemas que estão
          acontecendo ao seu redor
        </p>

        <div className="mb-1 form-group">
          <label
            htmlFor="exampleFormControlInput1"
            className="form-label custom-text-color"
          >
            Email
          </label>
          <input
            type="email"
            className={`form-control form-control-sm ${invalidEmail ? 'invalid-field' : ''}`}
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
            className={`form-control form-control-sm ${invalidPassword ? 'invalid-field' : ''}`}
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

        <div className="form-group mb-1 button-group">
          <button
            className="primary-button"
            onClick={buttonLogin}
          >
            Entrar
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormLogin;
