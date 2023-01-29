import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKey} from '@fortawesome/free-solid-svg-icons';
import './resetpassword.css';
const Resetpass = () => {
    
    return (  
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
                            
                        /><br></br><br></br>
                        <label htmlFor="password">Confirm Password</label><br></br>
                         <input 
                            type="password" 
                            name="new password" 
                            
                        /><br></br>
                    </form>
                </div>
               
                <br></br>
                <button id="resetpassword">Reset Password</button>
                

                <button id="rbtl">Back to login</button>
            </div>


        </div>
    );
}
 
export default Resetpass;