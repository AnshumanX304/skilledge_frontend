import './home.css';
import React from 'react';
import home_demo from './images/home_demo.png';
import Card from './card.jsx';

const Home = () => {

    const box=document.querySelector('.homecards-popularcourses');

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


    const box1=document.querySelector('.homecards-foryou');

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