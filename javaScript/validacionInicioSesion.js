$(document).ready(function() {
    // Usuarios autenticados
    const usuarios = [
        { email: "alexandra@gmail.com", password: "alexandraR56<" },
        { email: "alex@gmail.com", password: "lexitoR21<" },
        { email: "josue@gmail.com", password: "josuesitoR31<" }
    ];

    // Handler para el envío del formulario
    $("form.sesion").submit(function(event) {
        event.preventDefault(); // Evitar el envío del formulario por defecto

        // Obtener los valores del formulario
        var email = $("input[data-tipo='email']").val();
        var password = $("input[data-tipo='contraseña']").val();

        // Validar el campo de correo electrónico
        if (email === "") {
            showError("email", "Este campo es requerido");
            return;
        } else if (!isValidEmail(email)) {
            showError("email", "El formato de correo electrónico es inválido");
            return;
        } else {
            hideError("email");
        }

        // Validar el campo de contraseña
        if (password === "") {
            showError("password", "Este campo es requerido");
            return;
        } else {
            hideError("password");
        }

        // Verificar la autenticación
        var isAuthenticated = usuarios.some(user => user.email === email && user.password === password);

        // Redireccionar al menú de administrador o mostrar mensaje de error
        if (isAuthenticated) {
            // Reemplaza "productos.html" con la URL de tu menú de administrador
            window.location.href = "productos.html";
        } else {
            alert("Error: Credenciales incorrectas. Inténtalo de nuevo.");
        }
    });

    // Función para validar el formato de correo electrónico
    function isValidEmail(email) {
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }

    // Función para mostrar mensajes de error
    function showError(fieldName, message) {
        $("span[data-error='" + fieldName + "']").text(message).show();
    }

    // Función para ocultar mensajes de error
    function hideError(fieldName) {
        $("span[data-error='" + fieldName + "']").hide();
    }
});


    