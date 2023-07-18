function borrarTexto(input) {
  if (input.value === "Número") {
    input.value = "";
  }
}

function borrarTexto1(input) {
  if (input.value === "Contraseña") {
    input.value = "";
  }
}

//alert boton 1
// Obtener referencia al botón del DOM
let consultarSaldo = document.getElementById("boton1");

// Función para mostrar la alerta al hacer clic en el botón
function mostrarAlerta() {
  alert("Su saldo es de: ");
}

// Agregar evento click al botón
consultarSaldo.addEventListener("click", mostrarAlerta);






//prompt boton 2
// Obtener referencia al botón del DOM
let ingresarMonto = document.getElementById("boton2");

function mostrarPrompt() {
  let respuesta = parseInt(prompt("Escriba el monto a ingresar:"));
  console.log("Respuesta: " + respuesta);
}
// Agregar evento click al botón
ingresarMonto.addEventListener("click", mostrarPrompt);












//prompt boton 3
let retirarMonto = document.getElementById("boton3");
function mostrarPrompt() {
  let respuesta = prompt("Escriba el monto a retirar:");
  console.log("Respuesta: " + respuesta);
}  
retirarMonto.addEventListener("click", mostrarPrompt);


//cantidad que el usuario va a ingresar

//sumar monto ingresado con saldo en ceuenta


// Función para acumular saldo ingresado


//cuanto saldo hay en la cuenta




/*
  let selectElement = document.getElementById("tipoDoc");
  let valorSeleccionado = selectElement.value;
  console.log(valorSeleccionado);
 




// Datos iniciales del cajero automático
var saldo = 1000;

// Función para retirar dinero
function retirarDinero(cantidad) {
  if (cantidad > saldo) {
    console.log("Saldo insuficiente");
  } else {
    saldo -= cantidad;
    console.log("Retiro exitoso. Nuevo saldo: " + saldo);
  }
}

// Función para depositar dinero
function depositarDinero(cantidad) {
  saldo += cantidad;
  console.log("Depósito exitoso. Nuevo saldo: " + saldo);
}

// Función para consultar saldo
function consultarSaldo() {
  console.log("Saldo actual: " + saldo);
}

// Ejemplos de uso
retirarDinero(500); // Retira $500 del saldo actual
consultarSaldo(); // Muestra el saldo actual
depositarDinero(200); // Deposita $200 en el saldo actual
consultarSaldo(); // Muestra el saldo actual
   */