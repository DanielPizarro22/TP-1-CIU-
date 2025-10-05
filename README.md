Readme TP 1 - Grupo 12

## ⚙️ Stacks utilizados  

- **React** — para la construcción de la interfaz con componentes.  
- **React Router DOM** — para el manejo de rutas sin recargar la página.  
- **Vite** — fácil integración con React y entorno rápido de desarrollo.  
- **React Bootstrap** — para los componentes visuales.  
- **React Icons** — utilizados para los íconos de redes sociales.  
- **JavaScript y CSS** — para la lógica y los estilos personalizados.

Ejecución:

La pagina web se puede visualizar desde https://danielpizarro22.github.io/TP-1-CIU-/, no obstante si se desea ejecutar localmente hay que tener instado npm:

npm install || Para instalar
npm run dev || Para correr localmente

## 📁 Archivos .jsx más importantes  

- **src/components/Banner.jsx** — Carrusel de portada.  
- **src/components/NavigationBar.jsx** — Navbar con links a Inicio, Carta, Contacto, Nosotros y Carrito, e incluye manejo de modo oscuro.  
- **src/components/Footer.jsx** — Pie de página con descripción.  
- **src/Pages/Carta.jsx** — Manejo de la lista de productos (array en el archivo), filtros por categoría, buscador y función para agregar al pedido.  
- **src/Pages/Carrito.jsx** — Manejo del carrito: lista de productos, suma y resta de items, cálculo del total del pedido y persistencia del carrito.  
- **src/Pages/Contacto.jsx** — Formulario de reservas con validaciones mínimas (regex de email). El dato no persiste.  
- **src/Pages/Inicio.jsx** — Portada que renderiza el Banner.  
- **src/App.jsx** — Maneja la app:  
  - Define rutas con react-router-dom y mantiene el estado global del carrito (`useState`).  
  - Maneja las funciones principales del carrito (agregar, eliminar y actualizar productos) y se las pasa a las páginas de Carta y Carrito.  
  - Coloca el Navbar arriba y el Footer abajo en todas las rutas.  
- **src/main.jsx** — Bootstrap de React: monta la app en `root`, envuelve con `BrowserRouter`, activa `React.StrictMode` e importa CSS de Bootstrap.