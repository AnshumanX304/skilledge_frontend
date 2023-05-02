import axios from 'axios';
import Cookies from "js-cookie";
import url from './backendUrl'
const instance = axios.create(
    {
        baseURL: url
    }

);

instance.interceptors.response.use((response) => {
    // console.log("request interceptor !");
    return response
 }, async function (error) {
    // console.log(error);
    const originalRequest = error.config;
    // console.log(originalRequest);
    
    if(error){
        if (error.response.status === 401 && originalRequest.url === url + "user/refreshtoken") {
            localStorage.setItem("isLoggedin",'false');
            window.location.href = '/Login'
            return Promise.reject(error);
        }
     
        if (error.response.status === 401 && !originalRequest._retry) {
     
            originalRequest._retry = true;
            const refreshToken = Cookies.get('rf_token');
            // console.log(refreshToken);
            
            if(refreshToken){
                // console.log("calling request")
                
                await axios.post("http://localhost:4000/user/refreshtoken", {refreshtoken:refreshToken})
                .then(async res => {
                    
                    // console.log("success")
                    // console.log(await res.data.accesstoken);
                    Cookies.set("ac_token",res.data.accesstoken);
                    originalRequest.headers["Authorization"] = 'Bearer ' + await Cookies.get('ac_token');
                    // console.log(originalRequest);
                    return axios(originalRequest);
                    
                })
                .catch(err=>{
                    // console.log(err.response);
                    Cookies.remove('ac_token');
                    Cookies.remove('rf_token');
                    localStorage.setItem("isLoggedin",'false');

                    window.location.href = '/Login'
                })
            }
            else {
                // console.log("No ref token was found")
                Cookies.remove('ac_token');
                Cookies.remove('rf_token');
                localStorage.setItem("isLoggedin",'false');
                return window.location.href = '/Login'
                
    
            }
            
        }
    }

   
    return Promise.reject(error);
 });

export default instance;