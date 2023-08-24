import { productoServicios } from "../servicios/productos-servicios.js";


document.addEventListener("DOMContentLoaded", () => {
    console.log("DOMContentLoaded event activated");
    const form = document.querySelector("[data-form-editar]")
  
    const obtenerInfomacion=async()=> {
        console.log("obteniendo");
        const url = new URL(window.location);
          const id = url.searchParams.get("id")
    
         if(id===null) {
             window.location.href="error.html"
    
        }
    
          const imagen= document.querySelector("[data-url]")
          const nombre=document.querySelector("[data-nombre]")
          const precio=document.querySelector("[data-precio]")
    
         try {
            
            const producto = await productoServicios.detalleProductos(id);
    
             if (producto.imagen&&producto.nombre&&producto.precio) {
                 imagen.value=producto.imagen
                 nombre.value=producto.nombre
                precio.value=producto.precio
             }else {
                 throw new Error();
            }
    
         }catch(error) {
             window.location.href="error.html"
    
          }
     }
     obtenerInfomacion()


     form.addEventListener("submit" , (evento) => {

        evento.preventDefault();
    
          const imagen= document.querySelector("[data-url]").value
          const nombre=document.querySelector("[data-nombre]").value
          const precio=document.querySelector("[data-precio]").value
    
          const url = new URL(window.location);
          const id = url.searchParams.get("id")
    
          productoServicios.editarProdutos(imagen,nombre,precio,id).then(() => {
              window.location.href="edicionConcluida.html"
         })
        
       
     })
    
})
    
 
    
    

 


