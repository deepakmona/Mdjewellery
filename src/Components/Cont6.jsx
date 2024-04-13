import "../Components/Cont6.css";
import { useState,useRef  } from "react";
import poster from "../assets/newposter.webp"
import vedio from "../assets/vedio.mp4";


export default function Cont6() {

    const videoRef = useRef(null);
    const [isPlaying] = useState(true);
  
    const handleVideoEnd = () => {
      // Loop the video when it ends
      videoRef.current.play();
    };

  return (
    <div>

    <div className="cont6">
        <div className="halfoftwocont61"><img src={poster} alt="" /></div><br/><br/>
        <div className="halfoftwocont62"><video ref={videoRef} autoPlay={isPlaying} muted  onEnded={handleVideoEnd} controls={false} src={vedio}></video></div>
    </div>      

    </div>
  )
}
