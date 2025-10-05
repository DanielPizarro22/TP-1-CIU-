Readme TP 1 - Grupo 12

Stacks utilizados:

	•React — para la construcción de la interfaz con componentes.
	•React Router DOM — para el manejo de rutas sin recargar la página.
	•Vite — facil integracion con react y entorno rápido de desarrollo.
	•React Bootstrap — para los componentes visuales 
	•React Icons — los utilizamos para los iconos de redes sociales.
	•JavaScript y CSS.

Ejecución:

La pagina web se puede visualizar desde https://danielpizarro22.github.io/TP-1-CIU-/, no obstante si se desea ejecutar localmente hay que tener instado npm:

npm install || Para instalar
npm run dev || Para correr localmente

Archivos .jsx mas importantes

•src/components/Banner.jsx: Carrusel de portada
•src/components/NavigationBar.jsx: Navbar con links a Inicio-Carta-Contacto-Nosotros-Carrito y manejo de modo oscuro.
•src/components/Footer.jsx: Pie de pág con descripcion
•src/Pages/Carta.jsx: Manejo de la lista de productos (array en el archivo), filtros por categoría, buscador, func para agregar al pedido.
•src/Pages/Carrito.jsx: Manejo del carrito, Lista, suma y resta items. Tambien calcula el valor total (se agrego persistencia del carrito)
•src/Pages/Contacto.jsx: Manejo de form de reservas con validaciones minimas (regex de email). El dato no persiste.
•src/Pages/Inicio.jsx: Portada que renderiza el Banner.
•src/App.jsx: Maneja la app: 
	-define rutas con react-router-dom y mantiene el estado global del carrito (usestate) -
	-Maneja las funciones principales del carrito (agregar, eliminar y actualizar productos) y se las pasa a las paginas de Carta y Carrito para que puedan usarlas.
	-Coloca navbar arriba y footer abajo en todas las rutas.
•src/main.jsx: Bootstrap de React, monta la app en root, envuelve con BrowserRouter y activa React.StrictMode. Importa CSS de Bootstrap.