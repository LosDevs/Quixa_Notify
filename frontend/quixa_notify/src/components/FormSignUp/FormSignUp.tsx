import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import { create } from "../../services/UserService";

import "./FormSignUp.css";

const FormSignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const inputNameRef = useRef<HTMLInputElement>(null);
  const invalidName = useRef<HTMLInputElement>(null);
  const inputEmailRef = useRef<HTMLInputElement>(null);
  const invalidEmail = useRef<HTMLInputElement>(null);
  const inputNewPasswordRef = useRef<HTMLInputElement>(null);
  const invalidPassword = useRef<HTMLInputElement>(null);
  const inputConfirmPasswordRef = useRef<HTMLInputElement>(null);
  const invalidPasswordConfirm = useRef<HTMLInputElement>(null);

  async function buttonSingUp(event: React.FormEvent) {
    event.preventDefault();

    // Remover classes de campo inválido
    inputNameRef.current?.classList.remove("invalid-field");
    invalidName.current?.classList.add("d-none");
    inputEmailRef.current?.classList.remove("invalid-field");
    invalidEmail.current?.classList.add("d-none");
    inputNewPasswordRef.current?.classList.remove("invalid-field");
    invalidPassword.current?.classList.add("d-none");
    inputConfirmPasswordRef.current?.classList.remove("invalid-field");
    invalidPasswordConfirm.current?.classList.add("d-none");

    let formValid = true;

    if (!name) {
      // Adicionar classe CSS para indicar campo inválido
      inputNameRef.current?.classList.add("invalid-field");
      invalidName.current?.classList.remove("d-none");
      formValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      // Adicionar classe CSS para indicar campo inválido
      inputEmailRef.current?.classList.add("invalid-field");
      invalidEmail.current?.classList.remove("d-none");
      formValid = false;
    }

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,20}$/
    if (!password || !passwordRegex.test(password)) {
      // Adicionar classe CSS para indicar campo inválido
      inputNewPasswordRef.current?.classList.add("invalid-field");
      invalidPassword.current?.classList.remove("d-none");
      formValid = false;
    }

    if (!confirmPassword || password !== confirmPassword) {
      // Adicionar classe CSS para indicar campo inválido
      inputNewPasswordRef.current?.classList.add("invalid-field");
      inputConfirmPasswordRef.current?.classList.add("invalid-field");
      invalidPasswordConfirm.current?.classList.remove("d-none");
      formValid = false;
    }

    if (!formValid) {
      return
    }

    try {
      await create({ name: name, email: email, password: password }).then((res) => {
        if (res) {
          navigate("/login")
        }
      })
    } catch (error) {}
  }

  return (
    <div className="form-page">
      <form className="form-container">
        <h4 className="mb-4 custom-text-color texto text-center">Faça seu cadastro</h4>
        <p className="info custom-text-color texto text-center">
          Faça uma reclamação e acompanhe os problemas que estão acontecendo
          ao seu redor
        </p>

        <div className="mb-1 form-group">
          <label
            htmlFor="inputName"
            className="form-label custom-text-color"
          >
            Nome completo
          </label>
          <input
            ref={inputNameRef}
            type="text"
            className="form-control form-control-sm"
            id="inputName"
            placeholder="Seu nome completo"
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
          <span ref={invalidName} className="error-message d-none">
            Nome inválido!
          </span>
        </div>

        <div className="mb-1 for form-group">
          <label
            htmlFor="inputEmail"
            className="form-label custom-text-color"
          >
            Email
          </label>
          <input
            ref={inputEmailRef}
            type="email"
            className="form-control form-control-sm"
            id="inputEmail"
            placeholder="name@exemplo.com"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
          <span ref={invalidEmail} className="error-message d-none">
            Email inválido!
          </span>
        </div>

        <div className="mb-3 form-group">
          <label
            htmlFor="inputNewPassword"
            className="form-label custom-text-color"
          >
            Senha
          </label>
          <input
            ref={inputNewPasswordRef}
            type="password"
            id="inputNewPassword"
            className="form-control form-control-sm"
            aria-labelledby="passwordHelpBlock"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
          <span ref={invalidPassword} className="error-message d-none">
            Senha inválida!
          </span>
          <div
            id="passwordHelpBlock"
            className="form-text custom-text-color"
          >
            Sua senha tem que ter de 8 a 20 caracteres, letras maiúsculas,
            minúsculas, números e algum caractere especial.
          </div>
        </div>

        <div className="mb-1 for form-group">
          <label
            htmlFor="inputConfirmPassword"
            className="form-label custom-text-color"
          >
            Confirme a senha
          </label>
          <input
            ref={inputConfirmPasswordRef}
            type="password"
            id="inputConfirmPassword"
            className="form-control form-control-sm"
            aria-labelledby="passwordHelpBlock"
            onChange={(event) => {
              setConfirmPassword(event.target.value);
            }}
          />
          <span ref={invalidPasswordConfirm} className="error-message d-none">
            Senha inválida!
          </span>
          <div
            id="passwordHelpBlock"
            className="form-text custom-text-color"
          ></div>
        </div>

        <div className="form-group bt-1 mt-3 button-group">
          <button
            className="primary-button"
            onClick={buttonSingUp}
          >
            Cadastrar
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormSignUp;
