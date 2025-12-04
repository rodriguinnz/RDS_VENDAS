import { Link } from "react-router-dom";
import "./Signup.css";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF, FaRegEyeSlash, FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { IoInformationCircleOutline, IoEyeOutline } from "react-icons/io5";

const RrsLogo = () => (
  <div className="logo">
    <Link to="/">
      <span className="logo1">R</span>
      <span className="logo2">S</span>
      <span className="logo3">R</span>
    </Link>
  </div>
);

export default function Signup() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // Validações da senha
  const validations = {
    length: password.length >= 8,
    uppercase: /[A-Z]/.test(password),
    lowercase: /[a-z]/.test(password),
    number: /[0-9]/.test(password),
    special: /[!@#$%^&*()?{}]/.test(password),
  };

  const PasswordCriterion = ({ isValid, text }) => (
    <li className={`criterion ${isValid ? "valid" : ""}`}>
      {isValid ? <FaCheckCircle /> : <FaTimesCircle />}
      <span>{text}</span>
    </li>
  );

  return (
    <div className="container">
      <div className="formWrapper">
        <RrsLogo />
        <h1 className="title">Crie a sua conta. É grátis!</h1>

        <div className="socialLogin">
          <button className="google"><FcGoogle size={24} /></button>
          <button className="facebook"><FaFacebookF size={24} /></button>
        </div>

        <div className="separator">OU</div>

        <p className="subtitle">
          Nos informe alguns dados para que possamos melhorar sua experiência na RSR
        </p>

        <form>
          <div className="formGroup">
            <label htmlFor="cpf">CPF <IoInformationCircleOutline /></label>
            <input type="text" id="cpf" placeholder="000.000.000-00" required />
          </div>

          <div className="formGroup">
            <label htmlFor="fullname">Nome completo</label>
            <input type="text" id="fullname" required />
          </div>

          <div className="formGroup">
            <label htmlFor="nickname">Como você quer ser chamado(a)?</label>
            <input type="text" id="nickname" placeholder="Exemplo: Rodrigo S." />
            <small>Aparecerá em seu perfil, anúncios e chats.</small>
          </div>

          <div className="formGroup">
            <label htmlFor="birthdate">Data de nascimento</label>
            <input type="text" id="birthdate" placeholder="dd/mm/aaaa" />
          </div>

          <div className="formGroup">
            <label htmlFor="email">E-mail</label>
            <input type="email" id="email" required />
            <small>Enviaremos um e-mail de confirmação.</small>
          </div>

          <div className="formGroup">
            <label htmlFor="password">Senha</label>
            <div className="passwordWrapper">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="eyeIcon"
              >
                {showPassword ? <IoEyeOutline /> : <FaRegEyeSlash />}
              </button>
            </div>
          </div>

          <div className="passwordCriteria">
            <p>Para sua segurança, crie uma senha com no mínimo:</p>
            <ul>
              <PasswordCriterion isValid={validations.length} text="8 ou mais caracteres" />
              <PasswordCriterion isValid={validations.uppercase} text="Uma letra maiúscula" />
              <PasswordCriterion isValid={validations.lowercase} text="Uma letra minúscula" />
              <PasswordCriterion isValid={validations.number} text="Um número" />
              <PasswordCriterion isValid={validations.special} text="Um caractere especial (!@#$%^&*()?{})" />
            </ul>
          </div>

          <button type="submit" className="submitButton">Cadastrar-se</button>
        </form>

        <p className="loginLink">
          Já tem uma conta? <Link to="/signin">Entre</Link>
        </p>
      </div>
    </div>
  );
}
