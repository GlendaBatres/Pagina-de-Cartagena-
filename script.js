document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('reservaForm');
    const mensaje = document.getElementById('mensajeExito');

    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Evita que la página se recargue

        // Capturar datos del DOM
        const nombre = document.getElementById('nombre').value;
        const cabana = document.getElementById('tipoCabana').value;

        // Simulación de envío
        console.log(`Reserva para: ${nombre} en cabaña ${cabana}`);

        // Feedback al usuario
        form.classList.add('hidden');
        mensaje.classList.remove('hidden');
        mensaje.innerHTML = `<h3>¡Excelente elección, ${nombre}!</h3><p>Tu solicitud para la cabaña <b>${cabana}</b> ha sido enviada. El clima de Alegría te espera.</p>`;
    });
});