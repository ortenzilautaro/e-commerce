import { Link } from "react-router-dom";
import "../../styles/navbar.css";
import CartWidget from "../CartWidget/CartWidget";
import LogoPanaderia from "../../assets/logo-panaderia.png";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to={"/"} className="link-img">
        <img src={LogoPanaderia} alt="MiaMiga" className="logo-panaderia" />
      </Link>
      <div className="nav">
        <ul>
          <li>
            <Link to={"/"}>Inicio</Link>
          </li>
          <li>
            <Link to={"/productos"}>Productos</Link>
          </li>
          <li>
            <Link to={"/nosotros"}>Nosotros</Link>
          </li>
        </ul>
        <CartWidget />
      </div>
    </nav>
  );
}

export default Navbar;
