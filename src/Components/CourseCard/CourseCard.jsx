// import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './CourseCard.css';



const Cards = (props) => {
    const cardimage="http://localhost:4000";




    return ( 
            <div className="edu_card">
                <div><img className="card_image" height="234.37px" width="290px" src={`${cardimage}/${props.imgpath}`} alt="Hi" /></div>
                {/* <div className="rating">
                <FontAwesomeIcon id="home_ratingstar" icon={faStar}></FontAwesomeIcon>
                </div> */}
                <div className="course_title">{props.topic}</div>
                <div className="course_desc">{props.description}</div>
                <div className="course_rate">
                    
                    <Link to={"/eduhome/"+props.id} >
                        <button className="viewcoursesubmit">
                            View Course  
                        </button>
                    </Link>
             
                    
                    <div className="addlessondiv">
                        <Link to={"/eduhome/uploadlesson/"+props.id} >
                            <button className="home-explore-button">Add lesson</button>
                        </Link>
                    </div>
                </div>

            </div>
     );
}
 
export default Cards;