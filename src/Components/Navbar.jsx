import "../Components/Navbar.css";
import logo from "../assets/mdgroup.jpg"

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-white bg-white">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><img id="logo" src={logo} alt="error" /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span id="toggleicon" className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a  className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
      
        <li className="nav-item">
          <a style={{color:"black"}} className="nav-link active" aria-current="page" href="#">Diamonds</a>
        </li>
      
        <li className="nav-item">
          <a style={{color:"black"}} className="nav-link active" aria-current="page" href="#">Earrings</a>
        </li>
        <li className="nav-item">
          <a style={{color:"black"}} className="nav-link active" aria-current="page" href="#">Chains</a>
        </li>
        <li className="nav-item">
          <a style={{color:"black"}} className="nav-link active" aria-current="page" href="#">Rings</a>
        </li>
      
        <li className="nav-item">
          <a style={{color:"black"}} className="nav-link active" aria-current="page" href="#">Neckless</a>
        </li>
      
        <li className="nav-item dropdown">
          <a style={{color:"black"}} className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            All Jewellary
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Rings</a></li>
            <li><a className="dropdown-item" href="#">Earrings</a></li>
            <li><a className="dropdown-item" href="#">Neckless</a></li>
            <li><a className="dropdown-item" href="#">Nosepin</a></li>
          </ul>
        </li>
      </ul>

      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
