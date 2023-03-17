import { useContext, useEffect, useState } from "react";
import { HiFolderPlus } from 'react-icons/hi2';

import { MdLogout } from 'react-icons/md';
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";
import Select from 'react-select';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

import { AuthContext } from '../../context/auth';
import skillsService from "../../services/requests/skillsService";
import userSkillsService from "../../services/requests/userSkillService";
import { ButtonSubmit, Container, DivLogo, DivLogout, Input, ModalDiv } from "./styled";
interface Option {
  value: string;
  label: string;
}
const Header: React.FC = () => { 

    const {logout, getCache} = useContext(AuthContext);
    const navigate = useNavigate()
    const [modalIsOpen, setIsOpen] = useState (false)
    const [knowledgeLevel, setKnowledgeLevel] = useState<number | string>(1);
    const [selectedSkill, setSelectedSkill] = useState<Option|null>(null)
    const [mensagem, setMensagem] = useState<string>("")
    const [skill, setSkill] = useState()
    
   
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            width: "500px",
            height: "400px",
            background: "#dee0eb",
            borderRadius: "15px" ,/* fallback for old browsers */
        },
      };
    const handleLogout = async (event: any) => { 
        event.preventDefault();
        await logout()
  
        navigate("/")
      }

      function openModal () { 
        setIsOpen(true)
      }

      function closeModal() { 
        setIsOpen(false)
      }
     
    
      useEffect (() => {
        skillsService
        .getAll()
        .then((res) => {
          var skillsOptions = res.data.map((data: { id: number; name: string; }) => ({
            value: data.id, label: data.name
          })); 
          setSkill(skillsOptions);
          console.log(res.data)
          
        })
        .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
    
        })
    }, []);

    const handleChange = (selectedSkill: Option | null) => { 
      setSelectedSkill(selectedSkill);
    }

  
    function refreshPage() {
      window.location.reload();
    }
    const handleSubmit = (event : any) => {

      if(knowledgeLevel > 10 || knowledgeLevel <= 0) {
        setMensagem("O nível de conhecimento tem que estar entre 1 e 10")

      }else { 

       event.preventDefault();       
       const skillPost = {
        
         
          "knowledgeLevel": knowledgeLevel,
          "user": {
            "id": localStorage.getItem("ID")
          },
          "skill": {
            "id": selectedSkill?.value
          }
        
       };
       
       const getCacheTemp = getCache()

       if(getCacheTemp) { 
       userSkillsService
       .create(skillPost)
       .then((res) => {
        toast.success(`👌👌 Skill ${selectedSkill?.label} adicionada ao usuario `, {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          });
          setTimeout(() => {
            closeModal();
            refreshPage();
          }, 2000); // tempinho para aparecer o toastify
       });
      }else { 
        navigate("/signin")
      }
    }};
  

    return(
       <> 
       <Container>
        <DivLogo>
            <img src="https://neki-it.com.br/wp-content/uploads/2022/01/Logo-Neki.png" alt="Logo Neki" />
            <span>SKILLS</span>
        </DivLogo>
            
        
       
       
        <Modal
       isOpen={modalIsOpen}
      
       onRequestClose={closeModal}
       style={customStyles}
       contentLabel="Example Modal"
        >

          <ModalDiv> 
              <h2>Olá {localStorage.getItem('user')}!</h2>
              <span>Aqui você pode cadastrar uma nova skill!</span>

              <label>
                  Escolha a Skill desejada: 
              </label>
              <Select  
            
              options={skill}
              value={selectedSkill}
              onChange={handleChange}
              className= "select"
              />

              <label>
                  Seu nível de conhecimento é: 
              </label>
              <p>{mensagem}</p>
              <Input type="number" placeholder="de 1 a 10" onChange={e => setKnowledgeLevel(e.target.value)}/>


              <ButtonSubmit onClick={handleSubmit}>Salvar</ButtonSubmit>
            </ModalDiv>
        </Modal>

        <DivLogout> 
            <button onClick={openModal}>
                <HiFolderPlus size={30}/>
            </button>
            <button onClick={handleLogout}><MdLogout size={30} color={"black"}/></button>

        </DivLogout>
        
       
    </Container>
    <ToastContainer />
    </>

    )
}
export default Header; 