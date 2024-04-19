import "../Components/Cont8.css";
import line from "../assets/Line-Design.svg"
import k1 from "../assets/wh.jpg";
import k2 from "../assets/appoint.png";
import k3 from "../assets/vdcall.png";



export default function Cont8() {
  return (
    <div>
      <div className="cont8main">
        <h1>Connect With Us</h1>
        <p>We are always available to guide you at your convenience.</p>
        <img src={line} alt="error" />
        <div className="smallofcont8">

        <div className="smallcont8n"><div className="hoc8"><h4>Connect On</h4><h3>Whatsapp</h3><a href=""><button>Connect</button></a></div><div className="hoc8"><img src={k1} alt="" /></div></div>
        <div className="smallcont8n"><div className="hoc8"><h4>Book An</h4><h3>Appointment</h3><a href=""><button>Connect</button></a></div><div className="hoc8"><img src={k2} alt="" /></div></div>
        <div className="smallcont8n"><div className="hoc8"><h4>Schedule A</h4><h3>Vedio Call</h3><a href=""><button>Connect</button></a></div><div className="hoc8"><img src={k3} alt="" /></div></div>
        
        </div>

      </div>

    </div>
  )
}
