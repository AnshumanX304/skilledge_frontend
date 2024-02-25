import './card.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import cardimage from './images/cardimage.png';
const Cards = (props) => {
    // console.log(props);
    const cardimage="http://localhost:4000";
    return ( 
        <div className="cardskeleton">
            <div className="card">
                <div><img className="card_image" height="234.37px" width="284px" src={`${cardimage}/${props.imgpath}`} alt="Hi" /></div>
                <div className="rating">
                <FontAwesomeIcon id="home_ratingstar" icon={faStar}></FontAwesomeIcon>
                <span>4.5</span>
                </div>
                {/* <div className="title">Become a Certified HTML, CSS, JavaScript Web Developer</div> */}
                <div className="title">{props.topic}</div>
                {/* <div className="desc">Complete coverage of HTML, CSS, Javascript while you Earn Four Respected Certifications</div> */}
                <div className="desc">{props.description}</div>
                <div className="rate">
                    <div className="ratetext">
                        ${props.price}
                    </div>
                    <div>
                    <a href={"/coursedesc/"+props.id}>
                        <button className="home-explore-button">Explore</button>
                    </a>
                    </div>
                </div>

            </div>
        </div>
     );
}
 
export default Cards;