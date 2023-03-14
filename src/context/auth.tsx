import { createContext, ReactNode, useEffect, useState } from "react";
import { api, loginUser } from "../services/api";

type AuthContextType = {
  authenticated: boolean;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
  persistedLogin: () => any;
  username: string;
  password: string;
  token: string;
  tokenJWT?: string;
};

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("")
  const [authenticated, setAuthenticated] = useState(false);
  
   useEffect(() => {

        // pega o token do storage quando a pagina for atualizada
        const token = localStorage.getItem('token')
        if (token) {
            api.defaults.headers.Authorization = `Bearer ${token}`;
            setToken(token);
            setAuthenticated(true); 
        }
    }, []) 
    
  const login = async ( username: string, password: string) => {
    const response = await loginUser(username, password);
    
    const loggedUser = {
      username,
      
    };
    
    setToken(response.data.token)
    const token = response.data.token; 
   
    localStorage.setItem("user", username);
    localStorage.setItem("token", token);
    localStorage.setItem("ID", response.data.id)
    
    
    api.defaults.headers.Authorization = `Bearer ${token}`;
    setAuthenticated(true);
  };
 
  
  const persistedLogin = () => { 
    
   const hasToken = localStorage.getItem('token')
  
        return hasToken;
  }


  
  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    localStorage.removeItem("ID");

    api.defaults.headers.Authorization = null;
    setAuthenticated(false);
  

  };
  
  return (
    <AuthContext.Provider
      value={{ authenticated, login, logout, persistedLogin, username, password, token}}
    >
      {children}
    </AuthContext.Provider>
  );
};