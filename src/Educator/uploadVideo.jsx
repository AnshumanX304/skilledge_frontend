import  './uploadVideo.css';
import Nav3 from '../Components/nav3';
import {useEffect} from 'react';
import Cardimage from '../Pages/images/cardimage.png';



const UploadVideo = (props) => {

    const {page,setPage,setVideo,lesson,setLesson,handleSubmit}=props;

    function changepage(){
        setPage(!page);
    }

    function handleLesson(e){
        setLesson(e.target.value);
    }

    function handleVideo(e){
        setVideo(e.target.files[0]);
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
                       
                        <form >
                            <input className="uploadvideo_right_form_input1" type="text" placeholder='Name of Lesson'
                                name="lesson"
                                onChange={handleLesson}
                                value={lesson}
                            />
                            <br/><br/><br/>
                            <label className="uploadvideo_right_form_label2" for="video">Add Video lesson -:</label>
                            <br/><br/>

                            <input className="spaceleftinput-uploadvideo "id="uploadvideo-thumbnail"
                                accept="video/*"
                                required
                                name="video"
                                onChange={handleVideo}
                                type="file" 
                                placeholder="Add Thumbnail">
                                
                            </input>

                           

                            <button style={{width:"103%", margin:"2%"}} className="loginsubmit" onClick={handleSubmit}>Host Course</button>
                            <button style={{width:"103%", margin:"2%"}} id='rbtl' onClick={changepage}> 
                               
                               Back
                           </button>

                           
                        </form>
                    </div>

                </div>
            </div>
           
        </>
     );
}
 
export default UploadVideo;