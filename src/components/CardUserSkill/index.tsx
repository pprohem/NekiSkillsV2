import { useState } from 'react';
import { BsTrash2 } from 'react-icons/bs';
import { TbPencilPlus } from 'react-icons/tb';
import Modal from 'react-modal';
import userSkillsService from '../../services/requests/userSkillService';
import { Loader } from "../Loader";
import SkillRating from '../SkillRating';
import { ButtonSubmit, Card, CardSkills, IconButton, Input, ModalDiv } from "./styled";

type CardContent = { 
    id: number;
    knowledgeLevel: number;
    createdAt: string;
    updatedAt: string | null;
    skill: { 
        description: string;
        id: number;
        imageUrl: string;
        name: string; 
        version: string;
    }
}

type CardProps = {
cardProps : CardContent[];
handleDelete: (id: number) => void;
}

export function CardUserSkill ({cardProps, handleDelete} : CardProps ) { 
   
   const [modalIsOpen, setIsOpen] = useState(false);
   const [knowledgeTitle, setKnowledgeTitle] = useState(0); 
   const [nameSkill, setNameSkill] = useState("")
   const [skillIdTemp, setSkillIdTemp] = useState(0);
   const [userSkillID, setUserSkillID] = useState(0);
   const [newLevel, setNewLevel] = useState<number|string>(0); 
   const [mensagem, setMensagem] = useState ("")
   const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: '450px',
        height: "250px",
        background: "#dee0eb",
        borderRadius: "15px" ,/* fallback for old browsers */
    },
  };
  
   function openModal (userSkillIdTemp: number, skillId :number, id:number, name: string) { 
    setIsOpen(true)
    setKnowledgeTitle(id)
    setNameSkill(name)
    setSkillIdTemp(skillId)
    setUserSkillID(userSkillIdTemp)
   
  }

  function closeModal() { 
    setIsOpen(false)
  }
  function refreshPage() {
    window.location.reload();
  }
 
    const handleUpdate = (event : any) => { 
        event.preventDefault();

        const data = { 
            "knowledgeLevel": newLevel,
            "user": {
              "id": localStorage.getItem('ID')
            },
            "skill": {
              "id": skillIdTemp
            }
        };

        if(newLevel <= 0 || newLevel > 10 ) { 
            setMensagem("O nivel de conhecimento deve estar entre 1 e 10.")
            return; 
        }
        userSkillsService
        .update(userSkillID, data)
        .then((res) => { 
            console.log(res)
            closeModal()
            refreshPage()
        }).catch((err) => { 
            console.error(err)
        })
    }

   
    console.log(newLevel)
    
    return ( 


            <>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
                >
                 <ModalDiv>

                 
                    <h2>Atualize seu nivel de Conhecimento</h2>
                    
                    <p>Atualmente seu nível em {nameSkill} é:  {knowledgeTitle}</p>

                    <label>Novo nível:</label>
                    <Input type="number"  onChange={e => setNewLevel (e.target.value)}/>
                    
                    <h4>{mensagem}</h4>
                    <ButtonSubmit onClick={handleUpdate}>ATUALIZAR</ButtonSubmit>
                </ModalDiv>
            </Modal>
            {!cardProps?.length ? (
                <Loader />
            ) : ( 
                cardProps?.map((card)=> (
                    <CardSkills key={card.id}>
                    <Card>
                        
                        <img style={{marginBottom: 15}} src={card?.skill.imageUrl} alt="Logo Neki" />
                        <span style={{marginBottom: 5}} >{card?.skill.name}</span>
                        <SkillRating level ={card?.knowledgeLevel}/>
                        <span>{card?.skill.description}</span>
                        <span>{card?.skill.version}</span>

                        <div>
                        <IconButton onClick={() => openModal(card.id,card.skill.id,card.knowledgeLevel, card.skill.name)}><TbPencilPlus size={30} color="#00ff75"></TbPencilPlus></IconButton>
                        <IconButton onClick={() => handleDelete(card.id)}><BsTrash2 color='red' size={30}/></IconButton>
                        </div>
                        
                    </Card>
                </CardSkills>
                ))
               
                )}
            </>

       
            
       
    )
}
