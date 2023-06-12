import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { create } from "../../services/UserService";
/* eslint-disable prettier/prettier */
const FormSignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function buttonSingUp(event: { preventDefault: () => void }) {
    event.preventDefault();
    try {
      await create({ name: name, email: email, password: password });
      navigate("/login");
    } catch (error) {}
  }

  return (
    <div className="container-fluid d-flex align-items-center justify-content-center gradient-bg body">
      <div className="row">
        <div className="col-md-4 d-flex flex-column align-items-center justify-content-center logo-container">
          <div>
            <img src="logo1.png" alt="" width={300} />
            <p className="info">
              Faça uma reclamação e acompanhe os problemas que estão acontecendo
              ao seu redor.
            </p>
          </div>
        </div>
        <div className="col-md-6 d-flex flex-column align-items-center justify-content-center login-form-container">
          <form className="d-flex flex-column">
            <h4 className="mb-4 custom-text-color text-center mt-4">
              Faça seu cadastro
            </h4>
            <div className="mb-3 form-group">
              <label
                htmlFor="inputName"
                className="form-label custom-text-color"
              >
                Nome completo
              </label>
              <input
                type="text"
                className="form-control form-control-sm rounded-pill"
                id="inputName"
                placeholder="Seu nome completo"
                onChange={(event) => {
                  setName(event.target.value);
                }}
              />
            </div>
            <div className="mb-3 form-group">
              <label
                htmlFor="inputEmail"
                className="form-label custom-text-color"
              >
                Email
              </label>
              <input
                type="email"
                className="form-control form-control-sm rounded-pill"
                id="inputEmail"
                placeholder="name@exemplo.com"
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
            </div>
            <div className="mb-3 form-group">
              <label
                htmlFor="inputNewPassword"
                className="form-label custom-text-color"
              >
                Senha
              </label>
              <input
                type="password"
                id="inputNewPassword"
                className="form-control form-control-sm rounded-pill"
                aria-labelledby="passwordHelpBlock"
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
              <div
                id="passwordHelpBlock"
                className="form-text custom-text-color"
              >
                Sua senha tem que ter de 8 a 20 caracteres, letras maiúsculas,
                minúsculas e números.
              </div>
            </div>
            <div className="mb-3 form-group">
              <label
                htmlFor="inputConfirmPassword"
                className="form-label custom-text-color"
              >
                Confirme a senha
              </label>
              <input
                type="password"
                id="inputConfirmPassword"
                className="form-control form-control-sm rounded-pill"
                aria-labelledby="passwordHelpBlock"
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
              <div
                id="passwordHelpBlock"
                className="form-text custom-text-color"
              ></div>
            </div>
            <div className="form-group mb-3">
              <button
                className="btn btn-primary mb-3 w-100 rounded-pill"
                onClick={buttonSingUp}
              >
                Cadastrar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormSignUp;
