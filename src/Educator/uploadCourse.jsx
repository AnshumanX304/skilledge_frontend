import './uploadCourse.css'
import Nav3 from '../Components/nav3';
import {Link, useNavigate} from 'react-router-dom';
import AuthContext from '../Components/shared/authContext';
import Limage from './eduimages/limage.png'
import {useState,useContext} from 'react';
import UploadVideo from './uploadVideo';

    
const Uploadcourse = () => {
 
    const navigate=useNavigate();
    const [image,setImage]=useState('');
    const [topic,setTopic]=useState('');
    const [description,setDescription]=useState('');
    const [categories,setCategories]=useState('');
    const [price,setPrice]=useState('');
    const [page,setPage]=useState(false);    //false means first page and true means second page (video upload)
    const [lesson,setLesson]=useState('');
    const [video,setVideo]=useState('');
    

  const {uploadcoursedata} =useContext(AuthContext);

    function handleImage(e){
        // console.log(e.target.files);
        setImage(e.target.files[0]);

    }
    function handleTopic(e){
        setTopic(e.target.value);
    }
    function handleDescription(e){
        setDescription(e.target.value);
    }
    function handleCategories(e){
        setCategories(e.target.value);
    }
    function handlePrice(e){
        setPrice(e.target.value);
    }
    function changepage(){
        setPage(!page);
    }



    async function handleSubmit(e){
        e.preventDefault();
        const formData=new FormData();
        // console.log(image,topic,description,categories,price);
        formData.append('image',image);
        formData.append('topic',topic);
        formData.append('description',description);
        formData.append('categories',categories);
        formData.append('price',price);
        formData.append('lesson',lesson);
        formData.append('video',video);
        

        await uploadcoursedata(formData)
        .then((res)=>{
            console.log(res.data.success,res.data.msg);
            setPage(false);
            navigate('/eduhome');
        })
        .catch((err)=>{
            console.log(err.response.data);
            alert(err.response.data.msg);
        });


    }

    return ( 
        <>
        {page?<UploadVideo page={page} setPage={setPage} lesson={lesson} setLesson={setLesson} setVideo={setVideo} handleSubmit={handleSubmit}/>:
             <>
                    <Nav3/>
                    <div className="uploadcourse">
                        <div className="uploadcourse_leftsection">
                            <img id="limageid" src={Limage} alt="" width="90%" height="90%"/>
                            
                        </div>
                        <div className="uploadcourse_rightsection">
                            {/* <form  className="uploadcourseform" action="" onSubmit={handleSubmit}> */}
                            <form  className="uploadcourseform" action="">
        
                                <label for="thumbnail">Add Thumbnail</label>
        
                                <input className="spaceleftinput "id="uploadcourse-thumbnail" 
                                    accept="image/*"
                                    required
                                    name="image"
                                    type="file" 

                                    // value={image}
                                    placeholder="Add Thumbnail"
                                    onChange={handleImage}/>
        
                                
                                <label for="topic">Topic</label>
                                <input className="spaceleftinput " 
                                    required
                                    value={topic}
                        
                                    type="text"
                                    name="topic"
                                    placeholder="Create a topic for the course"
                                    onChange={handleTopic}
                                
                                />
                                <label for="description">Description</label>
                                <input className="spaceleftinput" id="uploadcourse_description" 
                                    required
                                    value={description}
                                    type="text"

                                    name="description"
                                    placeholder="Create a description for the course"
                                    onChange={handleDescription}
        
                                />
        
                                <select name="categories" 
                                    id="upload_categories"
                                    value={categories}
                                    
                                    required
                                    onChange={handleCategories}
                                >
        
                                    <option selected disabled>Categories</option>
                                    <option value="design">Designing</option>
                                    <option value="programming">Programming</option>
                                    <option value="music">Music</option>
                                    <option value="art">Art</option>
                                    <option value="editing">Editing</option>
                                    <option value="photography">Photography</option>
                                    <option value="others">Others</option>
                                </select>
        
                                <input className="spaceleftinput"
                                    required
                                    value={price}
                                    type="number"
                                    name="price"
                                
                                    placeholder="Add price"
                                    onChange={handlePrice}
        
                                />
        
                                <button style={{width:"425px" }} className="loginsubmit" onClick={changepage}> 
                                    
                                    Continue
                                </button>
        
                                {/* <Link to='/uploadvideo'><button style={{width:"425px" }} className="loginsubmit">
                                    Continue
                                </button></Link> */}
        
                                
                            </form>
                        </div>
                    </div>
            </>

        }
        
        </>
     );
}
 
export default Uploadcourse;