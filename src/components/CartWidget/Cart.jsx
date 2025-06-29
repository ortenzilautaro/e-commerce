import { useContext, useState, useEffect } from "react";
import { DataContext } from "../../context/context";
import { Link } from "react-router-dom";
import "../../styles/cart.css";

function Cart() {
  const { productosCarrito, setProductosCarrito } = useContext(DataContext);
  const [total, setTotal] = useState(0);

  const BorrarProducto = (nombreProducto) => {
    const nuevosProductos = productosCarrito.filter(
      (prod) => prod[0] !== nombreProducto
    );
    setProductosCarrito(nuevosProductos);
  };

  const incrementarCantidad = (nombreProducto) => {
    const nuevosProductos = productosCarrito.map((prod) => {
      if (prod[0] === nombreProducto) {
        return [prod[0], prod[1], prod[2] + 1, prod[3]];
      }
      return prod;
    });
    setProductosCarrito(nuevosProductos);
  };

  const comprar = () => {
    setProductosCarrito([]);
  };

  const decrementarCantidad = (nombreProducto) => {
    const nuevosProductos = productosCarrito.map((prod) => {
      if (prod[0] === nombreProducto && prod[2] > 1) {
        return [prod[0], prod[1], prod[2] - 1, prod[3]];
      }
      return prod;
    });
    setProductosCarrito(nuevosProductos);
  };

  useEffect(() => {
    const nuevoTotal = productosCarrito.reduce(
      (acumulado, prod) => acumulado + prod[1] * prod[2],
      0
    );
    setTotal(nuevoTotal);
  }, [productosCarrito]);

  const borrarCarrito = () => {
    setProductosCarrito([]);
  };
  return (
    <>
      {productosCarrito.length > 0 ? (
        <>
          <h2>Carrito de compras</h2>
          <div className="productos-carrito">
            <ul>
              {productosCarrito.map((prod) => (
                <li className="producto-li" key={prod[0]}>
                  <img src={prod[3]} alt={prod[0]} className="li-img" />
                  <div className="div-prod">
                    <h3 className="cart-h3">{prod[0]}</h3>
                    <h4 className="cart-h4">
                      El precio total por "<span>{prod[2]}</span>" productos, es
                      de $ {prod[2] * prod[1]}
                    </h4>
                    <div className="inputs-botones">
                      <input
                        className="botonera"
                        type="button"
                        value="Borrar 1 producto"
                        onClick={() => decrementarCantidad(prod[0])}
                      />
                      <input
                        className="botonera"
                        type="button"
                        value="Borrar productos"
                        onClick={() => BorrarProducto(prod[0])}
                      />
                      <input
                        className="botonera"
                        type="button"
                        value="Agregar 1 producto"
                        onClick={() => incrementarCantidad(prod[0])}
                      />
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <h3>Total a pagar: ${total}</h3>
            <div>
              <input
                className="botonera"
                type="button"
                onClick={borrarCarrito}
                value="Vaciar carrito"
              />
              <Link
                type="input"
                className="link-boton"
                to={"/cart/confirm"}
                onClick={comprar}
              >
                Comprar ahora
              </Link>
            </div>
          </div>
        </>
      ) : (
        <div className="carrito-vacio">
          <h2>No hay productos en el carrito</h2>
          <img
            src="https://letrasrecortadas.com/carritoVacio.png"
            alt="carrito-vacio"
            style={{
              width: "500px",
              height: "500px",
            }}
          />
        </div>
      )}
    </>
  );
}

export default Cart;
