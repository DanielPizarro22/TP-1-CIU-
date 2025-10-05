import React from "react";
import "../components/nosotros.css";
import fundadora from '../assets/fundadora.png';
import barista from '../assets/barista.png';
import chef from '../assets/chef-pastelera.png';

const equipo = [
  {
    id: 1,
    nombre: "Ana Pérez",
    cargo: "Fundadora",
    foto: fundadora,
    descripcion: "Apasionada por el café artesanal y la experiencia del cliente, fundó Luna & Granos Café en 2015."
  },
  {
    id: 2,
    nombre: "Juan López",
    cargo: "Barista",
    foto: barista,
    descripcion: "Experto en métodos de extracción y latte art, siempre busca la taza perfecta para cada cliente."
  },
  {
    id: 3,
    nombre: "María Gómez",
    cargo: "Chef de Repostería",
    foto: chef,
    descripcion: "Crea dulces y pastelería artesanal con ingredientes frescos y recetas originales."
  },
];


export default function Nosotros() {
  return (
    <section className="nosotros">
      <div className="historia">
        <h2>Nuestra Historia</h2>
        <p>
          Luna & Granos Café nació en 2015 con la misión de ofrecer café artesanal
          de calidad, preparado con pasión y cuidado en cada detalle.
        </p>
      </div>

      <div className="valores">
        <h2>Nuestros Valores</h2>
        <ul>
          <li>Calidad y frescura en cada producto</li>
          <li>Responsabilidad ambiental y sostenibilidad</li>
          <li>Pasión por la experiencia del cliente</li>
          <li>Trabajo en equipo y compromiso</li>
        </ul>
      </div>

      <div className="equipo">
        <h2>Conoce al Equipo</h2>
        <div className="equipo-grid">
          {equipo.map((miembro) => (
            <div key={miembro.id} className="miembro-card">
              <img src={miembro.foto} alt={miembro.nombre} />
              <h3>{miembro.nombre}</h3>
              <p>{miembro.cargo}</p>
              <p className="descripcion-miembro">{miembro.descripcion}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
