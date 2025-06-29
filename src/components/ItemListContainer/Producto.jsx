import { Link } from "react-router-dom";
import InputCount from "./InputCount";
import { useContext, useEffect } from "react";
import { DataContext } from "../../context/context";

function Producto({ producto, index, especialidadKey }) {
  const { setImgProducto } = useContext(DataContext);

  return (
    <div key={index} className="div-card">
      <img src={producto.imagen} alt={producto.alt} />
      <h4>{producto.nombre}</h4>
      <p>${producto.precio}</p>
      <InputCount
        nombre={producto.nombre}
        precio={producto.precio}
        imagen={producto.imagen}
      />
      <Link
        to={`/productos/${especialidadKey}/${producto.nombre
          .toLowerCase()
          .replace(/\s+/g, "_")}`}
      >
        Ver más
      </Link>
    </div>
  );
}

export default Producto;
