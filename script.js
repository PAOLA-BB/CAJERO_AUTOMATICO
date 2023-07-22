
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

// Obtener los valores de usuario y contraseña ingresados
const usuarios = [
  { usuario: "123456", contraseña: "contraseña1" },
  { usuario: "456789", contraseña: "contraseña2" },
  { usuario: "147258", contraseña: "contraseña3" }
];

function validarUsuarioContraseña(usuarioIngresado, contraseñaIngresada) {
//validar ususrio y contraseña
  const uIngresado = document.getElementById("usuario").value;
  const cIngresada = document.getElementById("contraseña").value;
  // Buscar el usuario en el arreglo
  const usuarioEncontrado = usuarios.find(usuario => usuario.usuario === uIngresado);
  
  if (usuarioEncontrado) {
    usuarioEncontrado.contraseña === cIngresada;
    // Redireccionar a la página de inicio del dashboard
    window.location.href = 'tusProductos.html';
    }else {
      alert("Usuario incorrecto");
    }

  }
const btnIngreso = document.getElementById("botonIngreso");
// Agregar evento click al botón
btnIngreso.addEventListener("click", validarUsuarioContraseña);
