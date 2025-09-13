function cambiarMensaje() {
    const mensaje = document.getElementById("mensaje");
    mensaje.textContent = "¡Gracias por hacer clic en el botón!";
    const extra = document.getElementById("extra");
    extra.textContent = "Este texto apareció dinámicamente 😃";
}

function mostrarHora() {
    const ahora = new Date();
    alert("La hora actual es: " + ahora.toLocaleTimeString());
}
