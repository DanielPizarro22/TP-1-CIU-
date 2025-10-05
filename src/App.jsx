import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";
import Inicio from "./pages/Inicio";
import Carta from "./pages/Carta";
import Contacto from "./pages/Contacto";
import Carrito from "./pages/Carrito";
import Nosotros from "./pages/Nosotros";
import "./components/FondoDePagina.css";

function App() {
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (producto) => {
    setCarrito((prev) => {
      const existe = prev.find((p) => p.id === producto.id);
      if (existe) {
        return prev.map((p) =>
          p.id === producto.id ? { ...p, cantidad: p.cantidad + 1 } : p
        );
      } else {
        return [...prev, { ...producto, cantidad: 1 }];
      }
    });
  };

  const eliminarDelCarrito = (id) => {
    setCarrito((prev) => prev.filter((p) => p.id !== id));
  };

  const actualizarCantidad = (id, nuevaCantidad) => {
    setCarrito((prev) =>
      prev.map((p) =>
        p.id === id
          ? { ...p, cantidad: nuevaCantidad > 0 ? nuevaCantidad : 1 }
          : p
      )
    );
  };

  const vaciarCarrito = () => {
    setCarrito([]);
  };

  return (
    <div className="fondo-general">
      <NavigationBar />

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route
          path="/Carta/:id?"
          element={<Carta agregarAlCarrito={agregarAlCarrito} />}
        />
        <Route path="/Contacto" element={<Contacto />} />
        <Route
          path="/Carrito"
          element={
            <Carrito
              carrito={carrito}
              eliminarDelCarrito={eliminarDelCarrito}
              actualizarCantidad={actualizarCantidad}
              vaciarCarrito={vaciarCarrito}
            />
          }
        />
        <Route path="/Nosotros" element={<Nosotros />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
