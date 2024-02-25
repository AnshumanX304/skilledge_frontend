import './home.css';
import React from 'react';
import Cookies from "js-cookie";
import home_demo from './images/home_demo.png';
import home_arrow from './images/Frame 42.png';
import design from './images/PenNib.png';
import marketing from './images/MicrophoneStage.png';
import finance from './images/Graph.png';
import datascience from './images/Database.png';
import development from './images/FileHtmldevelopment.png';
import music from './images/MusicNotemusic.png';
import business from './images/Briefcasebusiness.png';
import photography from './images/Cameraphotography.png';
import Card from './card.jsx';
import Navbar1 from '../Components/nav1';
import Navbar2 from '../Components/nav2';
import { useEffect,useContext,useState,useRef} from 'react';
import AuthContext from '../Components/shared/authContext';




const Home = () => {
    // let box,box1;
    const [box,setBox]=useState(0);
    const [box1,setBox1]=useState(0);
    const {gethomecourses}=useContext(AuthContext);

    const [homecourses,setHomecourses]=useState([]);
    useEffect(()=>{
        // console.log(localStorage.getItem("isloggedin"));
        setBox(document.querySelector('.homecards-popularcourses'));
        setBox1(document.querySelector('.homecards-foryou'));
        getcourse();
    },[box1],[box])

    // useEffect(()=>{
    //     getcourse();
    // },[])


    
        async function getcourse(){
      
        await gethomecourses()
        .then((res)=>{
            setHomecourses(res.data.homeCourses);
        })
        .catch((err)=>{
            console.log(err);    
        })

        }
    
   

    
    let logged=localStorage.getItem("isloggedin");
    function popularcoursePreviousbutton(){
        const width=box.clientWidth;
        // console.log(width);
        box.scrollLeft=box.scrollLeft-width;
    }
    function popularcourseNextbutton(){
        const width=box.clientWidth;
        // console.log(width);
        box.scrollLeft=box.scrollLeft+width;

    }


    
    function createcard(course){

        console.log(course);
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
    function foryoucoursePreviousbutton(){
        const width=box1.clientWidth;
        console.log(width);
        box1.scrollLeft=box1.scrollLeft-width;

    }
    function foryoucourseNextbutton(){
        const width=box1.clientWidth;
        console.log(width);
        box1.scrollLeft=box1.scrollLeft+width;

    }




    return ( 
        <div className="home">
            {logged==='true'?<Navbar2/>:<Navbar1/>}
            <div className="section1">
                <div className="home-content">
                    <p className='intro_line'>Start Learning</p>
                    <p id="intro_linecolor" className='intro_line'>New Skills</p>
                    <p className="introbasic">Learn almost any skill at comfort</p>
                    <p className="introbasic">to your home with skilledge.</p>

                </div>
                <div className="image">
                    <img className='demo_image' src={home_demo} alt="demoimage" />
                </div>
            </div>


            <div className="section2">
                <div className='section2-subdiv'>
                    <div className='section2-subsubdiv'>Over 50 Courses</div>
                </div>
                <div className='section2-subdiv'>
                    <div className='section2-subsubdiv'>Over 15000 students</div>
                </div>
                <div className='section2-subdiv'>
                    <div className='section2-subsubdiv'>Over 500 mentors</div>
                </div>
            </div>

            <div className="section4">
            <div className="heading_home1_position"><span className="heading_home1">Top Categories</span></div>

            <div>
                <div className="courses_for_you"> 
                    <div  className="courses_for_you1">
                        <div className="courses_for_you_button">
                            <div className="courses_for_you_button_content">
                                <img src={design} alt="Goto logo" />
                                <p>Design</p>
                            </div>
                            <div>
                                <img src={home_arrow} alt="Goto logo" />
                            </div>
                        </div>

                        <div className="courses_for_you_button">
                            <div className="courses_for_you_button_content">
                                <img src={marketing} alt="Goto logo" />
                                <p>Marketing</p>
                            </div>
                            <div>
                                <img src={home_arrow} alt="Goto logo" />
                            </div>
                        </div>

                        <div className="courses_for_you_button">
                            <div className="courses_for_you_button_content">
                                <img src={finance} alt="Goto logo" />
                                <p>Finance</p>
                            </div>
                            <div>
                                <img src={home_arrow} alt="Goto logo" />
                            </div>
                        </div>

                        <div className="courses_for_you_button">
                            <div className="courses_for_you_button_content">
                                <img src={datascience} alt="Goto logo" />
                                <p>Data Science</p>
                            </div>
                            <div>
                                <img src={home_arrow} alt="Goto logo" />
                            </div>
                        </div>
                    </div>
                  
                </div>
                <div className="courses_for_you">
                <div  className="courses_for_you1">
                        <div className="courses_for_you_button">
                            <div className="courses_for_you_button_content">
                                <img src={development} alt="Goto logo" />
                                <p>Development</p>
                            </div>
                            <div>
                                <img src={home_arrow} alt="Goto logo" />
                            </div>
                        </div>

                        <div className="courses_for_you_button">
                            <div className="courses_for_you_button_content">
                                <img src={music} alt="Goto logo" />
                                <p>Music</p>
                            </div>
                            <div>
                                <img src={home_arrow} alt="Goto logo" />
                            </div>
                        </div>

                        <div className="courses_for_you_button">
                            <div className="courses_for_you_button_content">
                                <img src={business} alt="Goto logo" />
                                <p>Business</p>
                            </div>
                            <div>
                                <img src={home_arrow} alt="Goto logo" />
                            </div>
                        </div>

                        <div className="courses_for_you_button">
                            <div className="courses_for_you_button_content">
                                <img src={photography} alt="Goto logo" />
                                <p>Photography</p>
                            </div>
                            <div>
                                <img src={home_arrow} alt="Goto logo" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
                
            </div>


            <div className="section3">
                <br></br>
                <span className="heading_home">Courses for You</span>
                <div className="home_cards_container">
                    <button className="prev_btn" onClick={popularcoursePreviousbutton}>&lt;</button>
                    <button className="next_btn" onClick={popularcourseNextbutton}>&gt;</button>
                    <div className="homecards-popularcourses">
                    {/* <Card/>
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
                    <Card/>      */}
                    {homecourses.map(createcard)}
                    </div>
                </div>
                

            </div>
            
            
        </div>

    );
}
 
export default Home;