import { createContext, useEffect, useState } from "react";

export const DataContext = createContext();

export const DataContextProvider = function (props) {
  const [productosCarrito, setProductosCarrito] = useState(() => {
    const guardado = localStorage.getItem("productos");
    return guardado ? JSON.parse(guardado) : [];
  });
  class Producto {
    constructor(nombre, precio, cantidad, imagen) {
      this.nombre = nombre;
      this.precio = precio;
      this.cantidad = cantidad;
      this.imagen = imagen;
    }
  }
  const agregarCarrito = function (nombre, precio, cantidad, imagen) {
    const producto = new Producto(nombre, precio, cantidad, imagen);
    setProductosCarrito((prev) => [
      ...prev,
      [producto.nombre, producto.precio, producto.cantidad, producto.imagen],
    ]);
  };
  useEffect(() => {
    localStorage.setItem("productos", JSON.stringify(productosCarrito));
  }, [productosCarrito]);
  return (
    <DataContext.Provider
      value={{ productosCarrito, agregarCarrito, setProductosCarrito }}
    >
      {props.children}
    </DataContext.Provider>
  );
};
