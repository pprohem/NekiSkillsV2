import styled from "styled-components";

export const Container = styled.header ` 

height: 8vh;
background-color: white;
display: flex;
align-items: center;
justify-content: space-between;

img{ 
    height: 50px;
    
}

span { 
    font-size: 24px;
    font-family: 'Roboto', sans-serif;
}
`

export const DivLogo = styled.div `
    display: flex;
    align-items: center;
    padding: 5px;
`


export const DivLogout = styled.div `
margin-right: 10px;
padding: 15px;
display: flex;
align-items: center;
justify-content: space-between;
flex-direction: row;
width: 150px;


button{ 
    background: none;
    border: none;
    cursor: pointer;
    
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
    font-size: 32px;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    text-transform: uppercase;
  }

  
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