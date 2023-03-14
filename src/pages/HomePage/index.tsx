import { useEffect, useState } from "react";
import { CardUserSkill } from "../../components/CardUserSkill";
import Header from "../../components/Header";
import userService from "../../services/requests/userService";
import userSkillsService from "../../services/requests/userSkillService";
import { Container } from "./styled";


export function HomePage ( )  { 
const [skillsTeste, setSkillsTeste] = useState([])
const [idToRemove, setIdToRemove] = useState<number>()

function refreshPage() {
    window.location.reload();
  }

const idLogado = localStorage.getItem('ID');
useEffect(() => {

    userService
    .get(idLogado)
    
    .then((res : any) => { 
        setSkillsTeste(res.data.userSkill)
        
    }).catch((err) => {
        console.error(err)
    
    })
    
}, [])

   
  const handleRemove = (id: number) => { 
    userSkillsService.remove(id)
        .then((res) => {
            refreshPage(); 
        })
        .catch((err) => {
            console.error(err)
        })
}
    
    return( 
        <>
            <Header />
            <Container>
            <CardUserSkill cardProps={skillsTeste} handleDelete={handleRemove} />
            </Container>
        </>


    )
}