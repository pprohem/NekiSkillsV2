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
  
    const CacheTime = ({ children }: any): JSX.Element => {

        const cacheTime = localStorage.getItem('cacheTime');
        if (cacheTime) {
          const dateNow = Math.floor(Date.now() / 1000);
          const cacheTimestamp = parseInt(cacheTime); 
      
          if (dateNow >= cacheTimestamp) {
            localStorage.removeItem("user");
            localStorage.removeItem("cacheTime");
            localStorage.removeItem("token")
            return <Navigate to="/signin" />;
          } else {
            return <>{children}</>;
          }
        }
      
        return <Navigate to="/signin" />
      };
        
    
            return( 
                <Routes>
                    <Route path='/' element={<LandingPage/>}> </Route>
                    <Route path='/signin' element={<LoginPage/>}> </Route>
                    <Route path='/signup' element={<SignUpPage/>}> </Route>
                    <Route path='/homepage' element={
                  <CacheTime>
                    <IsLoggedIn>
                        <HomePage />
                    </IsLoggedIn>
                  </CacheTime>
                    }/>
                </Routes>
            );
        
    
}