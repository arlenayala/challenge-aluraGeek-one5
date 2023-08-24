//get
const listaProductos= () => {
    
    return fetch("https://fake-api-liard.vercel.app/productos")
    .then(respuesta=>respuesta.json())
    .catch(error=> console.log(error));
       
}

//post- crear producto

const crearProducto = (imagen, nombre, precio) => {
  return fetch("https://fake-api-liard.vercel.app/productos", {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify({
          imagen,
          nombre,
          precio
      })
  })
  .then(respuesta => {
      if (respuesta.ok) {
          return respuesta.json(); 
      } else {
          throw new Error("No se pudo crear el producto");
      }
  })
  .catch(error => {
      console.error("Error al crear el producto:", error);
      throw error; 
  });
};


const eliminarProducto= (id) => {
    console.log("eliminar " , id)
    return fetch(`https://fake-api-liard.vercel.app/productos/${id}` , {
      
      method:"DELETE",
  
    })
  }

  const detalleProductos= (id)=> {
    return fetch(`https://fake-api-liard.vercel.app/productos/${id}`).then((respuesta)=>respuesta.json())
  }
  
  const editarProdutos = (imagen,nombre,precio,id) => {
    return fetch(`https://fake-api-liard.vercel.app/productos/${id}`, {
      method: "put",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        imagen,
        nombre,
        precio,
      }),
    })
      .then((respuesta) => respuesta)
      .catch((err) => console.log(err));
  };


export const productoServicios= {
    listaProductos,
    crearProducto,
    eliminarProducto,
    editarProdutos,
    detalleProductos
   
}

