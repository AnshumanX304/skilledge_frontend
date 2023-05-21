import { useEffect ,useRef} from "react";

const VideoPlayer = (props) => {
    const videoRef=useRef(null);
    useEffect(()=>{



        if(videoRef.current){
            videoRef.current.pause();
            videoRef.current.removeAttribute('src');
            videoRef.current.load();

        }
    },[])

    return ( 
        <>
            <video ref={videoRef} width="100vw" height="50vh" controls autoPlay>
                <source src={"http://localhost:4000/user/watchvideos/"+props.videoId} type='video/mp4'/>
            </video>
        </>
     );
}
 
export default VideoPlayer;