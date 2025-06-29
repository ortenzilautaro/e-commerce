import { Link } from "react-router-dom";
import carrito from "../../assets/carrito-de-compras.png";
import { DataContext } from "../../context/context";
import { useContext } from "react";

function CartWidget() {
  const usoDataContext = useContext(DataContext);
  const numeroProductoCarrito = usoDataContext.productosCarrito.length;
  return (
    <Link to={"/cart"} className="carrito">
      <div className="nro-div">
        <img src={carrito} alt="Carrito de compras" className="logo-carrito" />
        <span className="nro-carrito">{numeroProductoCarrito}</span>
      </div>
    </Link>
  );
}

export default CartWidget;
