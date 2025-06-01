import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Producto from "./Producto";
import { Navigate } from "react-router-dom";

function ItemListContainer() {
  const { especialidades } = useParams();

  const [productos, setProductos] = useState(null);

  const especialidadKey = especialidades.toLowerCase().replace(/\s+/g, "_");

  useEffect(() => {
    try {
      async function hacerFetch() {
        const datos = await fetch("/src/public/productos.json");
        const datosJson = await datos.json();
        setProductos(datosJson);
      }
      hacerFetch();
    } catch {
      console.error(`Error al cargar productos: `, error);
    }
  }, []);

  if (productos === null) {
    return <p>Este producto no existe</p>;
  }

  const espEncontrada = Object.entries(productos)
    .flatMap(([esp, prod]) => esp)
    .find((e) => e === especialidadKey);

  if (espEncontrada === undefined) {
    return <Navigate to="/error" />;
  }

  return (
    <>
      <Link to={"/productos"}>
        <img
          className="flechita"
          src="https://cdn.pixabay.com/photo/2014/06/05/15/04/undo-362766_1280.png"
          alt="Flecha volver"
        />
      </Link>
      <h2>
        {especialidades.charAt(0).toUpperCase() + especialidades.slice(1)}
      </h2>
      {Object.entries(productos[especialidadKey]).map(
        ([categoria, productosCategoria]) => (
          <div key={categoria} className="div-categoria">
            <h3>
              {categoria
                .replace(/_/g, " ")
                .replace(/\b\w/g, (letra) => letra.toUpperCase())}
            </h3>
            <div className="div-productos">
              {productosCategoria.map((producto, index) => (
                <Producto
                  key={producto.id}
                  producto={producto}
                  index={index}
                  especialidadKey={especialidadKey}
                />
              ))}
            </div>
          </div>
        )
      )}
    </>
  );
}
export default ItemListContainer;
