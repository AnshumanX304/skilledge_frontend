import './footer.css';
import dark from './logo/logose.png';
import facebook from './logo/facebook.png';
import linkedin from './logo/linkedin.png';
import instagram from './logo/instagram.png';   
const Footer = () => {
    return ( 
        <footer>
                <div className='footer'>
                    
                    <div className='footer1'>
                        <table className='col1'>
                            <tbody/>
                                    <tr>
                                        <td>
                                            <div className='skill'>
                                                <div>
                                                    <img className="logodark" height="40px" width="40px" src={dark} alt="Hi" />
                                                </div>
                                                <div>
                                                    <p className="skilledge1">Skill Edge</p>
                                                </div>
                                            </div>
                                        </td>
                                        
                                    </tr>
                                    <tr>
                                        <td><span className="skilledge">Contact Us</span></td>
                                    </tr>
                                    <tr>
                                    
                                        <td><span id="skilledge2">Email: skilledge@gmail.com</span></td>
                                    </tr>
                                    <tr className='col1'>
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
                            <tbody/>
                        </table>

                    </div>


                    <div className='footer2'>
                        <table className='col1'>
                            <tbody>
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
                                <tr className='col1'>
                                    <td>
                                        <span id="skilledge2">Course</span>

                                    </td>
                                </tr>
                                <tr className='col1'>
                                    <td>
                                        <span id="skilledge2">Contact</span>

                                    </td>
                                </tr>
                            </tbody>
                        </table>

                    </div>

                    

                    <div className='footer2'>
                        <table className='col1'>
                            <tbody>
                        
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
                                <tr className='col1'>
                                    <td>
                                        <span id="skilledge2">Marketing</span>

                                    </td>
                                </tr>
                                <tr className='col1'>
                                    <td>
                                        <span id="skilledge2">Music</span>

                                    </td>
                                </tr>
                            </tbody> 
                        
                                
                        </table>

                    </div>


                    <div className='footer3'>
                        <table className='col1'>
                            <tbody>
                                
                                    <tr>
                                        <td><span id="skilledge2">Business</span></td>
                                    </tr>
                                    <tr>
                                    
                                        <td><span id="skilledge2">Lifestyle</span></td>
                                    </tr>
                                    <tr className='col1'>
                                        <td>
                                            <span id="skilledge2">Photography</span>

                                        </td>
                                    </tr>
                            </tbody>
                        </table>

                    </div>

                </div>
        </footer>
    );
}
 
export default Footer;