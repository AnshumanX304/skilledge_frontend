import { useEffect,useContext,useState } from "react";
import { useParams } from "react-router-dom";
import AuthContext from "../Components/shared/authContext";
import './watchCourse.css';
import Navbar3 from "../Components/nav3";
import Vidtemplate2 from "./vidtemplate2";
import VideoPlayer from "./videoPlayer";
const WatchCourse = () => {

    const _id=useParams();

    const {getcoursedetails}=useContext(AuthContext);
    // const [isLoading,setIsloading]=useState(false);

    const [topic,setTopic]=useState('');
    const [description,setDescription]=useState('');
    const [id,setId]=useState(_id.key);
    const [detailed_description,setDetailed_description]=useState('');
    const [lessons,setLessons]=useState([]);

    

    useEffect(()=>{
        // console.log(_id);

        setId(_id.key);
        console.log(id);
        
    },[_id])


    const {getvideo}=useContext(AuthContext);
    useEffect(()=>{
        getVideo();
    },[getVideo])




    async function getVideo(){
        const payload={
            id    
        }
        // console.log(id);
        await getvideo(payload)
        .then((res)=>{
            const data=res.data;
            const courseid=data.videoDetails.courseid;
            // console.log(courseid);
            getcourseDetails(courseid);
            

        })
        .catch((err)=>{
            console.log(err);

        })    
    }

    async function getcourseDetails(id){
        let payload={
            id
        }
        // console.log(id);
        // setIsloading(true);
        await getcoursedetails(payload)
        .then((res)=>{
            const details=res.data.coursedetail;
            // console.log(details);
            
            setTopic(details.topic);
            setDescription(details.description);
            setDetailed_description(details.detailed_description);
            setLessons(details.lessons);
           
            
            
            
          
            
        })
        .catch((err)=>{
            console.log(err);
            // setIsloading(false);

        })
    }

    function expandarray(idval){
        return (
            <Vidtemplate2
                key={idval}
                id={idval}  
            />
          );
        
    }


    return ( 
        <>
            <Navbar3/>
            <div className="videoplayer">
                <VideoPlayer key={id} videoId={id}/>
            </div>
            
            <div className="watchcourse_content">
                <div className="watchcourse_content1">
                    <div className="watchcourse_description">
                        <p>Info</p>
                        <h3>Descripton</h3>
                        <p className='desctitles2content'>{detailed_description}</p>
                    </div>

                </div>
                <div className="watchcourse_content2">
                    <p>Catalog</p>
                    <div>
                        {lessons.map(expandarray)}
                    </div>

                </div>
            </div>
        </>
    );
}
 
export default WatchCourse;