import "../Components/Cont7.css";
import m11 from "../assets/m11.jpg";
import m12 from "../assets/m12.webp";
import m13 from "../assets/m13.webp";
import m14 from "../assets/m14.jpg";
import m21 from "../assets/m21.jpg";
import m22 from "../assets/m22.webp";
import m23 from "../assets/m23.webp";
import m24 from "../assets/m24.webp";
import m31 from "../assets/m31.jpg";
import m32 from "../assets/m32.webp";
import m33 from "../assets/m33.webp";
import m34 from "../assets/m34.jpg";


export default function Cont7() {
  return (
    <div>
    <div className="cont7">
    
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
  </div>
  <div className="carousel-inner">

    <div className="carousel-item active">
    <div className="cont7part3"><img src={m11} alt="" /></div>
    <div className="cont7part3"><img src={m12} alt="" /></div>
    <div className="cont7part3"><img src={m13} alt="" /></div>
    <div className="cont7part3"><img src={m14} alt="" /></div>
    </div>

    <div className="carousel-item">
    <div className="cont7part3"><img src={m21} alt="" /></div>
    <div className="cont7part3"><img src={m22} alt="" /></div>
    <div className="cont7part3"><img src={m23} alt="" /></div>
    <div className="cont7part3"><img src={m24} alt="" /></div>
    </div>

    <div className="carousel-item">
    <div className="cont7part3"><img src={m31} alt="" /></div>
    <div className="cont7part3"><img src={m32} alt="" /></div>
    <div className="cont7part3"><img src={m33} alt="" /></div>
    <div className="cont7part3"><img src={m34} alt="" /></div>
    </div>

  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

    </div>
    </div>
  )
}
