function InputCount() {
  return (
    <div className="input-count">
      <h3>Cantidad:</h3>
      <input type="number" className="input-number" min={0} />
      <input
        type="button"
        value="Agregar al carrito"
        className="input-button"
      />
    </div>
  );
}

export default InputCount;
