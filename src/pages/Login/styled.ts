
import styled from "styled-components";



export const Container = styled.div `
    width: 100vw;
    height: 100vh;
    background: radial-gradient( circle 976px at 51.2% 51%, 
         rgba(11,27,103,1) 0%, rgba(16,66,157,1) 0%,
         rgba(11,27,103,1) 17.3%, rgba(11,27,103,1) 58.8%, 
         rgba(11,27,103,1) 71.4%, rgba(16,66,157,1) 100.2%, rgba(187,187,187,1) 100.2% );/* background-image: url("./assets/illustration_cover.png");  */
    align-items: center;
    display: flex;
    justify-content: center;
 
  
    
`

export const LoginContainer = styled.div `
    width: 40vw;
    height: 55vh;
    color: #1c948c;
    border: 1px solid black;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    display: flex;
    background: #f3f3f3;
    border-radius: 5%;
    h1{
      font-size: 28px;
      margin-right: 150px;
      margin-top: 15px;
      color: #f6f6f6;
      font-family: 'Roboto Flex', sans-serif;
    }
    @media screen and (max-width: 768px){
        width: 90vw
    
    }
`


export const Button = styled.button<React.ButtonHTMLAttributes<HTMLButtonElement>> `
    --primary-color:#23c483;
    --secondary-color: #fff;
    --hover-color:  #1E232E;
    --arrow-width: 15px;
    --arrow-stroke:2px;
    
    box-sizing: border-box;
    border: 0;
    color: var(--secondary-color);

    background: var(--primary-color);
    display: flex;
    transition: 0.2s background;
    align-items: cfenter;
    gap: 0.6em;
    font-weight: bold;
    width: 350px;
    border-radius: .5rem;
    height: 50px;
    margin-right: 10px;
    margin-top: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
  
  
  .arrow-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .arrow {
    margin-top: 1px;
    width: var(--arrow-width);
    background: var(--primary-color);
    height: var(--arrow-stroke);
    position: relative;
    transition: 0.2s;
  }
  
  .arrow::before {
    content: "";
    box-sizing: border-box;
    position: absolute;
    border: solid var(--secondary-color);
    border-width: 0 var(--arrow-stroke) var(--arrow-stroke) 0;
    display: inline-block;
    top: -3px;
    right: 10px;
    transition: 0.2s;
    padding: 3px;
    transform: rotate(-45deg);
  }
  
  :hover {
    background-color: var(--hover-color);
    cursor: pointer;
  }
  
  :hover .arrow {
    background: var(--secondary-color);
  }
  
  :hover .arrow:before {
    right: 0;
  }


  @media (max-width: 1024px) { 
    width: 250px;
  }
  `



export const EyeButton = styled.button `
background-color: #f3f3f3;
height: 20px;
margin-top: 19px;
border: none;
margin-right: 15px;
margin-bottom: 10px;

:hover {
    cursor: pointer;
}
`


export const DivTitle = styled.div`
    height: 15%;
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
    align-items: center;

    h2{
      font-size: 36px;
      font-weight: 600;
    }
    h5 {
       font-size: 16px;
    span{
      font-weight: bold;
    :hover{
      color: black;
      margin-top: 3px;
      cursor: pointer;
    }
    }
    }
    
    img { 
      width: 80px;
      height: 80px;
    }

`

export const DivInput = styled.div`
  height: 25%;
  width: 60%;
  /* background-color: #333; */
  margin-top: 5px;
  padding: 5px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  font-weight: 600;

`

export const Inputs = styled.input `
   width: 350px;
  background-color: #F6F6F6;
  color: #242424;
  padding: .15rem .5rem;
  min-height: 40px;
  border-radius: 4px;
  outline: none;
  border: none;
  line-height: 1.15;
  box-shadow: 0px 10px 20px -18px;



  &:focus { 
    border-bottom: 2px solid #23c483;
    border-radius: 4px 4px 2px 2px;
  }

  :hover { 
    outline: 1px solid lightgrey; 
  }

  @media( max-width: 768px ) { 
    width: 250px;
  }
 
`

export const PassDiv = styled.div `
 display: flex;
 flex-direction: row;
 justify-content: space-between;
 align-items: center;
 height: 30px;

`
