import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { create } from "../services/UserService";
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
    <div className="row d-felx align-items-center justify-content-envily m-5 p-5">
      <div className="col d-flex align-items-center justify-content-center">
        <img src="logo1.png" alt="" width={500} />
      </div>
      <form className="col d-flex flex-column" onSubmit={buttonSingUp}>
        <h2 className="mb-4">Cadastro</h2>
        <div className="mb-3 from-group">
          <label htmlFor="inputName" className="form-label">
            Nome completo
          </label>
          <input
            type="text"
            className="form-control"
            id="inputName"
            placeholder="Seu nome completo"
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
        </div>
        <div className="mb-3 from-group">
          <label htmlFor="inputEmail" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="inputEmail"
            placeholder="name@exemplo.com"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
        </div>
        <div className="mb-3 form-group">
          <label htmlFor="inputNewPassword" className="form-label">
            Crie uma senha
          </label>
          <input
            type="password"
            id="inputNewPassword"
            className="form-control"
            aria-labelledby="passwordHelpBlock"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
          <div id="passwordHelpBlock" className="form-text">
            Sua senha tem que ter de 8 a 20 caractéres, letras maiúsculas,
            minusculas e números.
          </div>
        </div>
        <div className="mb-3 form-group">
          <label htmlFor="inputConfirmPassword" className="form-label">
            Confirme a senha
          </label>
          <input
            type="password"
            id="inputConfirmPassword"
            className="form-control"
            aria-labelledby="passwordHelpBlock"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
          <div id="passwordHelpBlock" className="form-text">
            Sua senha tem que ter de 8 a 20 caractéres, letras maiúsculas,
            minusculas e números.
          </div>
        </div>
        <div className="form-group mb-3">
          <button type="submit" className="btn btn-primary mb-3">
            Cadastrar
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormSignUp;
