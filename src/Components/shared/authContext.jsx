import axios from "axios";
import { createContext, useState } from "react";
// import { useNavigate } from "react-router-dom";
 
const AuthContext = createContext();
 
export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    let userProfle = localStorage.getItem("userProfile");
    if (userProfle) {
      return JSON.parse(userProfle);
    }
    return null;
  });

  const login = async (payload) => {
    return axios.post("http://localhost:4000/user/signin", payload)
    };

  const signup=async(payload)=>{
    return axios.post("http://localhost:4000/user/register",payload)
    };

  return (
    <>
      <AuthContext.Provider value={{ user, login, signup}}>
        {children}
      </AuthContext.Provider>
    </>
  );
};
 
export default AuthContext;