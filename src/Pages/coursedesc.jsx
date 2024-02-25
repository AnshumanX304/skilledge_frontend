import './coursedesc.css';
import Card from './card.jsx';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import rateblockimage from './images/rateblockimage.png';
import {useState} from 'react';
import { useEffect,useContext,useRef } from 'react';
import Vidtemplate from '../Educator/vidtemplate';
import Vidtemplate3 from '../Educator/vidtemplate3';
import AuthContext from '../Components/shared/authContext';
import Loader from '../loader';
import { SnackbarProvider, enqueueSnackbar } from 'notistack'
  import 'react-toastify/dist/ReactToastify.css';
// import Navbar3 from '../Components/nav3';
import Ellipse36 from '../Components/logo/Ellipse36.png';
import Navbar2 from '../Components/nav2';
import Popup from './Popup/Popup';

import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";


const Coursedesc = () => {

    const _id=useParams();
    // const [id,setId]=useState(_id.key);
    let id=_id.key;
    
    const [box3,setBox3]=useState(0);
    const [box4,setBox4]=useState(0);
    const [homecourses,setHomecourses]=useState([]);
    const [popup,setPopup]=useState(false);
    const modalRef = useRef();

    
    useEffect(() =>{
     

        id=_id.key;
        console.log(id);
        getcourseDetails();
        
    },[_id])


    

    useEffect(()=>{
        setBox3(document.querySelector('.desccards-popularcourses'));
        setBox4(document.querySelector('.desccards-popularcourses2'));
        getcourse();


    },[])

    useEffect(()=>{
        const options = {
            reserveScrollBarGap: true
          };
          if (popup) {
            disableBodyScroll(modalRef, options);
          } else {
            enableBodyScroll(modalRef);
          }

    },[popup])

    
    

    async function handleCart(){
        const payload={
            id
        }
        await addtocart(payload)
        .then((res)=>{
            console.log(res.data);
            // toast(res.data.message);

           window.location.reload(false);
            
            // enqueueSnackbar(res.data.msg,{ 
            //     preventDuplicate: false
            //   })


         
        })
        .catch((err)=>{
            console.log(err);
            // toast(err.response.data.msg);
            enqueueSnackbar(err.response.data.msg,{ 
                preventDuplicate: false
              })

              
             

        })


    }


  



    async function getcourse(){
      
        await gethomecourses()
        .then((res)=>{
            setHomecourses(res.data.homeCourses);
        })
        .catch((err)=>{
            console.log(err);    
        })

    }


    function createcard(course){

        // console.log(course);
        return(
            <Card
                key={course._id}
                id={course._id} 
                imgpath={course.imgpath}
                topic={course.topic}
                description={course.description}
                categories={course.categories}
                price={course.price}
                lesson={course.lesson}
                vidpath={course.vidpath}
            />
        )
    }

   
    function descpopularcoursePreviousbutton(){
        const width=box3.clientWidth;
        console.log(width);
        box3.scrollLeft=box3.scrollLeft-width;
    }
    function descpopularcourseNextbutton(){
        const width=box3.clientWidth;
        console.log(width);
        box3.scrollLeft=box3.scrollLeft+width;
    }

    function descpopularcoursePreviousbutton2(){
        const width=box4.clientWidth;
        console.log(width);
        box4.scrollLeft=box4.scrollLeft-width;
    }
    function descpopularcourseNextbutton2(){
        const width=box4.clientWidth;
        console.log(width);
        box4.scrollLeft=box4.scrollLeft+width;
    }



    
    const [section,setSection]=useState('info');

    const {getcoursedetails,gethomecourses,addtocart,cartcount}=useContext(AuthContext);
    
    const [isLoading,setIsloading]=useState(false);

    const [topic,setTopic]=useState('');
    const [description,setDescription]=useState('');
    const [username,setUsername]=useState('');
    const [detailed_description,setDetailed_description]=useState('');
    const [lessons,setLessons]=useState([]);
    const [price,setPrice]=useState('');
    const [purchased,setPurchased]=useState(true);
    const [ratingDetails,setRatingDetails]=useState([]);
    const [purchasedCourserating,setPurchasedCourserating]=useState(0);
    const [courserating,setCourserating]=useState(0);
    const [coursereview,setCoursereview]=useState('')
    const [userusername,setUserusername]=useState('');
    

    function handleInfo(){
        setSection('info');  
        document.getElementById('button_catalog').style['color']='#293593'
        document.getElementById('button_reviews').style['color']='#293593'
        document.getElementById('button_info').style['color']='red'

    }
    function handleCatalog(){
       setSection('catalog');
       document.getElementById('button_reviews').style['color']='#293593'
       document.getElementById('button_info').style['color']='#293593'
       document.getElementById('button_catalog').style['color']='red'
       

    }
    function handleReviews(){
        setSection('reviews');
        document.getElementById('button_catalog').style['color']='#293593'
        document.getElementById('button_reviews').style['color']='red'
        document.getElementById('button_info').style['color']='#293593'
    }

  


    function expandarray(idval){
        return (
            <Vidtemplate
                key={idval}
                id={idval}  
            />
          );
        
    }

    function expandarray2(idval){
        return (
            <Vidtemplate3
                key={idval}
                id={idval}  
            />
          );
        
    }



    async function getcourseDetails(){
        let payload={
            id
        }
        setIsloading(true);
        await getcoursedetails(payload)
        .then((res)=>{
            console.log(res.data);
            const data=res.data.coursedetail;
            setTopic(data.topic);
            setDescription(data.description);
            setUsername(res.data.username);
            setUserusername(res.data.username_user);
            // console.log(data.lessons);
            setLessons(data.lessons);
            setPrice(data.price);
            setDetailed_description(data.detailed_description);
            setCourserating(data.current_rating);
            setRatingDetails(res.data.ratingDetails);
            if(res.data.purchased===0){
                setPurchased(false);
            }
            if(!ratingDetails.length){
                setPurchasedCourserating(res.data.ratingDetails[0].rating);
                setCoursereview(res.data.ratingDetails[0].review);
            }
        
            // setRatingDetails(res.data.ratingDetails[0]);
            
           
            setIsloading(false);
            
        })
        .catch((err)=>{
            console.log(err);
            setIsloading(false);

        })
    }
    return( 
        <>
        {/* <div className="overall-desc"> */}
            <Popup id={id} title={topic} trigger={popup} setTrigger={setPopup}/>
           
            <Navbar2/>
            <div className="desc_heading" ref={modalRef}>
                
                <p className="desc_mainheading">{topic}</p>
                {/* <p className="desc_mainheading">JavaScript Web Developer</p> */}
                <p className="desc_sideheading">{description}</p>
                <p className="desc_ratinginfo"> <FontAwesomeIcon id="desc_ratingstar" icon={faStar}></FontAwesomeIcon>{courserating}   Created by: {username}</p>

            </div>


            {purchased&&<div className="not_purchased">
                    <div>
                        <div className="parent-container">
                            <div className="desc-child1">
                                <div className="info-catalog-btn">
                                    <div ><button id="button_info_purchased" onClick={handleInfo}>Info</button></div>
                                    <div><button id="button_catalog_purchased" onClick={handleCatalog}>Catalog</button></div>
                                </div>
                                <div className="infosection">
                                    {section==='info'&& <div className="descinfo-purchased">
                                    <h2 className="desc_titles_2">Description</h2>
                                    {isLoading?<div className="productdetailsloader"><Loader/></div>:<div><p className="desctitles2content">{detailed_description}</p></div>}

                                    </div>}
                                    {section==="catalog" && <div className="desccatalog">
                                    

                                            {lessons.map(expandarray2)}
                                    </div>}
                                    
                                </div>

                            </div>
                            <div className="desc-child2">
                                <div><button id="button_info_purchased">My Review</button></div>
                                <div className="review-section-child">
                                    <div className="review-section-child2">
                                        <div className="desc-review-profilesection">
                                            <div className="profileimage-name-section">
                                                <img src={Ellipse36} alt="Profile Image" />
                                                <p className="heading-username">{userusername}</p>
                                            </div>
                                            <div>
                                                <button className="heading-editreview" onClick={()=>setPopup(true)}>Edit your Review</button>
                                            </div>

                                        </div>
                                        <div>
                                            <p className="rating-heading">Rating: {purchasedCourserating} <FontAwesomeIcon id="desc_ratingstar_2" icon={faStar}></FontAwesomeIcon></p>

                                        </div>
                                        <div>
                                            <p className="comments-heading">Comment</p>
                                            <div className="review-comments">
                                                    {coursereview}
                                            </div>

                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    

                        <div className="desc_exploremore">

                            <br></br><br></br><br></br>
                            <span className="heading_coursedesc">Popular Courses</span>
                            <div className="home_cards_container">
                                <button className="desc_prev_btn" onClick={descpopularcoursePreviousbutton2}>&lt;</button>
                                <button className="desc_next_btn" onClick={descpopularcourseNextbutton2}>&gt;</button>
                                <div className="desccards-popularcourses2">
                                    {homecourses.map(createcard)}
                                </div>
                            </div>
                    
                        </div>
                        
                    </div>
            </div>}



            {!purchased&&<div className="not_purchased">
                    <div className="desc_rateinfo">
                        <div className="desc_rateinfoimage"><img className="card_image" height="220px" width="260px" src={rateblockimage} alt="Hi" /></div>
                        <div className="desc_rateinforate">${price}</div>
                        <div className="desc_rateinfobuttons">
                        <div><button className="desc_buynow">Buy Now</button></div>
                        <div><button className="desc_addtocart" onClick={handleCart}>Add to Cart</button></div>
                        </div>
                        <div className="desc_rateinfodesc">
                            <p className="desc_rateinfodescstyle" id="desc_rateinfodescstyle">This course includes:</p>
                            <p className="desc_rateinfodescstyle">9.5 hours on-demand video</p>
                            <p className="desc_rateinfodescstyle">Access on mobile and TV</p>
                        </div>
                    </div>
                    <div className="desc-content">
                        <div className="desc_titles">
                            <button id="button_info" onClick={handleInfo}>
                                Info
                            </button>
                            <button id="button_catalog" onClick={handleCatalog}>
                                Catalog
                            </button>
                            <button id="button_reviews" onClick={handleReviews}>
                                Reviews
                            </button>
                        </div>
                        <div className="infosection">
                            {section==='info'&& <div className="descinfo">
                                <h2 className="desc_titles_2">Description</h2>
                                {isLoading?<div className="productdetailsloader"><Loader/></div>:<div><p className="desctitles2content">{detailed_description}</p></div>}

                            </div>}
                            {section==="catalog" && <div className="desccatalog">
            
                            

                                    {lessons.map(expandarray)}
                          
                            </div>}
                            {section==='reviews' && <div className="descreviews">

                            </div>}
                        </div>

                        <div className="desc_exploremore">

                            <br></br><br></br><br></br>
                            <span className="heading_coursedesc">Popular Courses</span>
                            <div className="home_cards_container">
                                <button className="desc_prev_btn" onClick={descpopularcoursePreviousbutton}>&lt;</button>
                                <button className="desc_next_btn" onClick={descpopularcourseNextbutton}>&gt;</button>
                                <div className="desccards-popularcourses">
                                    {homecourses.map(createcard)}
                                </div>
                            </div>
                    
                        </div>
                    </div>
            </div>}
                
     
            <SnackbarProvider dense
                iconVariant={{
                    success: '✅',
                    error: '✖️',
                    warning: '⚠️',
                    info: 'ℹ️',
                  }}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                  }}
                  maxSnack={1}
                  autoHideDuration={1000}
            />

        {/* </div> */}
            
        </>
     );
}
 
export default Coursedesc;