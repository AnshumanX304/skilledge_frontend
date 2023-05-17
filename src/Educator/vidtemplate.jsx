import './vidtemplate.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay} from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';
import { useEffect } from 'react';
const Vidtemplate = (props) => {
   

    return (
        <>
            <Link to={'/eduhome/video/'+props.id} style={{ textDecoration: 'none' }}><div id='courseoverview_section'>
                <div>
                Course Overview
                </div>
                <div>
                <FontAwesomeIcon  icon={faPlay}></FontAwesomeIcon>
                </div>
            </div></Link>
        </>
      );
}
 
export default Vidtemplate;