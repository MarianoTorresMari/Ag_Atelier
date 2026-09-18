document.addEventListener("DOMContentLoaded", () => {

    const carrito = [];

    const botonesAgregar = document.querySelectorAll(".btn-agregar");
    const contadorCarrito = document.getElementById("contador-carrito");
    const listaCarrito = document.getElementById("lista-carrito");
    const totalCarrito = document.getElementById("total-carrito");
    const botonVaciar = document.getElementById("vaciar-carrito");
    const botonWhatsApp = document.getElementById("enviar-whatsapp");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", () => {
            const card = boton.closest(".producto-card");
            const nombre = card.querySelector("h3").textContent;
            const precioTexto = card.querySelector(".precio").textContent;
            const precio = Number(precioTexto.replace(/\D/g, ""));
            agregarAlCarrito(nombre, precio);
        });
    });


    function agregarAlCarrito(nombre, precio) {
        const productoExistente = carrito.find(
            producto => producto.nombre === nombre
        );
        if (productoExistente) {
            productoExistente.cantidad++;
        } else {
            carrito.push({
                nombre: nombre,
                precio: precio,
                cantidad: 1
            });
        }
        mostrarCarrito();
    }


    function mostrarCarrito() {
        listaCarrito.innerHTML = "";

        if (carrito.length === 0) {
            listaCarrito.innerHTML = "<p>Tu carrito está vacío.</p>";
            contadorCarrito.textContent = "0";
            totalCarrito.textContent = "0";
            return;
        }
        let total = 0;
        let cantidadTotal = 0;

        carrito.forEach(producto => {
            const subtotal = producto.precio * producto.cantidad;

            total += subtotal;
            cantidadTotal += producto.cantidad;

            const productoHTML = document.createElement("div");
            productoHTML.classList.add("producto-carrito");
            productoHTML.innerHTML = `
                <strong>${producto.nombre}</strong>
                <span>
                    ${producto.cantidad} x $${producto.precio.toLocaleString("es-AR")}
                </span>
            `;
            listaCarrito.appendChild(productoHTML);
        });
        contadorCarrito.textContent = cantidadTotal;
        totalCarrito.textContent = total.toLocaleString("es-AR");
    }


    botonVaciar.addEventListener("click", () => {
        carrito.length = 0;
        mostrarCarrito();
    });


    botonWhatsApp.addEventListener("click", () => {
        if (carrito.length === 0) {
            alert("El carrito está vacío.");
            return;
        }
        let mensaje = "Hola, quiero realizar este pedido en AG Atelier:\n\n";
        let total = 0;

        carrito.forEach(producto => {
            const subtotal = producto.precio * producto.cantidad;
            total += subtotal;
            mensaje += `${producto.cantidad} x ${producto.nombre} - $${subtotal.toLocaleString("es-AR")}\n`;
        });

        mensaje += `\nTotal: $${total.toLocaleString("es-AR")}`;
        const numeroWhatsApp = "5492617590562";
        const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;
        window.open(url, "_blank");
    });

});