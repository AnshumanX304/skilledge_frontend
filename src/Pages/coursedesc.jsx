import './coursedesc.css';
import Card from './card.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import rateblockimage from './images/rateblockimage.png';
import {useState} from 'react';

const Coursedesc = () => {

    
    const box3=document.querySelector('.desccards-popularcourses');

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

    function handleInfo(){

        document.getElementsByClassName(".desccatalog").style.display = 'none';
        document.getElementsByClassName(".descinfo").style.display = 'block';
        document.getElementsByClassName(".descreviews").style.display = 'none';
    }
    function handleCatalog(){
        document.getElementsByClassName('.desccatalog').style.display = 'block';
        document.getElementsByClassName('.descinfo').style.display = 'none';
        document.getElementsByClassName('.descreviews').style.display = 'none';
    }
    function handleReviews(){
        document.getElementsByClassName('.descreviews').style.display='block'
        document.getElementsByClassName('.desccatalog').style.display = 'none';
        document.getElementsByClassName('.descinfo').style.display = 'none';
    }
    

    return ( 
        <>
            <div className="desc_heading">
                
                <p className="desc_mainheading">Become a Certified HTML, CSS,</p>
                <p className="desc_mainheading">JavaScript Web Developer</p>
                <p className="desc_sideheading">Complete coverage of HTML, CSS, Javascript while you Earn Four Respected Certifications</p>
                <p className="desc_ratinginfo"> <FontAwesomeIcon id="desc_ratingstar" icon={faStar}></FontAwesomeIcon>4.5   Created by: Monkey D. Luffy</p>

            </div>
            <div className="desc_rateinfo">
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
            </div>
            <div className="desc-content">
                <div className="desc_titles">
                    <button onClick={handleInfo}>
                        Info
                    </button>
                    <button onClick={handleCatalog}>
                        Catalog
                    </button>
                    <button onClick={handleReviews}>
                        Reviews
                    </button>
                </div>
                <div className="descinfo">
                    <h2 className="desc_titles_2">Description</h2>
                    <p id="desctitles2content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mattis, 
                    nisl a convallis tristique, nulla lectus laoreet ligula, non finibus quam magna vel risus. Morbi 
                    pellentesque auctor orci, vel suscipit ante laoreet ac. Donec ultrices risus id est mattis laoreet. 
                    Praesent sed elit non risus vestibulum accumsan. Nulla laoreet interdum lacus sed sagittis. Sed pretium 
                    iaculis lacus, sagittis tincidunt leo tincidunt et. Mauris tempor velit erat. Etiam id nunc eu massa 
                    consectetur consectetur. Nullam aliquam, diam sit amet ornare fermentum, quam arcu placerat orci, et 
                    aliquet neque tellus sed risus. Cras dapibus elementum tortor.
                    <br></br><br></br>
                    Ut non dictum ipsum. Mauris urna magna, volutpat eget rutrum ac, 
                    faucibus quis nisl. Etiam gravida, erat nec hendrerit elementum, sem mi volutpat tortor, fermentum mattis 
                    sem justo eu nisl. Nulla a tempor libero, nec ullamcorper erat. Vivamus fermentum semper felis, eget mollis 
                    massa scelerisque aliquet. Vestibulum mattis elementum maximus. Ut cursus, tellus vitae ullamcorper viverra, 
                    libero nunc hendrerit velit, quis fringilla urna ex nec ex. Maecenas feugiat enim ipsum, id tristique felis 
                    tempus et.</p>

                </div>
                <div className="desccatalog">

                </div>
                <div className="descreviews">

                </div>


            </div>
            <div className="desc_exploremore">

            <br></br><br></br><br></br>
                <span className="heading_coursedesc">Popular Courses</span>
                <div className="home_cards_container">
                    <button className="desc_prev_btn" onClick={descpopularcoursePreviousbutton}>&lt;</button>
                    <button className="desc_next_btn" onClick={descpopularcourseNextbutton}>&gt;</button>
                    <div className="desccards-popularcourses">
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>     
                    </div>
                </div>
                
            </div>
        </>
     );
}
 
export default Coursedesc;