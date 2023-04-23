import "./nav.css";
import {Link} from 'react-router-dom';
import logo from './logo/logose.png';
import shop from './logo/shop.png';
import Ellipse36 from './logo/Ellipse36.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faToggleOff } from '@fortawesome/free-solid-svg-icons';
const Navbar2 = () => {


    function toggleMenu(){
        let submenu=document.getElementById('subMenu');
        submenu.classList.toggle("open-menu");

    }
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
                <img id='nav_shop' height="20px" width="20px" src={shop} alt="shop"></img>
                <Link to='/login'><button id="nav_button">     Home</button></Link>
                <Link to='/signup'><button id="nav_button">My Courses</button></Link>
                <img className="nav_imagelogo" height="30px" width="30px" src={Ellipse36} alt="Hi" onClick={toggleMenu}/>
                
                <div className="submenu" id="subMenu">
                    <div className="image_submenu">
                        <img src={Ellipse36} height="90px" width="90px" alt="" />
                    </div>
                    <div>
                        <p>Edit Profile</p>
                    </div>
                    <div>
                        <p style={{color:"#586AF5"}}>Switch to Educator</p>

                    </div>
                    <div>
                        <p>Wallet</p>

                    </div>
                    <div>
                        <p>Privacy</p>
                    </div>
                    <div>
                        <p>Log out</p>
                    </div>
                </div>
               


            </div>

            
        </div>
     );
}
 
export default Navbar2;