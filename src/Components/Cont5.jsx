import "../Components/Cont5.css";
import line from "../assets/Line-Design.svg";
import c51 from "../assets/c51.jpg"
import c52 from "../assets/c52.webp"
import c53 from "../assets/c53.webp"
import s1 from "../assets/s1.webp"
import s2 from "../assets/s2.jpg"
import s3 from "../assets/s3.webp"


export default function Cont5() {
  return (
    <div>
      <div className="cont5">
        <h1>Top Sellers</h1>
        <p>Love the most to bought the most</p>
        <img src={line} alt="" />

        <h1>New For You!</h1>
        <p>Our latest releases, just for you !</p>
        <img src={line} alt="" />

        <div className="cont5smallthree">
          <div className="c5sm3"><img src={c51} alt="error"/><a href=""><button>Explore More</button></a></div>
          <div className="c5sm3"><img src={c52} alt="error"/><a href=""><button>Explore More</button></a></div>
          <div className="c5sm3"><img src={c53} alt="error"/><a href=""><button>Explore More</button></a></div>
        </div>

      <br/><br/><br/><br/>
        
        <h1>Shop By Gender</h1>
        <p>First-class jewelry for first-class Men, Women & Children.</p>
        <img src={line} alt="" />

        <div className="cont5smallthree">
          <div className="c5sm3"><img src={s1} alt="error"/><a href=""><button>Explore More</button></a></div>
          <div className="c5sm3"><img src={s2} alt="error"/><a href=""><button>Explore More</button></a></div>
          <div className="c5sm3"><img src={s3} alt="error"/><a href=""><button>Explore More</button></a></div>
        </div>


      </div>

    </div>
  )
}
