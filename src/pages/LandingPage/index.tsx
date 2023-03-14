import { Button, Container, DivButtons, DivInfos, LinkA } from "./styled";

export function LandingPage () { 
    return(
        <Container>
            <DivInfos>
                <img src="https://neki-it.com.br/wp-content/uploads/2022/01/Logo-Neki.png" alt="logo neki"></img>
                <h2> Bem vindo ao Neki Skills!</h2>
                <h5> O ambiente para você gerenciar seu nível de conhecimento!</h5>
            <DivButtons>
                <LinkA href='signin'><Button>Entrar</Button></LinkA>
                <LinkA href='signup'><Button>Cadastre-se</Button></LinkA>
            </DivButtons>
               
            </DivInfos>
        </Container>
    )
}