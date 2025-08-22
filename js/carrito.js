// =======================
// CARRITO EN EL CARRITO.HTML
// =======================

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

const contenedorCarrito = document.querySelector(".contenedor-carrito");
const totalElement = document.querySelector("#total");
const botonVaciar = document.querySelector(".carrito-acciones-vaciar");

// Renderizar carrito
function cargarCarrito() {
    if (carrito.length === 0) {
        contenedorCarrito.innerHTML = `<p class="carrito-vacio">Tu carrito está vacío. <i class="bi bi-emoji-frown"></i></p>`;
        return;
    }

    contenedorCarrito.innerHTML = "";

    carrito.forEach(prod => {
        const div = document.createElement("div");
        div.classList.add("carrito-producto");
        div.innerHTML = `
          <img class="carrito-producto-imagen" src="${prod.imagen}" alt="${prod.titulo}">
          <div class="carrito-producto-titulo">
            <small>Producto</small>
            <h3>${prod.titulo}</h3>
          </div>
          <div class="carrito-producto-cantidad">
            <small>Cantidad</small>
            <p>${prod.cantidad}</p>
          </div>
          <div class="carrito-producto-precio">
            <small>Precio</small>
            <p>$${prod.precio}</p>
          </div>
          <div class="carrito-producto-subtotal">
            <small>Subtotal</small>
            <p>$${prod.precio * prod.cantidad}</p>
          </div>
          <button class="carrito-producto-eliminar" data-id="${prod.id}">
            <i class="bi bi-trash-fill"></i>
          </button>
        `;
        contenedorCarrito.append(div);
    });

    actualizarTotal();
    activarBotonesEliminar();
}

// Calcular y mostrar total
function actualizarTotal() {
    const total = carrito.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0);
    totalElement.innerText = `$${total}`;
}

// Eliminar un producto
function activarBotonesEliminar() {
    const botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar");
    botonesEliminar.forEach(boton => {
        boton.addEventListener("click", () => {
            const id = boton.dataset.id;
            carrito = carrito.filter(prod => prod.id !== id);
            localStorage.setItem("carrito", JSON.stringify(carrito));
            cargarCarrito();
        });
    });
}

// Vaciar carrito
botonVaciar.addEventListener("click", () => {
    carrito = [];
    localStorage.setItem("carrito", JSON.stringify(carrito));
    cargarCarrito();
});
// Calcular y mostrar totales
function actualizarTotal() {
    const cantidadTotal = carrito.reduce((acc, prod) => acc + prod.cantidad, 0);
    const precioTotal = carrito.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0);

    // Total viejo
    totalElement.innerText = `$${precioTotal}`;

    // Totales nuevos en el resumen
    const cantidadElement = document.querySelector("#cantidad-total");
    const precioElement = document.querySelector("#precio-total");

    if (cantidadElement && precioElement) {
        cantidadElement.innerText = `Cantidad total: ${cantidadTotal}`;
        precioElement.innerText = `Precio total: $${precioTotal}`;
    }
}


// Inicializar
cargarCarrito();
