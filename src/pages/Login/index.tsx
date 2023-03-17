import { useContext, useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/auth";

import {
  Button,
  Container,
  DivInput,
  DivTitle,
  EyeButton,
  Inputs,
  LoginContainer,
  PassDiv
} from "./styled";

export function LoginPage() {
  const [passwordShown, setPasswordShown] = useState(false);
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [mensagem, setMensagem] = useState("");
  const navigate = useNavigate();

  const { login } = useContext(AuthContext);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const handleLogin = async (event: any) => {
    event.preventDefault();
      try {
        await login(username, password, isChecked);

        navigate("/Homepage")
      } catch (error) {
        console.log(error)
        setMensagem("Suas credenciais de acesso não coincidem, tente novamente")
      }
     
    
  };

  return (
    <Container>
      <LoginContainer>
        <DivTitle>
          <img src="https://neki-it.com.br/wp-content/uploads/2022/01/Logo-Neki.png" />
        </DivTitle>

        <DivInput>
          <label>USUARIO</label>
          <Inputs
            type="text"
            placeholder="Username.."
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </DivInput>

        <DivInput>
          <PassDiv>
            <label>SENHA</label>
            {passwordShown ? (
              <EyeButton onClick={togglePassword}>
                {" "}
                <BsEyeSlash size={20} color={"#1c948c"} />{" "}
              </EyeButton>
            ) : (
              <EyeButton onClick={togglePassword}>
                {" "}
                <BsEye size={20} color={"#1c948c"} />{" "}
              </EyeButton>
            )}
          </PassDiv>

          <Inputs
            type={passwordShown ? "text" : "password"}
            placeholder="Password.."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </DivInput>

        <input
          id="inputcheck"
          type="checkbox"
          name="lsRememberMe"
          onClick={() => setIsChecked(true)}
        />
        <label>MANTENHA ME CONECTADO</label>
        <label>{mensagem}</label>
        <Button onClick={handleLogin}>
          SIGN IN
          <div className="arrow-wrapper">
            <div className="arrow"></div>
          </div>
        </Button>
      </LoginContainer>
    </Container>
  );
}
