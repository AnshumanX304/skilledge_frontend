import "./nav.css";
import {Link} from 'react-router-dom';
import logo from './logo/logose.png';
import shop from './logo/shop.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
const Navbar3 = () => {
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
            
                <button id="uploadcourse_buttonlogin">Home</button>
                <button id="uploadcourse_buttonsignup">Host Course</button>


            </div>

            
        </div>
     );
}
 
export default Navbar3;