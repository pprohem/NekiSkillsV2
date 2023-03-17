import styled from "styled-components";


export const Container = styled.div `
    background-image: url(https://coodesh.com/blog/wp-content/uploads/2021/11/Artigo-144-1536x864.jpg) ;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  
    @media (max-width: 768px) { 
        
    align-items: center;
    justify-content: center;
    }

    

`


export const DivInfos = styled.div `
    background-color: #cccccc;
    border: 0.3px solid black;
    width: 25%;
    height: 60%;
    border-radius: 25px;
    margin-bottom: 50px;
    margin-right: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    img { 
        height: 150px;
        width: 150px;
    }

    h2{
        color: black;
        font-size: 32px; 
        font-family: 'Roboto', 'sans-serif';
    }
    h5{
        font-family: 'Roboto', 'sans-serif';
    }
 
    @media (max-width: 768px) { 
        width: 90%;
        margin: 0;
    }

`

export const DivButtons = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    padding: 15px
    

`
export const Button = styled.button `
    height: 40px;
    width: 150px;
    font-size: 18px;
    border-radius: 5px;
    padding: 5px;
    margin: 5px;
    background-color: #7daafa;
    color: #333;
    border: none;
    font-family: 'Roboto', 'sans-serif';
   

    :hover { 
        background-color: #333;
        color: white;
        margin-bottom: 8px;
        cursor: pointer;
    }
   

`

export const LinkA = styled.a `
    
text-decoration: none;
`