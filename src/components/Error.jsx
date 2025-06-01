import "../styles/error.css";

function Error() {
  return (
    <>
      <h2>Oops!</h2>
      <div className="div-error">
        <img
          src="https://cdn.iconscout.com/icon/premium/png-512-thumb/pagina-no-encontrada-5756991-4814923.png?f=webp&w=256"
          alt="error"
        />
        <div className="div-error-h">
          <h3> La Página que buscas, no se encontró</h3>
          <h4>Error code: 404</h4>
        </div>
      </div>
    </>
  );
}

export default Error;
