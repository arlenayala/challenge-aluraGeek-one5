import { productoServicios } from "../servicios/productos-servicios.js";

const form=document.querySelector("[data-form-add]")

form.addEventListener("submit" , (evento)=>{
    evento.preventDefault();

    const url = document.querySelector("[data-url]").value
    const nombre = document.querySelector("[data-nombre]").value
    const precio = document.querySelector("[data-precio]").value

    console.log("Datos del formulario:", url, nombre, precio); 

    productoServicios.crearProducto(url,nombre,precio,)
    .then(respuesta=> {
        window.location.href="registro_completado.html"
        
        console.log(respuesta)
    }).catch(error=> {
        window.location.href="error.html"
    })



})










