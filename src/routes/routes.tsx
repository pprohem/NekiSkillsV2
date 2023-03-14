import { useContext } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { AuthContext } from '../context/auth'
import { HomePage } from '../pages/HomePage'
import { LandingPage } from '../pages/LandingPage'
import { LoginPage } from '../pages/Login'
import { SignUpPage } from '../pages/SignUpPage'

export function Router() { 

    const IsLoggedIn = ({ children }: any): JSX.Element => {
        const auth = persistedLogin();
        if (auth === undefined || auth === null || auth === " ") {
            return <Navigate to="/" />;
        } else {
            return <>{children}</>;
          
        }
      };
    const {persistedLogin}= useContext(AuthContext)
  
        
    
            return( 
                <Routes>
                    <Route path='/' element={<LandingPage/>}> </Route>
                    <Route path='/signin' element={<LoginPage/>}> </Route>
                    <Route path='/signup' element={<SignUpPage/>}> </Route>
                    <Route path='/homepage' element={
                    <IsLoggedIn>
                        <HomePage />
                    </IsLoggedIn>
                    }/>
                </Routes>
            );
        
    
}