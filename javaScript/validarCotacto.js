const inputs = document.querySelectorAll("input");

inputs.forEach((input) => {
  input.addEventListener("blur", (event) => {
    event.defaultPrevented
    valida(input);
  });
});

const tipoDeError = [
  "valueMissing",
  "customError",
];

const mensajeDeError = {
  nombre: {
    valueMissing: "El campo nombre no puede estar vacío",
  },
  
  mensaje: {
    valueMissing: "El campo mensaje no puede estar vacío",
    customError: "Debe contener máximo 300 caracteres",
  },
};

function mostrarMensajeDeError(tipoDeInput, validity) {
  let mensaje = "";
  tipoDeError.forEach((error) => {
    if (validity[error]) {
      mensaje = mensajeDeError[tipoDeInput][error];
    }
  });

  return mensaje;
}

const validadores = {
  nombre: (input) => validarNombre(input),
  mensaje: (input) => validarMensaje(input),
};

function valida(input) {
  const tipoDeInput = input.dataset.tipo;

  if (validadores[tipoDeInput]) {
    validadores[tipoDeInput](input);
  }

  const mensaje = mostrarMensajeDeError(tipoDeInput, input.validity);

  if (input.validity.valid) {
    ocultarError(input);
  } else {
    mostrarError(input, mensaje);
  }
}

function mostrarError(inputElement, mensaje) {
  const errorElement = inputElement.parentElement.querySelector(".contacto__error");
  if (errorElement) {
      errorElement.style.display = "block";
      errorElement.innerText = mensaje;
      inputElement.parentElement.classList.add("contacto__formulario-inputs");
  }
}

function ocultarError(inputElement) {
  const errorElement = inputElement.parentElement.querySelector(".contacto__error");
  if (errorElement) {
      errorElement.style.display = "none";
      inputElement.parentElement.classList.remove("contacto__formulario-inputs");
  }
}

  
function validarNombre(input) {
  const nombre = input.value.trim();
  if (nombre === "") {
    mostrarError(input, mensajeDeError.nombre.valueMissing);
  } else {
    ocultarError(input);
  }
}

function validarMensaje(input) {
  const mensaje = input.value.trim();
  if (mensaje === "") {
    mostrarError(input, mensajeDeError.mensaje.valueMissing);
  } else if (mensaje.length > 300) {
    mostrarError(input, mensajeDeError.mensaje.customError);
  } else {
    ocultarError(input);
  }
}
