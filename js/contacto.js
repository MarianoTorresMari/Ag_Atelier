document.addEventListener("DOMContentLoaded", function () {
    const formularioContacto = document.getElementById("formularioContacto");
    if (formularioContacto) {      
        formularioContacto.addEventListener("submit", function (event) {
            event.preventDefault();
            const nombre = document.getElementById("nombre").value;
            const email = document.getElementById("email").value;
            const telefono = document.getElementById("telefono").value;
            const mensaje = document.getElementById("mensaje").value;
            const destinatario = "agatelier17@gmail.com";
            const asunto = "Nueva consulta web de: " + nombre;
            
            let cuerpo = "¡Hola AG Atelier!\n\n";
            cuerpo += "Tienen una nueva consulta desde la página web:\n\n";
            cuerpo += "Nombre: " + nombre + "\n";
            cuerpo += "Email del cliente: " + email + " (Responder a esta dirección)\n";
            cuerpo += "Teléfono: " + telefono + "\n\n";
            cuerpo += "Mensaje:\n" + mensaje;

            const enlaceMailto = "mailto:" + destinatario + 
                                 "?subject=" + encodeURIComponent(asunto) + 
                                 "&body=" + encodeURIComponent(cuerpo);
            window.location.href = enlaceMailto;
            const modalElement = document.getElementById("modalContacto");
            const modalBootstrap = bootstrap.Modal.getInstance(modalElement);
            modalBootstrap.hide();
            formularioContacto.reset();
        });
    }
});