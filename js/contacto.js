document.addEventListener("DOMContentLoaded", function () {
    const formularioContacto = document.getElementById("formularioContacto");
    const telefono = document.getElementById("telefono");
    const modalContacto = document.getElementById("modalContacto");
    if (telefono) {
        telefono.addEventListener("input", function () {
            telefono.value = telefono.value.replace(/\D/g, "").slice(0, 10);
        });
    }
    if (formularioContacto) {
        formularioContacto.addEventListener("submit", function (event) {
            event.preventDefault();
            if (!formularioContacto.checkValidity()) {
                formularioContacto.reportValidity();
                return;
            }
            const nombre = document.getElementById("nombre").value.trim();
            const email = document.getElementById("email").value.trim();
            const numeroTelefono = document.getElementById("telefono").value.trim();
            const mensaje = document.getElementById("mensaje").value.trim();
            const destinatario = "agatelier17@gmail.com";
            const asunto = "Nueva consulta web de: " + nombre;
            let cuerpo = "¡Hola AG Atelier!\n\n";
            cuerpo += "Tienen una nueva consulta desde la página web:\n\n";
            cuerpo += "Nombre: " + nombre + "\n";
            cuerpo += "Email: " + email + "\n";
            cuerpo += "Teléfono: " + numeroTelefono + "\n\n";
            cuerpo += "Mensaje:\n" + mensaje;
            const urlGmail =
                "https://mail.google.com/mail/?view=cm&fs=1" +
                "&to=" + encodeURIComponent(destinatario) +
                "&su=" + encodeURIComponent(asunto) +
                "&body=" + encodeURIComponent(cuerpo);
            window.open(urlGmail, "_blank");

            if (modalContacto) {
                const modalBootstrap = bootstrap.Modal.getOrCreateInstance(modalContacto);
                modalBootstrap.hide();
            }
            formularioContacto.reset();
        });
    }
    if (modalContacto) {
        modalContacto.addEventListener("hide.bs.modal", function () {
            if (modalContacto.contains(document.activeElement)) {
                document.activeElement.blur();
            }
        });
    }
});