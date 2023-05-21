// import courseList from './Eduhomecontent';
import './Eduhome.css';
import Navbar3 from '../Components/nav3';
import eduhomeimage from "./eduimages/sitting-8.png"
import { useEffect,useContext,useState} from 'react';
import Course from '../Components/CourseCard/CourseCard';
import AuthContext from '../Components/shared/authContext';
import Loader from '../loader';
const Eduhome = () => {

    const { sendcourse } = useContext(AuthContext);
    const [courseList,setCourseList]=useState([]);
    const [isLoading,setIsloading]=useState(false);
    
    useEffect(()=>{
        sendCourse();
    },[])
    
    function createList(course) {
        return (
          <Course
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
        );
      }

        async function sendCourse(){
            
        setIsloading(true);
        
        await sendcourse()
        .then((res)=>{
            // console.log(res.data.myCourses);
            setIsloading(false);
            setCourseList(res.data.myCourses);
            
            
           
            
        })
        .catch((err)=>{
            console.log(err);
            // setIsloading(false);
        })

        }

    return ( 
        <>
            <Navbar3/>
           {isLoading?<div className='eduhome-loader'><Loader/></div>:<div className="eduhome">
                <div className="eduhome-left">
                    {courseList.map(createList)}


                </div>
                <div className="eduhome-right">
                    <img src={eduhomeimage} height="350px" width="300px"></img>
                </div>
            </div>}
            
        </>
     );
}
 
export default Eduhome;