import './login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope,faEye } from '@fortawesome/free-solid-svg-icons';
const Login = () => {
    return ( 

        <div className="login1">
            <div className="formdata">
                <div className='loginform2'>
                    <h2>Log In Account </h2>
                    <form class="formlogin">
                        <div>
                            <label htmlFor="email">Email</label><br></br>
                            <FontAwesomeIcon  className="envelope" icon={faEnvelope}></FontAwesomeIcon>
                            <input 
                                type="email" 
                                name="email" 
                                placeholder="Enter your Email" 
                            /><br></br>

                        </div>
                        <div>
                            <label htmlFor="password">Password</label><br></br>
                            <FontAwesomeIcon  className="eye" icon={faEye}></FontAwesomeIcon>
                            <input 
                                type="password" 
                                name="password" 
                                placeholder="Password" 
                            />
                        </div><br></br>
                        <button id="loginsubmit" type="submit">Log In</button>
                    </form>
                </div>
                <br></br>
                <span class="forgotit">Forgot  password ? <span id="click">Click here</span></span>

            </div>

            <div className="extra">
                <div className='intro'>
                    <h2>Welcome Back !</h2>
                    <p>Please log in to your account with</p>
                    <p>given details to continue</p>
                    <p>New here? Create an account</p>
                    <button class='loginbutton'>Sign Up</button>
                </div>
            </div>

            <div className="space">

            </div>
        </div>
     );
}
 
export default Login;