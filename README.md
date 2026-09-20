# AG Atelier

## Integrantes

- Paloma Lucas
- Chaile Elio Federico
- Mariano Torres Mari

## Descripción

AG Atelier es una página web desarrollada para un emprendimiento dedicado a la venta de joyería, accesorios y artículos de belleza.

El sitio permite conocer el emprendimiento, recorrer las distintas categorías de productos y agregar productos a un carrito de compra. Al finalizar el pedido, el usuario puede enviar la lista de productos seleccionados mediante WhatsApp.

La página cuenta con secciones como:

- Página principal.
- Sobre nosotros.
- Galería de productos.
- Pulseras.
- Aritos.
- Anillos.
- Collares.
- Artículos de maquillaje.
- Formulario de contacto.
- Carrito de compra.

## Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript
- Bootstrap 5.3
- Git y GitHub

## ¿Dónde utilizamos Flexbox?

Flexbox se utilizó principalmente para organizar elementos de forma horizontal o vertical y facilitar la adaptación de la página a distintos tamaños de pantalla.

Algunos ejemplos son:

- Navbar de Bootstrap.
- Formulario de búsqueda.
- Botones y elementos del carrito.
- Categorías de la galería.
- Organización de algunos elementos del footer.
- Alineación de contenido mediante clases de Bootstrap como:
  - `d-flex`
  - `align-items-center`
  - `justify-content-center`
  - `justify-content-md-start`

Ejemplo:

```css
.categorias {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px;
}
