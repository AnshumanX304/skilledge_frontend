import axios from "./interceptor";
import Cookies from "js-cookie";
import { createContext, useState} from "react";

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

    const uploadcoursedata=async(payload)=>{
       
       return axios.post("http://localhost:4000/user/addcourse",payload,
       {
            headers: {
                "Content-Type": "multipart/form-data",
                Authorization: 'Bearer ' + Cookies.get('ac_token')
            }
        })

    };

    const getcoursedetails=async(payload)=>{
        // console.log(payload);
        return await axios.post("http://localhost:4000/user/getcoursedetail",payload,
        {
            headers: {
                "Content-Type": "application/json",
                Authorization: 'Bearer ' + Cookies.get('ac_token')
            }
        })
    }

    const sendcourse=async()=>{
        return axios.get("http://localhost:4000/user/sendcourse",
       {
            headers: {
                "Content-Type": "application/json",
                Authorization: 'Bearer ' + Cookies.get('ac_token')
            }
        })

    }





  return (
    <>
      <AuthContext.Provider value={{ user, login, signup,uploadcoursedata,sendcourse,getcoursedetails}}>
        {children}
      </AuthContext.Provider>
      
    </>
  );
};
 
export default AuthContext;