// Inicializar EmailJS con tu clave pública
emailjs.init('nFJsa4yY40taqzDqw'); // Reemplaza con tu clave pública de EmailJS

document.getElementById('subscription-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const messageDiv = document.getElementById('message');
    
    // Parámetros para el envío
    const templateParams = {
        email: email,      // Variable usada en tu plantilla EmailJS: {{email}}
        to_email: email    // También incluimos to_email por si tu plantilla usa {{to_email}}
    };
    
    // Enviar el correo usando EmailJS
    emailjs.send('service_h7vs08g', 'template_zpy1vdm', templateParams)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            messageDiv.textContent = '¡Suscripción exitosa! Revisa tu correo.';
            messageDiv.style.color = 'green';
        }, function(error) {
            console.log('FAILED...', error);
            messageDiv.textContent = 'Error al enviar el correo. Inténtalo de nuevo.';
            messageDiv.style.color = 'red';
        });
});