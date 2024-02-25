import "./nav.css";
import {Link} from 'react-router-dom';
import logo from './logo/logose.png';
import shop from './logo/shop.png';
import Cookies from 'js-cookie';
import {useNavigate} from "react-router-dom";
import Ellipse36 from './logo/Ellipse36.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faToggleOff } from '@fortawesome/free-solid-svg-icons';
import { useEffect,useState,useContext } from "react";
import AuthContext from "./shared/authContext";
const Navbar2 = () => {
    const navigate=useNavigate();

    const {cartcount} = useContext(AuthContext);

    function logout(){
        localStorage.setItem("isloggedin" ,'false');
        console.log(localStorage.getItem("isloggedin"));
        // console.log(Cookies.get('ac_token'));
        // console.log(Cookies.get('rf_token'));
        Cookies.remove('ac_token');
        Cookies.remove('rf_token');
        // console.log(Cookies.get('ac_token'));
        // console.log(Cookies.get('rf_token'));

        navigate("/login");

    }
    const [count,setCount]=useState();
    useEffect(()=>{
        
        sendcartcount();


    },[count])

    
    // function displaycart(){
    //     if(count===0){
    //         document.querySelector('bracketposition').style.display="none";
    //     }
    //     else{
    //         document.querySelector('bracketposition').style.display="block";
    //     }
    // }
    
    async function sendcartcount(){
        await cartcount()
        .then((res)=>{
            if(res.data.count!=0){

                setCount(res.data.count);
            }
            else{
                document.getElementsByClassName("countdiv")[0].style.display="none";
            }
            
            // displaycart();
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    function toggleMenu(){
        let submenu=document.getElementById('subMenu');
        submenu.classList.toggle("open-menu");


    }
    return ( 
        <div className="nav1">
            <div id="logo">
                <img height="40px" width="40px" src={logo} alt="Hi" />
                <Link className="skilledge" style={{textDecoration:"none",color:"inherit"}} to="/"><span className="skilledge">Skill Edge</span></Link>
                            
            </div>

            <div id="search">
            <FontAwesomeIcon  className="searchicon" icon={faSearch}></FontAwesomeIcon>
                <input id="searchbar" type="text" placeholder="Search.."/>
            </div>
             
            <div id="auth">
                <div className="cart"><Link to="/eduhome/mycart"><img id='nav_shop' height="20px" width="20px" src={shop} alt="shop"></img></Link><div className="countdiv" style={{display: "block"}}><button className="countbutton">{count}</button></div></div>
                <Link to='/'><button id="nav_button">     Home</button></Link>
                <Link to='/purchased-courses'><button id="nav_button">My Courses</button></Link>
                <img className="nav_imagelogo" height="30px" width="30px" src={Ellipse36} alt="Hi" onClick={toggleMenu}/>
                
                <div className="submenu" id="subMenu">
                    <div className="image_submenu">
                        <img src={Ellipse36} height="90px" width="90px" alt="" />
                    </div>
                    <div className="nav_submenu_details">
                        <p >Edit Profile</p>
                    </div>
                    <Link to='/eduhome'><div className="nav_submenu_details">
                        <p className="nav_submenu_details" style={{color:"#586AF5"}}>Switch to Educator</p>

                    </div></Link>
                    <div className="nav_submenu_details">
                        <p >Wallet</p>

                    </div>
                    <div className="nav_submenu_details">
                        <p >Privacy</p>
                    </div>
                    <div className="nav_submenu_details" onClick={logout}>
                        <p >Log out</p>
                    </div>
                </div>
               


            </div>

            
        </div>
     );
}
 
export default Navbar2;