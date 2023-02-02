import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './forgotpass.css';
import {Link} from 'react-router-dom';
const Forgotpass = () => {
    
    return (  
        <div>
            <div className='forgot'>
                <h1>Forgot Password</h1>
                <div className="femail">
                    <p>Email</p>
                    <FontAwesomeIcon  className="fenvelope" icon={faEnvelope}></FontAwesomeIcon>
                    <form>
                        <input 
                            type="email" 
                            name="email" 
                            placeholder="Enter your Email" 
                        /><br></br>
                    </form>
                </div>
               
                <br></br>
                <button id="resetpass">Reset Password</button>
                

                <Link to='/login'><button id="btl">Back to login</button></Link>
            </div>


        </div>
    );
}
 
export default Forgotpass;