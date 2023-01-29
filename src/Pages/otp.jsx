import { useState } from "react";
import './otp.css';
const Otp = () => {
    const [otp,setOtp]=useState(new Array(4).fill(""));
    return (  
        <div>
            <div className='otp'>
                <h1>Check Your Email</h1>
                <p>We have sent an OTP on your registered </p>
                <p>email to reset the password.</p>
                {otp.map((data,index)=>{
                    return(
                        <input
                            className="otp-field"    //https://www.youtube.com/watch?v=qf56frPk5lA 
                            type="text"               //use this link while integrating with backend
                            name="otp"
                            maxLength="1"
                            key={index}
                        />
                        
                    );
                })}
                <br></br>
                <button id="continue">Continue</button>
                <p>Didn't get OTP? Resend OTP </p>

                <button id="continue1">Resend OTP</button>
            </div>


        </div>
    );
}
 
export default Otp;