import { useState,useEffect } from "react";
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import Navbar1 from '../Components/nav1';
import './otp.css';
const Otp = () => {
    const navigate=useNavigate();
    const [otp, setOtp] = useState("");
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(30);
    var email = localStorage.getItem("forgotMail");
    useEffect(() => {
        const interval = setInterval(() => {
          if (seconds > 0) {
            setSeconds(seconds - 1);
          }
      
          if (seconds === 0) {
            if (minutes === 0) {
              clearInterval(interval);
            } else {
              setSeconds(59);
              setMinutes(minutes - 1);
            }
          }
        }, 1000);
      
        return () => {
          clearInterval(interval);
        };
      }, [seconds,minutes]);

      function handleOtp(e){
        // if(isNaN(e)){
        //     return null;
        // }
        setOtp(e.target.value);
      }
      function handleSubmit(e){
        e.preventDefault();
        axios.post("http://localhost:4000/user/verifyOTP", {
            email:email,
            otp:otp   
        })
        .then((res) => {
            // setMssg(res.data.msg);
            console.log(res.data);  
            navigate("/resetpassword");
            // alert(res.data.msg); 
            // setLoading(false);
            // setStatus(res.data.success);
            // setLoading(false);
            // navigate("/otp2");
        })
        .catch((err) => {
            console.log(err.response.data);
            alert(err.response.data.msg);
            
            
        //     setLoading(false);
        //   setMssg(err.response.data.msg);
        });

      }
      function resendOtp(e){
        e.preventDefault();
        setMinutes(0);
        setSeconds(30);

        axios.post("http://localhost:4000/user/sendOTP", {
            email:email    
        })
        .then((res) => {
            // setMssg(res.data.msg);
            console.log(res.data);  
            alert("otp sent !"); 
            // alert(res.data.msg); 
            // setLoading(false);
            // setStatus(res.data.success);
            // setLoading(false);
            // navigate("/otp2");
        })
        .catch((err) => {
            console.log(err.response.data);
            alert(err.response.data.msg);
            
            
        //     setLoading(false);
        //   setMssg(err.response.data.msg);
        });
      }
    // const [otp,setOtp]=useState(new Array(4).fill(""));
    
    // const handleChange=(element,index)=>{
    //     if(isNaN(element.value))return false;
    //     setOtp([...otp.map((d,idx)=>(idx===index)?element.value:d)]);
    //     if(element.nextSibling){
    //         element.nextSibling.focus();
    //     }
    // }
    
    return (  
        <div>
          <Navbar1/>
            <div className='otp'>
                <h1>Check Your Email</h1>
                <p>We have sent a 4-digit OTP on your registered </p>
                <p>email to reset the password.</p>
                <form id="otp-inputField" onSubmit={handleSubmit}>
                    <input 
                        type="text"
                        name="otp"
                        value={otp}
                        required
                        onChange={handleOtp}
                        maxlength="4"
                    />                    
               
                        

                <br></br>
                <button id="continue">Continue</button>
                </form>
                <p>Didn't get OTP? Resend OTP in: {minutes < 10 ? `0${minutes}` : minutes}:
          {seconds < 10 ? `0${seconds}` : seconds}</p>

                <button  disabled={seconds > 0 || minutes > 0}
                style={{
                color: seconds > 0 || minutes > 0 ? "#293593" : "red",
                }}
                 onClick={resendOtp} id="continue1">Resend OTP</button>
            </div>


        </div>
    );
}
 
export default Otp;