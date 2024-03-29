import "../Components/Cont4.css";
import c41 from "../assets/c41.webp";
import c42 from "../assets/c42.webp";
import c43 from "../assets/c43.webp";


export default function Cont4() {
  return (
    <div>
      
      <div className="cont4">
        <h1>Shop By Collections</h1>
        <p>Whatever the occasion, we have got a beautiful piece of jewellery for you.</p>
        <div className="cont4percent">
        <div className="cont4cards"><img src={c41} alt=""/><div className="explore"><div id="nn" className="contofmin"><h4>string it </h4></div><div className="contofmin"><a href="">Explore More</a></div></div></div>
        <div className="cont4cards"><img src={c42} alt=""/><div className="explore"><div id="nn" className="contofmin"><h4>Italian</h4></div><div className="contofmin"><a href="">Explore More</a></div></div></div>
        <div className="cont4cards"><img src={c43} alt=""/><div className="explore"><div id="nn" className="contofmin"><h4> Rings</h4></div><div className="contofmin"><a href="">Explore More</a></div></div></div>
        </div>

      </div>

    </div>
  )
}