import { useState } from 'react';
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import userService from '../../services/requests/userService';
import { ButtonSubmit, Container, DivContent, DivEyeAndLabel, DivInput, EyeButton, HeaderSignUp, Input, Label } from "./styled";


type userType = { 
    username : string,
    password : string
}
export function SignUpPage () { 
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [passwordShown, setPasswordShown] = useState(false);
    const [confirmPasswordShown, setConfirmPasswordShown] = useState(false);


    const confirmTogglePassword = () => {
        setConfirmPasswordShown(!confirmPasswordShown);
        
      };
  
    const togglePassword = () => {
      setPasswordShown(!passwordShown);
     
    };


    const handleSubmit = (event : any | void) => {
        if ( password === "" || username === "" ) {
            toast.error('📢 Os campos não podem ser nulos!', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
                return;
        } 
        if ( password !== passwordConfirmation) {
            toast.error('📢 Senhas não conferem!', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
                return;
        } 
        if (password.length < 8 ){ 
            toast.error('📢 A senha deve conter pelo menos 8 digitos!', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
                return;
        }
        event.preventDefault();
         
        const user = {
          username: username,
          password: password
        };
  
        userService.create(user).then((res) => {
            toast.success('👌👌 Cadastrado com sucesso!', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
        });
    };
    return(
        <Container>
            <DivContent>
                
                <HeaderSignUp>
                    <img  src="https://neki-it.com.br/wp-content/uploads/2022/01/Logo-Neki.png"/>
                    <h3>Será um prazer ter você conosco!</h3>
                </HeaderSignUp>
                
               <DivInput>
                <Label>USUARIO</Label>
                <Input type="text" placeholder="usuario" onChange={e => setUsername(e.target.value)} />
               </DivInput>
                
                <DivInput>
                    <DivEyeAndLabel>
                        <Label>SENHA</Label>
                        {passwordShown ?
                        <EyeButton onClick={togglePassword}> <BsEyeSlash size={20}  color={"#23c483"}/>  </EyeButton>
                        :
                        <EyeButton onClick={togglePassword}> <BsEye size={20} color={"#23c483"} />  </EyeButton> 
                    }
                    </DivEyeAndLabel>
                 
                  <Input type={passwordShown ? "text" : "password"} placeholder = "password" onChange={e => setPassword(e.target.value)}/>
                </DivInput>
                
                
                <DivInput>
                    <DivEyeAndLabel>
                        <Label>CONFIRMAÇÃO DE SENHA</Label>
                            {confirmPasswordShown ?
                        <EyeButton onClick={confirmTogglePassword}> <BsEyeSlash size={20}  color={"#23c483"}/>  </EyeButton>
                        :
                        <EyeButton onClick={confirmTogglePassword}> <BsEye size={20} color={"#23c483"} />  </EyeButton> 
                }
                    </DivEyeAndLabel>
                 
                 <Input type={confirmPasswordShown ? "text" : "password"} placeholder = "confirmação de senha"onChange={e => setPasswordConfirmation(e.target.value)} />
                </DivInput>
                
               <DivInput>
                <ButtonSubmit onClick={handleSubmit} type= 'submit'>CADASTRE-SE</ButtonSubmit>
               </DivInput>
               <ToastContainer />
                
            </DivContent>
        </Container>
    )
}