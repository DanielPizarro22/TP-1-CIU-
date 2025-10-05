import React, { useState } from "react";
import '../components/CartaDeProductos.css';
import expresso from '../assets/expresso.png';
import latte from '../assets/latte.png';
import teVerde from '../assets/te-verde.png';
import chocolate from '../assets/chocolate-caliente.png';
import croissant from '../assets/Croissants.png';
import muffin from '../assets/muffin.png';
import panBanana from '../assets/pan-de-banana.png';
import galletas from '../assets/galletas.png';

const productos = [
  { id: 1, nombre: "Café Espresso", precio: 150, categoria: "café", imagen: expresso, descripcion: "Café intenso y aromático" },
  { id: 2, nombre: "Café Latte", precio: 180, categoria: "café", imagen: latte, descripcion: "Café suave con leche" },
  { id: 3, nombre: "Té Verde", precio: 120, categoria: "té", imagen: teVerde, descripcion: "Refrescante y saludable" },
  { id: 4, nombre: "Chocolate Caliente", precio: 200, categoria: "té", imagen: chocolate, descripcion: "Dulce y cremoso" },
  { id: 5, nombre: "Croissant", precio: 90, categoria: "pastelería", imagen: croissant, descripcion: "Fresco y hojaldrado" },
  { id: 6, nombre: "Muffin de Chocolate", precio: 110, categoria: "pastelería", imagen: muffin, descripcion: "Delicioso y esponjoso" },
  { id: 7, nombre: "Pan de Banana", precio: 100, categoria: "pastelería", imagen: panBanana, descripcion: "Casero y dulce" },
  { id: 8, nombre: "Galletas", precio: 70, categoria: "pastelería", imagen: galletas, descripcion: "Crujientes y sabrosas" },
];

export default function Productos({ agregarAlCarrito }) {
  const [mensaje, setMensaje] = useState("");
  const [filtro, setFiltro] = useState("todos");
  const [busqueda, setBusqueda] = useState("");

  const handleAgregar = (producto) => {
    agregarAlCarrito(producto);
    setMensaje(`${producto.nombre} agregado al pedido ✅`);
    setTimeout(() => setMensaje(""), 4000);
  };

  const categorias = ["todos", "café", "té", "pastelería"];

  const productosFiltrados = productos.filter((producto) => {
    const coincideCategoria = filtro === "todos" || producto.categoria === filtro;
    const coincideBusqueda = producto.nombre.toLowerCase().includes(busqueda.toLowerCase());
    return coincideCategoria && coincideBusqueda;
  });

  return (
    <section className="carta-productos">
      <h2>Nuestra Carta</h2>

      {mensaje && <div className="mensaje-confirmacion">{mensaje}</div>}

      <div className="filtros-botones">
        {categorias.map((cat) => (
          <button
            key={cat}
            className={filtro === cat ? "activo" : ""}
            onClick={() => setFiltro(cat)}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      <div className="buscador">
        <input
          type="text"
          placeholder="Buscar producto..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />
      </div>

      <div className="productos-grid">
        {productosFiltrados.map((producto) => (
          <div
            key={producto.id}
            className="producto-card"
            onClick={(e) => {
              if (window.matchMedia("(hover: none) and (pointer: coarse)").matches) {
                e.currentTarget
                  .querySelector(".producto-card-inner")
                  .classList.toggle("rotado");
              }
            }}
          >
            <div className="producto-card-inner">
              <div className="producto-card-front">
                <img src={producto.imagen} alt={producto.nombre} />
                <h3>{producto.nombre}</h3>
                <p>${producto.precio}</p>
              </div>
              <div className="producto-card-back">
                <h3>Detalles</h3>
                <p>{producto.descripcion}</p>
                <button onClick={() => handleAgregar(producto)}>
                  Agregar al pedido
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
