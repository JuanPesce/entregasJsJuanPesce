
const productos = [
    {id:1, nombre:"Yerba Comun 1 kilo", peso:1000, precio:1800},
    {id:2, nombre:"Yerba Comun 0,5 kilo", peso:500, precio:900},
    {id:3, nombre:"Yerba Despalada 1 kilo", peso:1000, precio:1900},
    {id:4, nombre:"Yerba Despalada 0,5 kilo", peso:500, precio:950},
    {id:5, nombre:"Yerba Organica 1 kilo", peso:1000, precio:2000},
    {id:6, nombre:"Yerba Organica 0,5 kilo", peso:500, precio:1000},


];

class Carrito {
    constructor() {
        this.productos = [];
        this.cantMinPeso = 10000;
        this.totalAPagarMax = 6000;
        this.precioEnvio = 3800;
        this.envioAgregado = false;
    }

    agregarProducto(producto, cantidad) {
        const item = {itemProducto:producto, itemCantidad:cantidad};
        console.log(item);
        this.productos.push(item);
    }

    totalProductos() {
        let total = 0;

        for (const item of this.productos) {
            total += item.itemCantidad;
        }

        return total;
    }

    totalPeso() {
        let total = 0;

        for (const item of this.productos) {
            total += item.itemCantidad * item.itemProducto.peso;
        }
        return total;
    }

    totalAPagar() {
        let total = 0;

        for (const item of this.productos) {
            total += item.itemProducto.precio * item.itemCantidad;
        }

        if (this.envioAgregado) {
            total += this.precioEnvio;
        }

        return total;
    }

    aplicarDescuento() {
        let total = this.totalAPagar();

        if ((this.totalPeso() > this.cantMinPeso)) {
            total = total * 0.9;
        }

        return total;
    }

    agregarEnvio() {
        let pregunta = prompt("Desea envio a domicilio? (SI / NO)").toUpperCase();

        if (pregunta == "SI") {
            this.envioAgregado = true;
        }
    }
}

function mostrarTotalAPagar() {
    let salida = "Total Productos: " + carrito.totalProductos() + "\n";
    salida += "Subtotal: $" + carrito.totalAPagar() + "\n";

    if (carrito.envioAgregado) {
        salida += "Precio Envio: $" + carrito.precioEnvio + "\n";
    }

    salida += "Total A Pagar: $" + carrito.aplicarDescuento();

    return salida;
}

function mostrarTotalPeso() {
    let carga = "Total carga: " + carrito.totalPeso() + " gramos \n";

    return carga;
}

// Comienzo de mi Programa
const carrito = new Carrito(); // Declaro mi Array Carrito (comienza vacío por defecto);

let salida = "";

for (const producto of productos) {
    salida += producto.id + "- " + producto.nombre + " $" + producto.precio + "\n";
}

let productoSeleccionado;

while (productoSeleccionado != 0) {
    productoSeleccionado = parseInt(prompt("Seleccione el Producto para agregar al Carrito: (0 para Salir)\n\n" + salida));

    if (productoSeleccionado == 0) {
        break;
    }

    let producto = productos[productoSeleccionado - 1]; // Obtener el producto seleccionado
    let cantidad = parseInt(prompt("Cuántos productos de " + producto.nombre + " vas a llevar?"));
    carrito.agregarProducto(producto, cantidad); // Agregar al Carrito el producto seleccionado 
}

carrito.agregarEnvio(); // Preguntar si se desea agregar el Envio
salida = mostrarTotalAPagar();
carga = mostrarTotalPeso();

alert(salida);
console.log(salida);
console.log(carga);

console.log(carrito);