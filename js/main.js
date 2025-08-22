// =======================
// LISTA DE PRODUCTOS
// =======================
const productos = [
    {
        id: "legumbre",
        titulo: "Garbanzos Ricos",
        imagen: "./.img/legumbre01.jpeg",
        categoria: { nombre: "Legumbres", id: "legumbre" },
        precio: 700
    },
    {
        id: "legumbre",
        titulo: "Garbanzos Ricos",
        imagen: "./.img/legumbre01.jpeg",
        categoria: { nombre: "Legumbres", id: "legumbre" },
        precio: 700
    },
    {
        id: "legumbre",
        titulo: "Garbanzos Ricos",
        imagen: "./.img/legumbre01.jpeg",
        categoria: { nombre: "Legumbres", id: "legumbre" },
        precio: 700
    },
    {
        id: "legumbre",
        titulo: "Garbanzos Ricos",
        imagen: "./.img/legumbre01.jpeg",
        categoria: { nombre: "Legumbres", id: "legumbre" },
        precio: 700
    },
    {
        id: "legumbre",
        titulo: "Garbanzos Ricos",
        imagen: "./.img/legumbre01.jpeg",
        categoria: { nombre: "Legumbres", id: "legumbre" },
        precio: 700
    },
    {
        id: "barritas",
        titulo: "Barrita Proteica",
        imagen: "./.img/barrita01.png",
        categoria: { nombre: "Barritas", id: "barritas" },
        precio: 800
    },
    {
        id: "barritas",
        titulo: "Barrita Proteica",
        imagen: "./.img/barrita01.png",
        categoria: { nombre: "Barritas", id: "barritas" },
        precio: 800
    },
    {
        id: "barritas",
        titulo: "Barrita Proteica",
        imagen: "./.img/barrita01.png",
        categoria: { nombre: "Barritas", id: "barritas" },
        precio: 800
    },
    {
        id: "alfajores",
        titulo: "Alfajor sin tac",
        imagen: "./.img/alfajor01.jpg",
        categoria: { nombre: "alfajor", id: "alfajores" },
        precio: 1400
    },
    {
        id: "barritas",
        titulo: "Barrita Proteica",
        imagen: "./.img/barrita01.png",
        categoria: { nombre: "Barritas", id: "barritas" },
        precio: 800
    },
    {
        id: "galletitavegana",
        titulo: "Galletas Veganas",
        imagen: "./.img/galletitavegana01.jpeg",
        categoria: { nombre: "Galletitas Veganas", id: "galletitavegana" },
        precio: 1200
    },
    {
        id: "galletitavegana",
        titulo: "Galletas Veganas",
        imagen: "./.img/galletitavegana01.jpeg",
        categoria: { nombre: "Galletitas Veganas", id: "galletitavegana" },
        precio: 1200
    },
    {
        id: "galletitavegana",
        titulo: "Galletas Veganas",
        imagen: "./.img/galletitavegana01.jpeg",
        categoria: { nombre: "Galletitas Veganas", id: "galletitavegana" },
        precio: 1200
    },
    {
        id: "galletitavegana",
        titulo: "Galletas Veganas",
        imagen: "./.img/galletitavegana01.jpeg",
        categoria: { nombre: "Galletitas Veganas", id: "galletitavegana" },
        precio: 1200
    },
    {
        id: "galletitavegana",
        titulo: "Galletas Veganas",
        imagen: "./.img/galletitavegana01.jpeg",
        categoria: { nombre: "Galletitas Veganas", id: "galletitavegana" },
        precio: 1200
    },
    {
        id: "pansingluten",
        titulo: "Pan de salvado",
        imagen: "./.img/pansalva01.jpeg",
        categoria: { nombre: "Panes Sin Gluten", id: "pansingluten" },
        precio: 2000
    },
    {
        id: "pansingluten",
        titulo: "Pan de salvado",
        imagen: "./.img/pansalva01.jpeg",
        categoria: { nombre: "Panes Sin Gluten", id: "pansingluten" },
        precio: 2000
    }, 
];

// =======================
// ELEMENTOS DEL DOM
// =======================
const contenedorProductos = document.querySelector("#contenedor-productos");
const tituloPrincipal = document.querySelector(".titulo-principal");
const botonesCategorias = document.querySelectorAll(".boton-categoria:not(.submenu-toggle), .submenu-lista a");


// =======================
// FUNCIONES
// =======================

/**
 * Carga los productos en el contenedor.
 * - Si paso una categoría, filtra los productos de esa categoría.
 * - Si no paso nada, carga todos los productos.
 */
function cargarProductos(categoriaId = "todos") {
    // Limpiar productos previos
    contenedorProductos.innerHTML = "";

    let productosAMostrar;

    if (categoriaId === "todos") {
        productosAMostrar = productos;
        tituloPrincipal.innerText = "Todos los productos";
    } else {
        productosAMostrar = productos.filter(prod => prod.categoria.id === categoriaId);

        // Título dinámico
        if (productosAMostrar.length > 0) {
            tituloPrincipal.innerText = productosAMostrar[0].categoria.nombre;
        } else {
            tituloPrincipal.innerText = "Sin productos en esta categoría";
        }
    }

    // Si no hay productos, mostramos el cartel
    if (productosAMostrar.length === 0) {
        const mensaje = document.createElement("div");
        mensaje.classList.add("sin-productos");
        mensaje.innerHTML = `
  <i class="bi bi-emoji-frown"></i>
  <p>No hay productos disponibles <span style="font-size:20px">:(</span></p>
`;

        contenedorProductos.append(mensaje);
        return; // <- no seguimos
    }

    // Renderizar productos filtrados
    productosAMostrar.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="producto-detalles">
                <h3 class="producto-titulo">${producto.titulo}</h3>
                <p class="producto-precio">$${producto.precio}</p>
                <button class="producto-agregar" id="${producto.id}">Agregar</button>
            </div>
        `;
        contenedorProductos.append(div);
    });
}


// =======================
// EVENTOS DE CATEGORÍAS
// =======================

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {
        e.preventDefault();

        const categoriaId = boton.id || "todos";

        // Cambiar estilos activos
        document.querySelectorAll(".boton-categoria, .submenu-lista a").forEach(btn => btn.classList.remove("active"));
        boton.classList.add("active");

        // Cargar productos filtrados
        cargarProductos(categoriaId);
    });
});

// =======================
// INICIALIZACIÓN
// =======================

cargarProductos(); // por defecto carga todos al entrar
// =======================
// CARRITO
// =======================

// Recuperamos carrito de localStorage o lo inicializamos vacío
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// Numerito del carrito en el navbar
const numerito = document.querySelector(".numerito");

// Función para guardar el carrito en localStorage
function guardarCarrito() {
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

// Función para actualizar el numerito del carrito
function actualizarNumerito() {
    const totalCantidad = carrito.reduce((acc, prod) => acc + prod.cantidad, 0);
    numerito.innerText = totalCantidad;
}

// Función para agregar productos al carrito
function agregarAlCarrito(e) {
    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(prod => prod.id === idBoton);

    // Si ya existe en el carrito, sumamos cantidad
    const existe = carrito.find(prod => prod.id === idBoton);
    if (existe) {
        existe.cantidad++;
    } else {
        // Copia del producto con cantidad
        carrito.push({ ...productoAgregado, cantidad: 1 });
    }

    guardarCarrito();
    actualizarNumerito();
}

// =======================
// EVENTOS DE "AGREGAR"
// =======================

// Como los botones se regeneran cada vez que cargas productos,
// tenemos que asignar eventos después de renderizar
function activarBotonesAgregar() {
    const botonesAgregar = document.querySelectorAll(".producto-agregar");
    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
}

// Modificamos cargarProductos para llamar activarBotonesAgregar al final
const _cargarProductosOriginal = cargarProductos;
cargarProductos = function (categoriaId = "todos") {
    _cargarProductosOriginal(categoriaId);

    // solo activamos los botones si realmente hay productos cargados
    const botonesAgregar = document.querySelectorAll(".producto-agregar");
    if (botonesAgregar.length > 0) {
        activarBotonesAgregar();
    }
};


// =======================
// INICIALIZACIÓN
// =======================
// =======================
// SUBMENÚS TOGGLE CON CLICK
// =======================
const toggles = document.querySelectorAll(".submenu-toggle");

toggles.forEach(toggle => {
    toggle.addEventListener("click", () => {
        const submenu = toggle.nextElementSibling;

        // Alternar solo el submenu de ese botón
        submenu.classList.toggle("open");

        // Cambiar flechita (rotar)
        const icono = toggle.querySelector(".bi-chevron-down");
        if (submenu.classList.contains("open")) {
            icono.style.transform = "rotate(180deg)";
        } else {
            icono.style.transform = "rotate(0deg)";
        }
    });
});

actualizarNumerito();

