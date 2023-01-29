import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './forgotpass.css';
const Forgotpass = () => {
    
    return (  
        <div>
            <div className='forgot'>
                <h1>Forgot Password</h1>
                <div className="femail">
                    <p>Email</p>
                    <FontAwesomeIcon  className="fenvelope" icon={faEnvelope}></FontAwesomeIcon>
                        <input 
                            type="email" 
                            name="email" 
                            placeholder="Enter your Email" 
                        /><br></br>
                </div>
               
                <br></br>
                <button id="resetpass">Reset Password</button>
                

                <button id="btl">Back to login</button>
            </div>


        </div>
    );
}
 
export default Forgotpass;