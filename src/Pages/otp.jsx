import { useState } from "react";
import './otp.css';
const Otp = () => {
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
            <div className='otp'>
                <h1>Check Your Email</h1>
                <p>We have sent a 4-digit OTP on your registered </p>
                <p>email to reset the password.</p>
                
        
                {/* {
                    otp.map((data,index)=>{
                        return(
                            <input className="otp-inputField"
                                type="text"               //use this link while integrating with backend
                                name="otp"
                                maxLength="1"
                                key={index}
                                value={data}
                                onChange={e=>handleChange(e.target,index)}
                                onFocus={e=>e.target.select()}
                            />
                        );
                })} */}
            
                {/* <form class="otp-form"> 
                    <input
                                                   //https://www.youtube.com/watch?v=qf56frPk5lA 
                        type="text"               //use this link while integrating with backend
                        name="otp"
                        maxLength="4"
                    />
                </form>   */}
                <form id="otp-inputField">
                    <input 
                        type="text"
                        name="otp"
                        maxlength="4"
                    />                    
               
                        

                <br></br>
                <button id="continue">Continue</button>
                </form>
                <p>Didn't get OTP? Resend OTP </p>

                <button id="continue1">Resend OTP</button>
            </div>


        </div>
    );
}
 
export default Otp;