import './signUp.css';
import {useState,useContext} from 'react';
import Cookies from "js-cookie";
import Navbar1 from './nav1';
import {Link,useNavigate} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEye,faEnvelope,faKey,faUser,faEyeSlash} from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import AuthContext from './shared/authContext';
import 'react-toastify/dist/ReactToastify.css';
import validator from 'validator';
import { useEffect } from 'react';

const Signup = () => {
    const navigate=useNavigate();
    const [Type,setType]=useState('password');
    const [seye,setEye]=useState(faEyeSlash);
    const [userName, setuserName] = useState("");
    const [userEmail, setuserEmail] = useState("");
    const [password, setPassword] = useState("");
    const [CorrectPassword,setCorrectPassword]=useState(true);

    const { signup } = useContext(AuthContext);


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
   
    const validate=(inputText)=>{
        setuserEmail(validator.trim(inputText));

    }
    
    function handleuserName(e){
        setuserName(e.target.value);
    }

    function handlePassword(e){
        setPassword(e.target.value);
    }

   

    async function handleSubmits(e){
                e.preventDefault();
                let payload={
                    username:userName,
                    email:userEmail,
                    password:password
                };
                console.log('hello');
                await signup(payload)
                .then((res)=>{
                    console.log(res.data.success,res.data.msg);
                    localStorage.setItem("isloggedin" , 'true');
                    Cookies.set("rf_token",res.data.refreshtoken);
                    Cookies.set("ac_token",res.data.accesstoken);
                    navigate("/");
                })
                .catch((err)=>{
                    console.log(err.response.data);
                    alert(err.response.data.msg);
                });
        }
        useEffect(()=>{
            if(password.length>0 & password.length<15){
                document.getElementById('password-validation').style.display="none";
                console.log(true);
                setCorrectPassword(true);
                
            }
            if(password.length>15)
            {
                document.getElementById('password-validation').style.display="block";

                document.getElementById('password-validation').innerText="Password must be less than 15 characters !"
                
            }
        },[password])
    

    return ( 
    
        <>
        <Navbar1/>
       
        <div className="signup1">

      

            <div className="signupspace">
            </div>


            <div className="signupextra">
                <div className='signupintro'>
                    <h2>Welcome !</h2>
                    <p>Please log in to your account </p>
                    <p>with given details to continue</p>
                    <p>Already have an account ?</p>
                    <Link to='/login'><button className='signupbutton'>Log In</button></Link>
                </div>
            </div>


            <div className="formdata2">
                <div className='signupform2'>
                <h2>Create Account</h2>
                <form className="signupform" onSubmit={handleSubmits}>
                   
                    <FontAwesomeIcon  className="signup_username" icon={faUser}></FontAwesomeIcon>
                    <input className="inputwidth"
                        type="text" 
                        name="Username" 
                        placeholder="Username" 
                        maxLength={50}
                        value={userName}
                        required
                        onChange={handleuserName}
                    /><br></br>
                    <FontAwesomeIcon  className="signupenvelope" icon={faEnvelope}></FontAwesomeIcon>
                    <input className="inputwidth"
                        type="email" 
                        name="email" 
                        placeholder="Email" 
                        required
                        value={userEmail}
                        onChange={(e)=>validate(e.target.value)}
                    /><br></br>
                    <FontAwesomeIcon  onClick={handleEye} className="eye4" icon={seye}></FontAwesomeIcon>
                    <FontAwesomeIcon  className="SKey1" icon={faKey}></FontAwesomeIcon>
                    <input className="inputwidth"
                        type={Type}
                        name="password" 
                        placeholder="Password" 
                        value={password}
                        onChange={handlePassword}
                        required
                    /><br></br>
                    <p id="password-validation"></p>

                    <button id="signuphover" className="signupsubmit">Sign Up</button>
                  
                </form>
                
                
                
              
                </div>
                
                <br></br>
                

            </div>
            

           
            

            
        </div>
        </>
       

      
        
     );
}
 
export default Signup;