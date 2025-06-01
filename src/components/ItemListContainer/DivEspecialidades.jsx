import { Link } from "react-router-dom";
function DivEspecialidades({
  especialidades,
  texto,
  icono,
  iconoAlt,
  imagen,
  imagenAlt,
  order1,
  order2,
}) {
  return (
    <section className="seccion-especialidad">
      <div>
        <div className="especialidad" style={{ order: order1 }}>
          <Link
            to={`/productos/${especialidades.toLowerCase()}`}
            className="mi-link"
          >
            <img src={icono} alt={iconoAlt} />
          </Link>
          <Link
            to={`/productos/${especialidades.toLowerCase()}`}
            className="mi-link"
          >
            <h3>{especialidades}</h3>
          </Link>
          <Link
            to={`/productos/${especialidades.toLowerCase()}`}
            className="mi-link"
          >
            <p>{texto}</p>
          </Link>
        </div>
        <Link
          to={`/productos/${especialidades.toLowerCase()}`}
          className="mi-link"
          style={{ order: order2 }}
        >
          <img src={imagen} alt={imagenAlt} />
        </Link>
      </div>
    </section>
  );
}

export default DivEspecialidades;
