import  './uploadVideo.css';
import Nav3 from '../Components/nav3';
import {useState,useContext} from 'react';
import { Navigate, useParams } from 'react-router-dom';
import Cardimage from '../Pages/images/cardimage.png';
import AuthContext from '../Components/shared/authContext';





const UploadLesson = () => {

    const id=useParams();
    const {addlesson}=useContext(AuthContext);
    const [lesson,setLesson]=useState('');
    const [video,setVideo]=useState('');
    
    function handleLesson(e){
        setLesson(e.target.value);
    }

    function handleVideo(e){
        setVideo(e.target.files[0]);
    }


    async function handleSubmits(e){
            e.preventDefault();
            const formData=new FormData();
            formData.append('lesson',lesson);
            formData.append('video',video);
            const payload={
                formData,
                id
            }
            console.log(payload);
       
            await addlesson(payload)
            .then((res)=>{
                console.log(res.data.success,res.data.msg)
                Navigate('./eduhome');
            })
            .catch((err)=>{
                console.log(err.response.data);
                alert(err.response.data.msg);
            })

    }

    




   
 
    return ( 
        <>
            <Nav3/>
            <div className="uploadvideo">
                <div className="uploadvideo_left">
                    <img src={Cardimage} height="100%" width="100%" alt="" />


                </div>
                <div className="uploadvideo_right">
                    <div>
                        <h1>Create Lessons</h1>
                       
                        <form onSubmit={handleSubmits}>
                            <input className="uploadvideo_right_form_input1" type="text" placeholder='Name of Lesson'
                                name="lesson"
                                onChange={handleLesson}
                                value={lesson}
                            />
                            <br/><br/><br/>
                            <label className="uploadvideo_right_form_label2" >Add Video lesson -:</label>
                            <br/><br/>

                            <input className="spaceleftinput-uploadvideo "id="uploadvideo-thumbnail"
                                accept="video/*"
                                required
                                name="video"
                                maxLength={100}
                                onChange={handleVideo}
                                type="file" 
                                placeholder="Add Thumbnail">
                                
                            </input>

                           

                            <button style={{width:"103%", margin:"2%"}} className="loginsubmit" >Host Course</button>
                           
                        </form>
                    </div>

                </div>
            </div>
           
        </>
     );
}
 
export default UploadLesson;