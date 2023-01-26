import "./nav.css";
const Navbar1 = () => {
    return ( 
        <div className="nav1">
            <div id="logo">
                <img src="logo/light.png" alt="Hi" />
                <span>Skill Edge</span>
                            
            </div>

            <div>
                <input type="text" placeholder="Search.."/>
            </div>
            
            
            
            <div>
                <img src="logo/vector.svg" alt="shop"></img>
                <span>Login</span>
                <span>Signup</span>


            </div>

            
        </div>
     );
}
 
export default Navbar1;