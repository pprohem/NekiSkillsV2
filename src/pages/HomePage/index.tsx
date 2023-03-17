import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CardUserSkill } from "../../components/CardUserSkill";
import Header from "../../components/Header";
import { AuthContext } from "../../context/auth";
import userService from "../../services/requests/userService";
import userSkillsService from "../../services/requests/userSkillService";
import { Container } from "./styled";


export function HomePage ( )  { 
const [skillsTeste, setSkillsTeste] = useState([])
const [idToRemove, setIdToRemove] = useState<number>()
const {getCache} = useContext(AuthContext);
const navigate = useNavigate();
function refreshPage() {
    window.location.reload();
  }

const idLogado = localStorage.getItem('ID');
useEffect(() => {
    const getCacheTemp = getCache();
 if (getCacheTemp) { 
    userService
    .get(idLogado)
    
    .then((res : any) => { 
        setSkillsTeste(res.data.userSkill)
        
    }).catch((err) => {
        console.error(err)
    
    })
} else {
    navigate("/signin")
}
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