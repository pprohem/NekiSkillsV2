import styled from "styled-components";


export const Container = styled.div `
    width: 100vw;
    height: 100vh;
    background: radial-gradient( circle 976px at 51.2% 51%, 
         rgba(11,27,103,1) 0%, rgba(16,66,157,1) 0%,
         rgba(11,27,103,1) 17.3%, rgba(11,27,103,1) 58.8%, 
         rgba(11,27,103,1) 71.4%, rgba(16,66,157,1) 100.2%, rgba(187,187,187,1) 100.2% );

    display: flex;
    align-items: center;
    justify-content: center;
`

export const DivContent = styled.div `
    height: 90%;
    width: 40%;
    background-color: white;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 5px;

    img { 
        height: 100px;
        width: 100px;
        margin: 10px;
    }

`


export const Label = styled.label `
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    

`

export const Input = styled.input `
  width: 500px;
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

export const DivInput = styled.div ` 
    margin-left: 50px;
    margin-top: 15px;
    padding: 5px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

`


export const ButtonSubmit = styled.button ` 
  padding: 1.3em 3em;
  width: 250px;
  margin-left: 100px;
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
    transform: translateY(-7px);
    }

    :active { 
        transform: translateY(-1px);
    }
`

export const HeaderSignUp = styled.header ` 

display: flex;
flex-direction: row;
align-items: center;
justify-content: center;

h3 { 
    margin-left: 40px;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    font-size: 24px;
}
`
export const EyeButton = styled.button `
background-color: white;
height: 20px;
margin-top: 19px;
border: none;
margin-right: 15px;
margin-bottom: 10px;

:hover {
    cursor: pointer;
}
`

export const DivEyeAndLabel = styled.div ` 
display: flex ; 
flex-direction: row;
justify-content: space-between;
align-items: center; 
width: 500px;
`
