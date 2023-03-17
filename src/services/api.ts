import axios from "axios";


export const api = axios.create({
    baseURL: "http://localhost:8080",
    headers: {
        "Content-Type": "application/json",
        'Authorization': 'Bearer ' + localStorage.getItem('token')    
      },
      
    

})

export const api2 = axios.create({
  baseURL: "http://localhost:8080"
})



export const loginUser = async (username : string, password: string) => {
    return api.post("/login", {username, password})
  };

