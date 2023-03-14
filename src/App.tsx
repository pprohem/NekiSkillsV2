import { useState } from "react"
import ReactModal from "react-modal"
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from "styled-components"
import { AuthProvider } from "./context/auth"
import { Router } from "./routes/routes"
import { GlobalStyle } from "./styles/global"
import dark from "./styles/themes/dark"
import light from "./styles/themes/light"


ReactModal.setAppElement("#root");



function App() {
  
   const [theme, setTheme] = useState(light)
   
   const toggleTheme = () => { 
   setTheme(theme.title === 'light' ? dark : light)
  };
  return (
    
    <ThemeProvider theme = {theme}>
      <GlobalStyle />
      <AuthProvider>

      
      <BrowserRouter> 
      {/* <Header  toggleTheme={toggleTheme} /> */}
      <Router/>
      </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
    
  )
}

export default App
