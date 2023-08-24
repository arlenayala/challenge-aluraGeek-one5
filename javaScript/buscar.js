
    // document.addEventListener('DOMContentLoaded', function() {
    //     const buscarProductoInput = document.getElementById('buscarProducto');
    //     const iconoBusqueda = document.getElementById('icon');

    //     iconoBusqueda.addEventListener('click', function() {
    //         const productoBuscado = buscarProductoInput.value.trim();

    //         // Verifica si el campo de búsqueda no está vacío antes de realizar la búsqueda
    //         if (productoBuscado !== '') {
    //             // Buscar el producto en las secciones de productos
    //             buscarProductoEnSecciones(productoBuscado);
    //         }
    //     });

    //     function buscarProductoEnSecciones(productoBuscado) {
    //         const seccionesProductos = document.querySelectorAll('.galeria1__productos-lista, .galeria2__productos-lista, .galeria3__productos-lista');

    //         for (const seccionProducto of seccionesProductos) {
    //             const tituloProducto = seccionProducto.querySelector('.galeria1__productos-titulo, .galeria2__productos-titulo, .galeria3__productos-titulo');
    //             if (tituloProducto.textContent.toLowerCase() === productoBuscado.toLowerCase()) {
    //                 // Encuentra el producto, realiza el desplazamiento hacia la sección
    //                 seccionProducto.scrollIntoView({ behavior: 'smooth' });
    //                 return; // Salir de la función si se encontró el producto
    //             }
    //             console.log('Texto buscado:', productoBuscado);


    //         }

    //         // Si el producto no se encuentra, mostrar un mensaje de "Producto no encontrado"
    //         console.log('Producto no encontrado');

    //     }
    //     console.log('Texto buscado:', productoBuscado);
    //     console.log('Número de elementos de producto:', seccionesProductos.length);
        
    // });

    
    document.addEventListener('DOMContentLoaded', function() {
        const buscarProductoInput = document.getElementById('buscarProducto');
        const iconoBusqueda = document.getElementById('icon');

        iconoBusqueda.addEventListener('click', function() {
            const productoBuscado = buscarProductoInput.value.trim();

            // Verifica si el campo de búsqueda no está vacío antes de realizar la búsqueda
            if (productoBuscado !== '') {
                // Buscar el producto en las secciones de productos
                buscarProductoEnSecciones(productoBuscado);
            }
        });

        function buscarProductoEnSecciones(productoBuscado) {
            const seccionesProductos = document.querySelectorAll('.galeria1__productos-lista, .galeria2__productos-lista, .galeria3__productos-lista');

            for (const seccionProducto of seccionesProductos) {
                const tituloProducto = seccionProducto.querySelector('.galeria1__productos-titulo, .galeria2__productos-titulo, .galeria3__productos-titulo');
                if (tituloProducto.textContent.toLowerCase() === productoBuscado.toLowerCase()) {
                    // Encuentra el producto, realiza el desplazamiento hacia la sección
                    seccionProducto.scrollIntoView({ behavior: 'smooth' });
                    return; // Salir de la función si se encontró el producto
                }
                console.log('Texto buscado:', productoBuscado);


            }

            // Si el producto no se encuentra, mostrar un mensaje de "Producto no encontrado"
            console.log('Producto no encontrado');

        }
        console.log('Texto buscado:', productoBuscado);
        console.log('Número de elementos de producto:', seccionesProductos.length);
        
    });