import styled from "styled-components"

export const CardSkills = styled.div ` 
 
 width: 250px;
 height: 284px;
 background-image: linear-gradient(163deg, #00ff75 0%, #3700ff 100%);
 border-radius: 20px;
 transition: all .3s;
 margin: 15px;
 display: flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
 

 :hover { 
    box-shadow: 0px 0px 30px 1px rgba(0, 255, 117, 0.30);
 }
`
export const Card = styled.div ` 

 width: 250px;
 height: 284px;
 background-color: #1a1a1a;
 transition: all .2s;
 border-radius: 5%;
 color: white;
 display: flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
 

 span{
    font-size: 16px;
 }

 img{ 
    height: 80px;
 }

 :hover { 
    transform: scale(0.98);
    border-radius: 20px;
 }
`


export const IconButton = styled.button `
   background: none;
   border: none;
   margin: 8px;
   cursor: pointer;

`


export const ButtonSubmit = styled.button ` 
 padding: 1.3em 3em;
  width: 250px;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  font-weight: 500;
  color: #000;
  background-color: #F9F9F9;
  border: none;
  border-radius: 45px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;

    :hover { 
    background-color: #23c483;
    box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
    color: #fff;
    transform: translateY(-2px);
    }

    :active { 
        transform: translateY(-1px);
    }

`

export const ModalDiv = styled.div `
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;

  .select { 
    width: 90%;
  }


  input { 
    width: 90%;
  }

  label, p , span { 
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
  }

  h2 { 
    font-size: 18px;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    text-transform: uppercase;
  }

  
`

export const Input = styled.input ` 
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
`