import { createContext, ReactNode, useEffect, useState } from "react";
import { api, loginUser } from "../services/api";


type AuthContextType = {
  authenticated: boolean;
  login: (
    username: string,
    password: string,
    isChecked: boolean
  ) => Promise<void>;
  logout: () => void;
  persistedLogin: () => any;
  getCache: () => boolean;
  username: string;
  password: string;
  token: string;
  tokenJWT?: string;
};

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext<AuthContextType>(
  {} as AuthContextType
);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    // pega o token do storage quando a pagina for atualizada
    const token = localStorage.getItem("token");
    if (token) {
      api.defaults.headers.Authorization = `Bearer ${token}`;
      setToken(token);
      setAuthenticated(true);
    }
  }, []);

  const login = async (
    username: string,
    password: string,
    isChecked: boolean
  ) => {
    const response = await loginUser(username, password);
    if (isChecked) {
      const now = new Date();
      now.setFullYear(now.getFullYear() + 1);
      const timeStamp = now.getTime();
      localStorage.setItem("cacheTime", timeStamp.toString());
    } else {
      const now = Math.floor(Date.now() / 1000) // Cria um objeto Date com a data e hora atual
      const timestamp = now + 3600 // Obtém o timestamp em milissegundos
      localStorage.setItem("cacheTime", timestamp.toString()); // Salva a string no localStorage
    }
    setToken(response.data.token);
    const token = response.data.token;

    localStorage.setItem("user", username);
    localStorage.setItem("token", token);
    localStorage.setItem("ID", response.data.id);

    api.defaults.headers.Authorization = `Bearer ${token}`;
    setAuthenticated(true);
  };

  const persistedLogin = () => {
    const hasToken = localStorage.getItem("token");

    return hasToken;
  };


  const getCache = () => { 
  const cacheTime = localStorage.getItem('cacheTime');
  if (cacheTime) {
    const dateNow = Math.floor(Date.now() / 1000);
    const cacheTimestamp = parseInt(cacheTime); 

    if (dateNow >= cacheTimestamp) {
      localStorage.removeItem("user");
      localStorage.removeItem("cacheTime");
      localStorage.removeItem("token")
      localStorage.removeItem("ID")
      return false
    } else {
      return true
    }
  }

  return false; 
}


  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    localStorage.removeItem("ID");
    localStorage.removeItem("cacheTime")

    api.defaults.headers.Authorization = null;
    setAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{
        authenticated,
        login,
        logout,
        persistedLogin,
        username,
        password,
        token,
        getCache
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
