import { useContext, useState } from "react";
import { DataContext } from "../../context/context";

function InputCount({ nombre, precio, imagen }) {
  const { agregarCarrito, productosCarrito } = useContext(DataContext);
  const [caantidad, setCaantidad] = useState(0);

  const handlerClick = (e) => {
    e.preventDefault();
    const cantidad = parseInt(e.target.form.cantidad.value);
    const productoYaExiste = productosCarrito.some(
      (prod) => prod[0] === nombre
    );

    if (cantidad > 0 && !productoYaExiste) {
      agregarCarrito(nombre, precio, caantidad, imagen);
    }
  };

  const clickRestar = (e) => {
    e.preventDefault();
    const cantidad = parseInt(e.target.form.cantidad.value);
    if (cantidad === NaN) {
      setCaantidad(1);
    } else if (cantidad < 1) {
      return;
    } else {
      setCaantidad(cantidad - 1);
    }
  };
  const clickSumar = (e) => {
    e.preventDefault();
    const cantidad = parseInt(e.target.form.cantidad.value);
    if (cantidad === NaN) {
      setCaantidad(1);
    } else {
      setCaantidad(cantidad + 1);
    }
  };

  return (
    <form className="input-count">
      <h3>Cantidad:</h3>
      <div className="botones">
        <input
          type="button"
          value="-"
          onClick={clickRestar}
          className="input-number"
        />
        <input
          type="number"
          className="input-number"
          min={1}
          name="cantidad"
          value={caantidad}
          onChange={(e) => setCaantidad(Number(e.target.value))}
          required
        />
        <input
          type="button"
          value="+"
          onClick={clickSumar}
          className="input-number"
        />
      </div>
      <input
        type="submit"
        value="Agregar al carrito"
        className="input-button"
        onClick={handlerClick}
      />
    </form>
  );
}

export default InputCount;
