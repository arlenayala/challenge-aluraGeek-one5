
import { productoServicios } from "../servicios/productos-servicios.js";

const nuevoProducto = (imagen, nombre, precio, id) => {
  const card = document.createElement("div");
  const contenido = `
    <div class="galeria1__productos-lista">
      <img src="${imagen}" alt="imagen-producto1" class="galeria1__productos-imagen">
      <h2 class="galeria1__productos-titulo">${nombre}</h2>
      <p class="galeria1__producto-precio">${precio}</p>
      <button class="galeria1__productos-button eliminar-btn" data-id="${id}">Eliminar</button>
      <button class="galeria1__productos-button editar-btn" data-id="${id}">Editar</button>
    </div>`;
  card.innerHTML = contenido;
  card.dataset.id = id;
  return card;
};

const productos = document.querySelector("[data-product]");


async function eliminarProducto(id) {
  try {
    await productoServicios.eliminarProducto(id);
    mostrarProductos();
  } catch (error) {
    console.error("Error al eliminar el producto:", error);
  }
}

// Función para mostrar los productos
async function mostrarProductos() {
  productos.innerHTML = ""; // Limpiamos el contenido anterior

  try {
    const productosData = await productoServicios.listaProductos();
    productosData.forEach(({ imagen, nombre, precio, id }) => {
      const nuevaLinea = nuevoProducto(imagen, nombre, precio, id);
      productos.appendChild(nuevaLinea);

     
      const eliminarBtn = nuevaLinea.querySelector(".eliminar-btn");
      eliminarBtn.addEventListener("click", () => eliminarProducto(id));

      // Agregar evento para el botón Editar (puedes redirigir a una página de edición)
      const editarBtn = nuevaLinea.querySelector(".editar-btn");
      editarBtn.addEventListener("click", () => {
        window.location.href="editarProducto.html?id=" + id
        console.log("Editar producto:", id);
        

        // Aquí puedes redirigir a una página de edición de producto o mostrar un formulario de edición
      });
    });
  } catch (error) {
    console.error("Error al obtener los productos:", error);
  }
}

mostrarProductos();
