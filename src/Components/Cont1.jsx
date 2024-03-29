import "../Components/Cont1.css";
import slide1 from "../assets/s1.jpg"
import slide2 from "../assets/s2.jpg"
import slide3 from "../assets/s3.jpg"
import slide4 from "../assets/s4.jpg"
import slide5 from "../assets/s5.jpg"
import slide6 from "../assets/s6.jpg"

export default function Cont1() {
  return (
    <div>
      
      <div className="cont1">
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={slide1} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={slide2} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={slide3} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={slide4} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={slide5} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={slide6} className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</div>
    </div>
  )
}
