import './uploadCourse.css'
import Nav3 from '../Components/nav3';
import Limage from './eduimages/limage.png'
const uploadCourse = () => {
    function handleSubmit(e){

    }
    return ( 
        <>
            <Nav3/>
            <div className="uploadcourse">
                <div className="uploadcourse_leftsection">
                    <img id="limageid" src={Limage} alt="" width="90%" height="90%"/>
                    
                </div>
                <div className="uploadcourse_rightsection">
                    <form  className="uploadcourseform" action="" onSubmit={handleSubmit}>

                        <label for="thumbnail">Add Thumbnail</label>

                        <input className="spaceleftinput "id="uploadcourse-thumbnail"
                            accept="image/*"
                            required
                            name="thumbnail"
                            type="file" 
                            placeholder="Add Thumbnail">
                        

                        
                        </input>

                        
                        <label for="topic">Topic</label>
                        <input className="spaceleftinput "
                            required
                            type="text"
                            name="topic"
                            placeholder="Create a topic for the course"
                        
                        />
                        <label for="description">Description</label>
                        <input className="spaceleftinput" id="uploadcourse_description" 
                            required
                            type="text"
                            name="description"
                            placeholder="Create a description for the course"

                        />

                        <select name="course_type" id="upload_categories" required>
                            <option selected disabled>Categories</option>
                            <option value="design">Designing</option>
                            <option value="programming">Programming</option>
                            <option value="music">Music</option>
                            <option value="art">Art</option>
                            <option value="editing">Editing</option>
                            <option value="photography">Photography</option>
                            <option value="others">Others</option>
                        </select>

                        <input className="spaceleftinput "
                            required
                            type="number"
                            name="Price"
                            placeholder="Add price"

                        />

                        <button style={{width:"425px" }} className="loginsubmit">
                            Continue
                        </button>

                        
                    </form>
                </div>
            </div>

        </>
     );
}
 
export default uploadCourse;