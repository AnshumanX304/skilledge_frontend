import './signUp.css';
import {useState} from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEye,faEnvelope,faKey,faUser,faStar,faEyeSlash} from '@fortawesome/free-solid-svg-icons';
const Signup = () => {
    const [Type,setType]=useState('password');
    const [seye,setEye]=useState(faEyeSlash);

    const handleEye=()=>{
        if(Type==='password')
        {
            setType('text');
            setEye(faEye);
        }
        else{
            setType('password');
            setEye(faEyeSlash);
        }
    }   
    

    return ( 
        
        <div className="signup1">
            <div className="signupspace">

            </div>


            <div className="signupextra">
                <div className='signupintro'>
                    <h2>Welcome !</h2>
                    <p>Please log in to your account </p>
                    <p>with given details to continue</p>
                    <p>Already have an account ?</p>
                    <Link to='/login'><button class='signupbutton'>Log In</button></Link>
                </div>
            </div>


            <div className="formdata2">
                <div className='signupform2'>
                <h2>Create Account</h2>
                <form className="signupform">
                <FontAwesomeIcon  className="signup_firstname" icon={faStar}></FontAwesomeIcon> 
                <FontAwesomeIcon  className="signup_lastname" icon={faStar}></FontAwesomeIcon>   
                    <input className="inputwidth1"
                        type="text" 
                        name="FirstName" 
                        placeholder="First Name" 
                    /><br></br>
                    <input className="inputwidth1"
                        type="text" 
                        name="LastName" 
                        placeholder="Last Name" 
                    /><br></br>
                    <FontAwesomeIcon  className="signup_username" icon={faUser}></FontAwesomeIcon>
                    <input className="inputwidth"
                        type="text" 
                        name="username" 
                        placeholder="Username" 
                    /><br></br>
                    <FontAwesomeIcon  className="signupenvelope" icon={faEnvelope}></FontAwesomeIcon>
                    <input className="inputwidth"
                        type="email" 
                        name="email" 
                        placeholder="Email" 
                    /><br></br>
                    <FontAwesomeIcon  onClick={handleEye} className="eye4" icon={seye}></FontAwesomeIcon>
                    <FontAwesomeIcon  className="SKey1" icon={faKey}></FontAwesomeIcon>
                    <input className="inputwidth"
                        type={Type}
                        name="password" 
                        placeholder="Password" 
                    /><br></br>
                    <FontAwesomeIcon  onClick={handleEye} className="eye3" icon={seye}></FontAwesomeIcon>
                    <FontAwesomeIcon  className="SKey2" icon={faKey}></FontAwesomeIcon>
                     <input className="inputwidth"
                        type={Type}
                        name="cpassword" 
                        placeholder="Confirm Password" 
                    /><br></br>
                </form>
                <button class="signupsubmit">Sign Up</button>
                    
                </div>
                <br></br>
                

            </div>

            

            
        </div>
     );
}
 
export default Signup;