import "./nav.css";
import {Link} from 'react-router-dom';
import logo from './logo/logose.png';
import shop from './logo/shop.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
const Navbar1 = () => {
    return ( 
        <div className="nav1">
            <div id="logo">
                <img height="40px" width="40px" src={logo} alt="Hi" />
                <span id="skilledge">Skill Edge</span>
                            
            </div>

            <div id="search">
            <FontAwesomeIcon  className="searchicon" icon={faSearch}></FontAwesomeIcon>
                <input id="searchbar" type="text" placeholder="Search.."/>
            </div>
             
            <div id="auth">
                <img height="20px" width="20px" src={shop} alt="shop"></img>
                <Link to='/login'><button id="buttonlogin">Log In</button></Link>
                <Link to='/signup'><button id="buttonsignup">Sign Up</button></Link>


            </div>

            
        </div>
     );
}
 
export default Navbar1;