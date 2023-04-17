import './card.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import cardimage from './images/cardimage.png';
const Cards = () => {

    return ( 
            <div className="card">
                <div><img className="card_image" height="234.37px" width="284px" src={cardimage} alt="Hi" /></div>
                <div className="rating">
                <FontAwesomeIcon id="home_ratingstar" icon={faStar}></FontAwesomeIcon>
                <span>4.5</span>
                </div>
                <div className="title">Become a Certified HTML, CSS, JavaScript Web Developer</div>
                <div className="desc">Complete coverage of HTML, CSS, Javascript while you Earn Four Respected Certifications</div>
                <div className="rate">
                    <div className="ratetext">
                        $499
                    </div>
                    <div>
                        <button className="home-explore-button">Explore</button>
                    </div>
                </div>

            </div>
     );
}
 
export default Cards;