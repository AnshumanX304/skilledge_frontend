import './productDetails.css';
import { useParams } from 'react-router-dom';
import Navbar3 from '../Components/nav3';
import AuthContext from '../Components/shared/authContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Vidtemplate from './vidtemplate'
// import rateblockimage from '../Pages/images/rateblockimage.png';
import {useState} from 'react';

import { useContext, useEffect } from 'react';
const ProductDetails = () => {
    const _id=useParams();
    const [section,setSection]=useState('info');
    const id=_id.key;
    const {getcoursedetails}=useContext(AuthContext);

    const [topic,setTopic]=useState('');
    const [description,setDescription]=useState('');
    const [username,setUsername]=useState('');
    const [detailed_description,setDetailed_description]=useState('');
    const [lessons,setLessons]=useState([]);

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

    useEffect(()=>{
        // document.getElementById('button_info').style['text-decoration']='underline'
        getcourseDetails();
        
        
    },[])


    function expandarray(idval){
        return (
            <Vidtemplate
                key={idval}
                id={idval}  
            />
          );
        
    }



    async function getcourseDetails(){
        let payload={
            id
        }
        await getcoursedetails(payload)
        .then((res)=>{
            // console.log(res.data);
            const data=res.data.coursedetail;
            setTopic(data.topic);
            setDescription(data.description);
            setUsername(res.data.username);
            // console.log(data.lessons);
            setLessons(data.lessons);
          
            setDetailed_description(data.detailed_description);
            console.log(detailed_description);
            
        })
        .catch((err)=>{
            console.log(err);

        })
    }
    return( 
        <>
            <Navbar3/>
            <div className="desc_heading">
                
                <p className="desc_mainheading">{topic}</p>
                {/* <p className="desc_mainheading">JavaScript Web Developer</p> */}
                <p className="desc_sideheading">{description}</p>
                <p className="desc_ratinginfo"> <FontAwesomeIcon id="desc_ratingstar" icon={faStar}></FontAwesomeIcon>4.5   Created by: {username}</p>

            </div>
            {/* <div className="desc_rateinfo">
                <div className="desc_rateinfoimage"><img className="card_image" height="220px" width="260px" src={rateblockimage} alt="Hi" /></div>
                <div className="desc_rateinforate">$499</div>
                <div className="desc_rateinfobuttons">
                   <div><button className="desc_buynow">Buy Now</button></div>
                   <div><button className="desc_addtocart">Add to Cart</button></div>
                </div>
                <div className="desc_rateinfodesc">
                    <p className="desc_rateinfodescstyle" id="desc_rateinfodescstyle">This course includes:</p>
                    <p className="desc_rateinfodescstyle">9.5 hours on-demand video</p>
                    <p className="desc_rateinfodescstyle">Access on mobile and TV</p>
                </div>
            </div> */}
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
                        <p id="desctitles2content">{detailed_description}</p>

                    </div>}
                    {section==="catalog" && <div className="desccatalog">
                       

                            {lessons.map(expandarray)}

                      


                    </div>}
                    {section==='reviews' && <div className="descreviews">

                    </div>}
                </div>


            </div>
        </>
     );
}
 
export default ProductDetails;