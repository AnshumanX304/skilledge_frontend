import './home.css';
import React from 'react';
import Cookies from "js-cookie";
import home_demo from './images/home_demo.png';
import Card from './card.jsx';
import Navbar1 from '../Components/nav1';
import Navbar2 from '../Components/nav2';
import { useEffect} from 'react';
import {useEffectOnce} from 'usehooks-ts';
import axios from '../Components/shared/interceptor';



const Home = () => {
    let box,box1;
    useEffect(()=>{
        // console.log(localStorage.getItem("isloggedin"));
        box=document.querySelector('.homecards-popularcourses');
        box1=document.querySelector('.homecards-foryou');
        getcourse();
    },[])

    

    // useEffectOnce(()=>{
    //     console.log("home");
    //     getcourse();

    // },[])
    
        async function getcourse(){
      
        console.log('get courses api called !');
        await axios.get("http://localhost:4000/user/getcourses",{
            headers: {
                "Content-Type": "application/json",
                Authorization: 'Bearer ' + Cookies.get('ac_token')
            }
        })
        .then((res)=>{
            console.log(res);

        })
        .catch((err)=>{
            console.log(err);
            
        })

        }
    
   

    
    let logged=localStorage.getItem("isloggedin");
    function popularcoursePreviousbutton(){
        const width=box.clientWidth;
        console.log(width);
        box.scrollLeft=box.scrollLeft-width;
    }
    function popularcourseNextbutton(){
        const width=box.clientWidth;
        console.log(width);
        box.scrollLeft=box.scrollLeft+width;

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


            <div className="section3">
                <br></br><br></br><br></br>
                <span className="heading_home">Popular Courses</span>
                <div className="home_cards_container">
                    <button className="prev_btn" onClick={popularcoursePreviousbutton}>&lt;</button>
                    <button className="next_btn" onClick={popularcourseNextbutton}>&gt;</button>
                    <div className="homecards-popularcourses">
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
            <div className="section4">

            <br></br><br></br><br></br>
                <span className="heading_home">Courses for you</span>
                <div className="home_cards_container">
                    <button className="prev_btn" onClick={foryoucoursePreviousbutton}>&lt;</button>
                    <button className="next_btn" onClick={foryoucourseNextbutton}>&gt;</button>
                    <div className="homecards-foryou">
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
            
        </div>

    );
}
 
export default Home;