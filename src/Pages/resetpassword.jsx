import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKey} from '@fortawesome/free-solid-svg-icons';
import {useState} from 'react';
import {Link,useNavigate} from 'react-router-dom';
import Navbar1 from '../Components/nav1';
import './resetpassword.css';
import { useEffect } from 'react';
import axios from 'axios';
const Resetpass = () => {
    const navigate=useNavigate();
    const [newPassword,setnewPassword]=useState("");
    const [cfmPassword,setcfmPassword]=useState("");
    var email = localStorage.getItem("forgotMail");

    function handlenewPassword(e){
        setnewPassword(e.target.value);
    }
    function handlecfmPassword(e){
        setcfmPassword(e.target.value);
    }
    useEffect(()=>{
        if(cfmPassword!==newPassword){
            document.getElementById('error_message').style.display="block";
            document.getElementById('error_message').innerText="Password did not match !"
        }
        else{
            document.getElementById('error_message').style.display="none";
        }
      

    },[cfmPassword,newPassword])

    function handleSubmit(e){
        if(cfmPassword===newPassword){
            axios.post('http://localhost:4000/user/resetPassword',{
                email:email,
                password:newPassword
            })
            .then((res) => {
                // setMssg(res.data.msg);
                console.log(res.data);  
                navigate("/login");
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
    }


    return ( 
        <>
        <Navbar1/>
        <div>
        
            <div className='reset'>
                <h1>Reset Password</h1>
                <div className="rpass">
                    
                    <FontAwesomeIcon  className="rkey1" icon={faKey}></FontAwesomeIcon>
                    <FontAwesomeIcon  className="rkey2" icon={faKey}></FontAwesomeIcon>
                    <form class="resetform">
                        <label htmlFor="password">New Password</label><br></br>
                        <input 
                            type="password" 
                            name="new password" 
                            value={newPassword}
                            onChange={handlenewPassword}
                            required
                            
                        /><br></br><br></br>
                        <label htmlFor="password">Confirm Password</label><br></br>
                         <input 
                            type="password" 
                            name="new password" 
                            value={cfmPassword}
                            onChange={handlecfmPassword}
                            required
                            
                        /><br></br>
                        <p id="error_message"></p>
                    </form>
                </div>
               
               
                <br></br>
                <button onClick={handleSubmit} id="resetpassword">Reset Password</button>
                

                <button id="rbtl">Back to login</button>
            </div>


        </div>
        </> 
    );
}
 
export default Resetpass;