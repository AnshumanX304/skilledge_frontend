import './footer.css';
import dark from './logo/logose.png';
import facebook from './logo/facebook.png';
import linkedin from './logo/linkedin.png';
import instagram from './logo/instagram.png';
const Footer = () => {
    return ( 
        <footer>
        <div class='footer'>
            
            <div className='footer1'>
                <table className='col1'>
                    <tr>
                        <td>
                            <div class='skill'>
                                <div>
                                    <img height="40px" width="40px" src={dark} alt="Hi" />
                                </div>
                                <div>
                                    <span id="skilledge">Skill Edge</span>
                                </div>
                            </div>
                        </td>
                        
                    </tr>
                    <tr>
                        <td><span id="skilledge">Contact Us</span></td>
                    </tr>
                    <tr>
                       
                        <td><span id="skilledge2">Email: skilledge@gmail.com</span></td>
                    </tr>
                    <tr class='col1'>
                        <td>
                            <div className='logo'>
                                <div>
                                    <img height="30px" width="30px" src={facebook} alt="Hi" />
                                </div>
                                <div>
                                    <img height="30px" width="30px" src={instagram} alt="Hi" />
                                </div>
                                <div>
                                    <img height="30px" width="30px" src={linkedin} alt="Hi" />
                                </div>
                            </div>

                        </td>
                    </tr>
                </table>

            </div>


            <div className='footer2'>
                <table className='col1'>
                        <tr>
                            <td>
                                
                                <span id="skilledge">Explore</span>
        
                            </td>
                            
                        </tr>
                        <tr>
                            <td><span id="skilledge2">Home</span></td>
                        </tr>
                        <tr>
                        
                            <td><span id="skilledge2">About</span></td>
                        </tr>
                        <tr class='col1'>
                            <td>
                                <td><span id="skilledge2">Course</span></td>

                            </td>
                        </tr>
                        <tr class='col1'>
                            <td>
                                <td><span id="skilledge2">Contact</span></td>

                            </td>
                        </tr>
                    </table>

            </div>

            

            <div className='footer2'>
            <table className='col1'>
                    <tr>
                        <td>
                            
                            <span id="skilledge">Category</span>
    
                        </td>
                        
                    </tr>
                    <tr>
                        <td><span id="skilledge2">Design</span></td>
                    </tr>
                    <tr>
                    
                        <td><span id="skilledge2">Development</span></td>
                    </tr>
                    <tr class='col1'>
                        <td>
                            <td><span id="skilledge2">Marketing</span></td>

                        </td>
                    </tr>
                    <tr class='col1'>
                        <td>
                            <td><span id="skilledge2">Music</span></td>

                        </td>
                    </tr>
                </table>

            </div>
            <div className='footer3'>
            <table className='col1'>
                    
                    <tr>
                        <td><span id="skilledge2">Business</span></td>
                    </tr>
                    <tr>
                    
                        <td><span id="skilledge2">Lifestyle</span></td>
                    </tr>
                    <tr class='col1'>
                        <td>
                            <td><span id="skilledge2">Photography</span></td>

                        </td>
                    </tr>
                </table>

            </div>

        </div>
        </footer>
    );
}
 
export default Footer;