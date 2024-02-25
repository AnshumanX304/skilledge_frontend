import './Popup.css';
import Review from "../images/review2.png"
import {useState,useContext} from 'react';
import AuthContext from '../../Components/shared/authContext';
import { useWindowSize } from 'usehooks-ts';
import Greetings from '../images/greetings.png'


const Popup = (props) => {
    const [rating,setRating]=useState(0);
    const[review,setReview]=useState('');

    const[reviewed,setReviewed]=useState(false);

    function handleRating(e){
        setRating(e.target.value);
    }
    const {addreview}=useContext(AuthContext);
    function handleReview(e){
        setReview(e.target.value);
    }

    async function handleSubmit(e){
        console.log(props);
        e.preventDefault();
        let payload={
            rating,
            review,
            id:props.id
        }
        await addreview(payload)
        .then((res)=>{
            console.log(res.data.success,res.data.msg);
            // window.location.reload(true);
            setReviewed(true);


        })
        .catch((err)=>{
            console.log(err.response.data);
        })


    }

    return ( props.trigger)?
    (reviewed?(<div>
        <div className="popup">
            <div className="inner-popup">
                <div className="heading-popup">
                    
                    <div className="popup-coursename">
                     
                            <h2 className="thankyou_popup">Thanks for reviewing the course !</h2>
                      
                        
                    </div>
                    <div className="popup-btn">
                        <button onClick={()=>{props.setTrigger(false)
                                                setReviewed(false)
                                                }}>X</button>
                    </div>
                </div>
                <div>

                        <div >
                        <img className="popup_greetings" src={Greetings} alt="" />
                        </div>
                        
                </div>

            </div>
        </div>
    </div>):
        (<div>
            <div className="popup">
                <div className="inner-popup">
                    <div className="heading-popup">
                        
                        <div className="popup-coursename">
                         
                                <h1>{props.title}</h1>
                          
                            
                        </div>
                        <div className="popup-btn">
                            <button onClick={()=>props.setTrigger(false)}>X</button>
                        </div>
                    </div>
                    <div>
                        <p>Rate and review this course -:</p>
                    </div>
                    <div className="popupbox-maincontent">
                    
                            <form onSubmit={handleSubmit} className="review-form" action="">
                                <br/>
                                <label > 
                                    Rating
                                </label>
                                <br/><br/>
                                <select className="rating-input" type="number" value={rating} onChange={handleRating}>
                                    <option defaultChecked>unrated</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                                <br/><br/>
                                <label >
                                    Review
                                </label>
                                <br/>
                                <textarea value={review} onChange={handleReview} type="text" />
                                <br/>
                                <button className="button-submit-review">Submit</button>
                            </form>
           
                        <div className="review-logo">
                            <img src={Review} height="50%" width="50%" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>)
    ) : "";
}
 
export default Popup;