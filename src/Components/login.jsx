import './login.css';
import {useState,useContext} from 'react';
import Cookies from "js-cookie";
import Navbar1 from './nav1';
import { Link ,useNavigate} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope,faEye,faKey,faEyeSlash} from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import  validator from 'validator';
import AuthContext from './shared/authContext';
const Login = () => {
    const navigate=useNavigate();
    const [Type,setType]=useState('password');
    const [seye,setEye]=useState(faEyeSlash);
    const [userEmail, setuserEmail] = useState("");
    const [password, setPassword] = useState("");

    const { login } = useContext(AuthContext);
    
    
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
    function handlePassword(e){
        setPassword(e.target.value);
    }

    async function handleSubmits(e){
        e.preventDefault();
        let payload = {
            email: userEmail,
            password: password
        };
        await login(payload)
        .then((res)=>{
            console.log(res.data.success,res.data.msg);
            localStorage.setItem("isloggedin" , 'true');
            console.log(localStorage.getItem("isloggedin"));
            Cookies.set("rf_token",res.data.refreshtoken);
            Cookies.set("ac_token",res.data.accesstoken);
           
            navigate("/");
        })
        .catch((err)=>{
            console.log(err.response.data);
            alert(err.response.data.msg);
        });
    }
    return ( 
        <>
        <Navbar1/>

        <div className="login1">
       
            <div className="formdata">
                <div className='loginform2'>
                    <h2>Log In Account </h2>
                    <form className="formlogin" onSubmit={handleSubmits}>
                        <div>
                            <label htmlFor="email">Email</label><br></br>
                            <FontAwesomeIcon  className="envelope" icon={faEnvelope}></FontAwesomeIcon>
                            <input 
                                type="email" 
                                name="email" 
                                placeholder="Enter your Email" 
                                value={userEmail}
                                required
                                onChange={(e)=>validate(e.target.value)}
                            /><br></br>

                        </div>
                        <div>
                            <label htmlFor="password">Password</label><br></br>
                            <FontAwesomeIcon  className="lkey" icon={faKey}></FontAwesomeIcon>
                            <FontAwesomeIcon  onClick={handleEye} className="leye" icon={seye}></FontAwesomeIcon>
                            <input 
                                type={Type}
                                name="password" 
                                placeholder="Password" 
                                value={password}
                                required
                                onChange={handlePassword}
                            />
                        </div><br></br>
                        <button className="loginsubmit" type="submit">Log In</button>
                    </form>
                    {/* <ToastContainer/> */}
                </div>
                <br></br>
                <span className="forgotit">Forgot  password ? <Link to='/forgotpassword'><span id="click">Click here</span></Link></span>

            </div>

            <div className="extra">
                <div className="intro">
                    <h2>Welcome Back !</h2>
                    <p>Please log in to your account with</p>
                    <p>given details to continue</p>
                    <p>New here? Create an account</p>
                    <Link to='/signup'><button className='loginbutton'>Sign Up</button></Link>
                </div>
            </div>

            <div className="space">

            </div>
            
            
        </div>
        </>
     );
}
 
export default Login;