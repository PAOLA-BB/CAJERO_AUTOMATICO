
//inicio código sección tusProductos.html
// boton 2
let saldoTotal = 0;

function acumularSaldo() {
  const monto = parseInt(prompt("Ingresar monto:"));
  saldoTotal += monto;
  console.log("Saldo total acumulado: ", saldoTotal);
  alert("Ingresó: " + monto + " Saldo Total: " + saldoTotal);
}
// Obtener referencia al botón del DOM
const btnAcumular = document.getElementById("boton2");
// Agregar evento click al botón
btnAcumular.addEventListener("click", acumularSaldo);


// boton 3
function descontarSaldo(monto) {
  const monto1 = parseInt(prompt("Retirar monto:"));
  saldoTotal -= monto1;
  console.log("Saldo total actualizado: ", saldoTotal);
  alert("Retiró: " + monto1 + " Saldo Total: " + saldoTotal);
}
// Obtener referencia al botón del DOM
const btndescontar = document.getElementById('boton3');
// Agregar evento click al botón
btndescontar.addEventListener('click', descontarSaldo);


//boton 1
function consultarSaldo() {
  alert("Saldo actual: " + saldoTotal);

}
// Obtener referencia al botón del DOM
let btnconsultarSaldo = document.getElementById("boton1");
// Agregar evento click al botón
btnconsultarSaldo.addEventListener("click", consultarSaldo);
//fin código sección tusProductos.html