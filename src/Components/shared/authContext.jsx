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

    const getvideo=async(payload)=>{
        const id=payload.id;
        return axios.get('http://localhost:4000/user/getvideo/'+id,
        {
            headers:{
                "Content-Type": "application/json",
                Authorization: 'Bearer ' + Cookies.get('ac_token')
            }

        })
    }

    const addlesson=async(payload)=>{
        const id=payload.id.key;
        console.log(id);
        console.log(payload.formData);
        console.log("http://localhost:4000/user/addlesson/"+id);
        return axios.post('http://localhost:4000/user/addlesson/'+id,payload.formData,
       {
            headers: {
                "Content-Type": "multipart/form-data",
                Authorization: 'Bearer ' + Cookies.get('ac_token')
            }
        })

    }



    const gethomecourses=async()=>{
      
      return axios.get("http://localhost:4000/user/gethomecourses",
      {
        headers:{
            "Content-Type": "application/json",
            Authorization: 'Bearer ' + Cookies.get('ac_token')
        }

    }
      );
    }



  const addtocart=async(payload)=>{
    const id=payload.id;
    
    return await axios.get("http://localhost:4000/user/addtocart/"+id,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: 'Bearer ' + Cookies.get('ac_token')
    }
  })


  }


  const cartcount=async()=>{
    return await axios.get("http://localhost:4000/user/cartcount",
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: 'Bearer ' + Cookies.get('ac_token')
    }
  })
  }


  const cartitems=async()=>{
    return await axios.get("http://localhost:4000/user/cartitems",
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: 'Bearer ' + Cookies.get('ac_token')
      }
    })
  }


  const deletecart=async(payload)=>{
    const id=payload.id;
    return await axios.get("http://localhost:4000/user/deletecart/"+id,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: 'Bearer ' + Cookies.get('ac_token')
      }

    })
  }

  const checkout=async()=>{
    return await axios.get("http://localhost:4000/user/checkout",
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: 'Bearer ' + Cookies.get('ac_token')
      }

    })
  }

  const purchasedcourses=async()=>{
    return await axios.get("http://localhost:4000/user/purchasedcourses",
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: 'Bearer ' + Cookies.get('ac_token')
      }

    })
  }

  const addreview=async(payload)=>{
    const data={
      rating:payload.rating,
      review:payload.review,
    }
    const id=payload.id
   console.log(data,id);
    return await axios.post("http://localhost:4000/user/addreview/"+id,data,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: 'Bearer ' + Cookies.get('ac_token')
      }
    })
  }

  return (
    <>
      <AuthContext.Provider value={{ user, login, signup,uploadcoursedata,sendcourse,getcoursedetails,getvideo,addlesson,gethomecourses,addtocart,cartcount,cartitems,deletecart,checkout,purchasedcourses,addreview}}>
        {children}
      </AuthContext.Provider>
      
    </>
  );
};
 
export default AuthContext;