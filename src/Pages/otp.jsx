import { useState } from "react";
import './otp.css';
const Otp = () => {
    
    return (  
        <div>
            <div className='otp'>
                <h1>Check Your Email</h1>
                <p>We have sent an OTP on your registered </p>
                <p>email to reset the password.</p>
                
                <form> 
                    <input
                                                   //https://www.youtube.com/watch?v=qf56frPk5lA 
                        type="text"               //use this link while integrating with backend
                        name="otp"
                        maxLength="4"
                    />
                </form>  
                        

                <br></br>
                <button id="continue">Continue</button>
                <p>Didn't get OTP? Resend OTP </p>

                <button id="continue1">Resend OTP</button>
            </div>


        </div>
    );
}
 
export default Otp;