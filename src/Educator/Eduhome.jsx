// import courseList from './Eduhomecontent';
import './Eduhome.css';
import Navbar3 from '../Components/nav3';
import eduhomeimage from "./eduimages/sitting-8.png"
import { useEffect,useContext,useState} from 'react';
import Cookies from "js-cookie";
import axios from '../Components/shared/interceptor';
import Course from '../Components/CourseCard/CourseCard';
import AuthContext from '../Components/shared/authContext';
const Eduhome = () => {

    let { sendcourse } = useContext(AuthContext);
    const [courseList,setCourseList]=useState([]);
    
    useEffect(()=>{

        console.log(courseList);
        sendCourse();
       
    },[])
    
    function createList(course) {
        return (
          <Course
            key={course._id}
            imgpath={course.imgpath}
            topic={course.topic}
            description={course.description}
            categories={course.categories}
            price={course.price}
            lesson={course.lesson}
            vidpath={course.vidpath}

          />
        );
      }

        async function sendCourse(){
      
        
        await sendcourse()
        .then((res)=>{
            console.log(res.data.myCourses);
            setCourseList(res.data.myCourses);
        })
        .catch((err)=>{
            console.log(err);
        })

        }

    return ( 
        <>
            <Navbar3/>
            <div className="eduhome">
                <div className="eduhome-left">
                    {courseList.map(createList)}


                </div>
                <div className="eduhome-right">
                    <img src={eduhomeimage} height="350px" width="300px"></img>
                </div>
            </div>
            
        </>
     );
}
 
export default Eduhome;