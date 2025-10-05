import React from "react";
import { useNavigate } from "react-router-dom";
import "../components/Carrito.css";

export default function Carrito({ carrito, eliminarDelCarrito, actualizarCantidad, vaciarCarrito }) {
  const navigate = useNavigate();

  const total = carrito.reduce(
    (acc, producto) => acc + producto.precio * producto.cantidad,
    0
  );

  const finalizarPedido = () => {
    const confirmado = window.confirm("¿Deseas confirmar tu pedido?");
    if (confirmado) {
      alert("¡Pedido confirmado! Gracias por tu compra.");
      vaciarCarrito();
      navigate("/carta");
    }
  };

  return (
    <div className="carrito-container">
      <h2>
        Tu Pedido{" "}
        {carrito.length > 0 && (
          <span className="contador-carrito">{carrito.length}</span>
        )}
      </h2>

      {carrito.length === 0 ? (
        <p className="carrito-vacio">Aún no agregaste productos ☕</p>
      ) : (
        <>
          <ul className="carrito-lista">
            {carrito.map((producto) => (
              <li key={producto.id} className="carrito-item">
                <img src={producto.imagen} alt={producto.nombre} />
                <div className="carrito-detalle">
                  <h4>{producto.nombre}</h4>
                  <p>Precio unitario: ${producto.precio}</p>

                  <div className="carrito-cantidad">
                    <button
                      onClick={() =>
                        actualizarCantidad(producto.id, producto.cantidad - 1)
                      }
                      disabled={producto.cantidad <= 1}
                    >
                      -
                    </button>
                    <span>{producto.cantidad}</span>
                    <button
                      onClick={() =>
                        actualizarCantidad(producto.id, producto.cantidad + 1)
                      }
                    >
                      +
                    </button>
                  </div>

                  <p>Subtotal: ${producto.precio * producto.cantidad}</p>
                </div>
                <button
                  className="carrito-eliminar"
                  onClick={() => eliminarDelCarrito(producto.id)}
                  title="Eliminar del carrito"
                >
                  ✖
                </button>
              </li>
            ))}
          </ul>

          <div className="carrito-total">
            <h3>Total: ${total}</h3>
            <button className="carrito-comprar" onClick={finalizarPedido}>
              Finalizar Pedido
            </button>
          </div>
        </>
      )}
    </div>
  );
}
