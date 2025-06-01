import { Link } from "react-router-dom";
import InputCount from "./InputCount";

function Producto({ producto, index, especialidadKey }) {
  return (
    <div key={index} className="div-card">
      <img src={producto.imagen} alt={producto.alt} />
      <h4>{producto.nombre}</h4>
      <p>${producto.precio}</p>
      <InputCount />
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
