import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './forgotpass.css';
import {useState} from 'react';
import axios from 'axios';
import {Link,useNavigate} from 'react-router-dom';
import  validator from 'validator';
const Forgotpass = () => {
    const navigate=useNavigate();
    const [userEmail, setuserEmail] = useState("");

    const validate=(inputText)=>{
        setuserEmail(validator.trim(inputText));
    }

    function handleSubmits(e){
        e.preventDefault();
        localStorage.setItem("forgotMail" , userEmail);

        axios.post("http://localhost:4000/user/sendOTP", {
            email:userEmail ,     
        })
        .then((res) => {
            // setMssg(res.data.msg);
            console.log(res.data);   
            // alert(res.data.msg); 
            // setLoading(false);
            navigate("/otp");
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
    
    return (  
        <div>
            <div className='forgot'>
                <h1>Forgot Password</h1>
                <div className="femail">
                    <p>Email</p>
                    <FontAwesomeIcon  className="fenvelope" icon={faEnvelope}></FontAwesomeIcon>
                    <form onSubmit={handleSubmits}>
                        <input 
                            type="email" 
                            name="email" 
                            value={userEmail}
                            required
                            placeholder="Enter your Email" 
                            onChange={(e)=>validate(e.target.value)}
                        />
                        <button id="resetpass">Reset Password</button>
                        
                    </form>
                </div>
               
                <br></br>
                
                

                <Link to='/login'><button id="btl">Back to login</button></Link>
            </div>


        </div>
    );
}
 
export default Forgotpass;