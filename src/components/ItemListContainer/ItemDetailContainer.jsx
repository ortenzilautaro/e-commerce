import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "../../styles/productos.css";
import { Navigate } from "react-router-dom";
import InputCount from "./InputCount";
import { getFirestore, getDocs, collection } from "firebase/firestore";

function ItemDetailContainer() {
  const { producto, especialidades } = useParams();
  const [productos, setProductos] = useState({});

  const db = getFirestore();

  useEffect(() => {
    async function fetchProductos() {
      try {
        const productosRef = collection(db, "productos");
        const querySnapshot = await getDocs(productosRef);

        const data = {};
        querySnapshot.forEach((doc) => {
          data[doc.id] = doc.data();
        });

        setProductos(data);
      } catch (error) {
        console.error("Error al obtener productos:", error);
      }
    }

    fetchProductos();
  }, []);

  if (!productos[especialidades]) {
    return (
      <>
        <p>Cargando...</p>
      </>
    );
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
                    <InputCount
                      nombre={p.nombre}
                      precio={p.precio}
                      imagen={p.imagen}
                    />
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
