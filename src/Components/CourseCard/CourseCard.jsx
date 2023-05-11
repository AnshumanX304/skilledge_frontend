import { useEffect } from 'react';
import './CourseCard.css';



const Cards = (props) => {
    const cardimage="http://localhost:4000";



    return ( 
            <div className="card">
                <div><img className="card_image" height="234.37px" width="290px" src={`${cardimage}/${props.imgpath}`} alt="Hi" /></div>
                {/* <div className="rating">
                <FontAwesomeIcon id="home_ratingstar" icon={faStar}></FontAwesomeIcon>
                </div> */}
                <div className="course_title">{props.topic}</div>
                <div className="course_desc">{props.description}</div>
                <div className="course_rate">
                    <button className="viewcoursesubmit">
                        View Course  
                    </button>
                    <div>
                        <button className="home-explore-button">Edit</button>
                    </div>
                </div>

            </div>
     );
}
 
export default Cards;