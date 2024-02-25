import './vidtemplate3.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay} from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';
import { useEffect,useState,useContext } from 'react';
import AuthContext from '../Components/shared/authContext';

const Vidtemplate = (props) => {

    const[lesson,setLesson]=useState('');

    const { getvideo } = useContext(AuthContext);
    useEffect(()=>{
        getVideo()

    },[])

    async function getVideo(){
        console.log(props);
        const id=props.id;
        console.log(id);
        let payload={
            id
        }
        await getvideo(payload)
        .then((res)=>{
            console.log(res.data.videoDetails.lesson);
            setLesson(res.data.videoDetails.lesson);

        })
        .catch((err)=>{
            console.log(err);
            alert(err.data);
        })
        

    }

    return (
        <>
            <Link to={'/eduhome/video/'+props.id} style={{ textDecoration: 'none' }}><div id='courseoverview_section3'>
                <div>
                {lesson}
                </div>
                <div>
                <FontAwesomeIcon  icon={faPlay}></FontAwesomeIcon>
                </div>
            </div></Link>
        </>
      );
}
 
export default Vidtemplate;