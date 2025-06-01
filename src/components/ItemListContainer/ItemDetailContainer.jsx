import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "../../styles/productos.css";
import { Navigate } from "react-router-dom";
import InputCount from "./InputCount";

function ItemDetailContainer() {
  const { producto, especialidades } = useParams();
  const [productos, setProductos] = useState({});

  useEffect(() => {
    try {
      async function hacerFetch() {
        const pedirDatos = await fetch("/src/public/productos.json");
        const datos = await pedirDatos.json();
        setProductos(datos);
      }
      hacerFetch();
    } catch {
      console.error(`Error al cargar productos: `, error);
    }
    return () => {};
  }, []);

  if (!productos[especialidades]) {
    return <p>No existe este producto</p>;
  }

  const productoEncontrado = Object.entries(productos[especialidades])
    .flatMap(([categoria, produc]) => produc)
    .find(
      (p) =>
        p.nombre.toLowerCase().replace(/\s+/g, "_") ===
        producto.replace(/\s+/g, "_")
    );

  if (productoEncontrado === undefined) {
    return <Navigate to="/error" />;
  }

  return (
    <>
      {Object.entries(productos[especialidades]).map(([categoria, produc]) =>
        produc.map(
          (p) =>
            p.nombre.toLowerCase().replace(/\s+/g, "_") ===
              producto.replace(/\s+/g, "_") && (
              <div key={p.nombre}>
                <Link to={`/productos/${especialidades}`}>
                  <img
                    className="flechita"
                    src="https://cdn.pixabay.com/photo/2014/06/05/15/04/undo-362766_1280.png"
                    alt="Flecha volver"
                  />
                </Link>
                <h2>{p.nombre}</h2>
                <div className="detalle">
                  <img src={p.imagen} alt={p.nombre} />
                  <div className="descripcion">
                    <h3>{p.descripcion}</h3>
                    <p>Precio: ${p.precio}</p>
                    <InputCount />
                  </div>
                </div>
              </div>
            )
        )
      )}
    </>
  );
}

export default ItemDetailContainer;
