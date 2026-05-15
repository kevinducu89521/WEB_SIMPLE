# WEB_SIMPLE

Este es un proyecto simple de una página web con un formulario de suscripción por email.

## Archivos

- `index.html`: La página principal con el formulario.
- `styles.css`: Estilos CSS para la página.
- `script.js`: JavaScript para manejar el envío del formulario usando EmailJS.
- `email-template.html`: Plantilla HTML para el correo de suscripción (con CSS inline).

## Configuración

Para que el envío de correos funcione, necesitas configurar EmailJS:

1. Ve a [emailjs.com](https://www.emailjs.com/) y crea una cuenta.
2. Crea un servicio de correo (por ejemplo, conecta tu Gmail).
3. Crea una plantilla de correo:
   - En el dashboard de EmailJS, crea una nueva plantilla.
   - Copia el contenido de `email-template.html` en el campo HTML de la plantilla.
   - Configura las variables: `{{to_email}}` para el destinatario.
4. Obtén tu Service ID, Template ID y Public Key desde el dashboard.
5. En `script.js`, reemplaza:
   - `'TU_CLAVE_PUBLICA_AQUI'` con tu Public Key.
   - `'TU_SERVICIO_ID_AQUI'` con tu Service ID.
   - `'TU_TEMPLATE_ID_AQUI'` con tu Template ID.

## Uso

Abre `index.html` en tu navegador. Ingresa un email y haz clic en "Suscribirse". Se enviará un correo de bienvenida al email proporcionado.

## Secciones del Correo

La plantilla del correo incluye al menos 5 secciones:
- **Logo**: Imagen del logo (placeholder).
- **Saludo**: Mensaje de bienvenida.
- **Contenido**: Información sobre lo que recibirán.
- **Botón CTA**: Enlace para explorar más.
- **Footer**: Información de contacto y enlace para darse de baja.

## Despliegue en Netlify

Este proyecto está listo para desplegarse como sitio estático en Netlify.

1. Instala Netlify CLI si no lo tienes:
   ```bash
   npm install netlify-cli --save-dev
   ```
2. Inicia sesión en Netlify:
   ```bash
   npx netlify login
   ```
3. Crea o conecta el sitio:
   ```bash
   cd /workspaces/WEB_SIMPLE
   npx netlify init
   ```
4. Despliega el sitio:
   ```bash
   npx netlify deploy --prod --dir=.
   ```

También puedes usar el archivo `netlify.toml` para publicar el directorio raíz del proyecto directamente.
