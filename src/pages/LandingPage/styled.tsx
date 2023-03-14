import styled from "styled-components";


export const Container = styled.div `
    background-image: url(https://coodesh.com/blog/wp-content/uploads/2021/11/Artigo-144-1536x864.jpg) ;
    width: 100vw;
    height: 100vh;
  

`


export const DivInfos = styled.div `
    background-color: #cccccc;
    width: 25%;
    height: 60%;
    border-radius: 25px;
    position: absolute;
    right: 80px;
    bottom: 170px;
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