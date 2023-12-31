//Ingresar nombre del cliente
//revisar que con el codigo que ingrese letras, denegar acceso, si no pone, nada, numeros o caracteres especiales

// Luego que pregunte que desea comprar, si hotcakes o waffles, o souffles
//Preguntar la cantidad
//Calcular el precio de la compra
//Preguntar si desea seguiir comprando, decir las promociones posibles dependiendo de la cantidad comprada
//Calcular descuento, o decir el valor final de su compra
//Darle las gracias por su preferencias

//Donde agregar una función???

const baseDeDatos = [
    {
        id: 1,
        nombre: 'Hotcake',
        precio: 10,
    },
    {
        id: 2,
        nombre: 'Souffle',
        precio: 15,
    },
    {
        id: 3,
        nombre: 'Waffle',
        precio: 21,
    }

];

const divisa = '$';

// Estilos de botones
const styleCardBuy = `
    font-family: "Courgette";
    font-size: 6vmin;
    width: 10rem;
    height: 22vmin;
    border-radius: 2px;
    background-color: rgb(233, 153, 48);
    cursor: pointer;
    marging: 1.5vmin`;
    

const styleBtn = `
    font-family: "Courgette";
    font-size: 6vmin;
    font-weight: 600;
    font-color: white;
    width: 3rem;
    height: 8vmin;
    border-radius: 2px;
    background-color: rgb(233, 153, 48);
    align-items: center;
    justify-content: center;
    border: 0px;
    margin: 0px;
    padding: 0px;
    cursor: pointer`;

const styleBtn2 = `
    font-family: "Courgette";
    font-size: 4vmin;
    font-weight: 600;
    font-color: white;
    width: 3rem;
    height: 5vmin;
    border-radius: 5px;
    background-color: rgb(233, 153, 48);
    align-items: center;
    justify-content: center;
    border: 0px;
    margin: 0px;
    padding: 0px;
    cursor: pointer`;
    

let carrito = []
const miLocalStorage = window.localStorage;

function comprar() {
    const borrarBoton = document.getElementById("botonComprar")
    const parentBoton = document.getElementById("parentBtn")
    parentBoton.removeChild(borrarBoton)
    
    const getSectionMenu = document.getElementsByClassName("container")
    


    let DOMCarrito = document.createElement("div")
    DOMCarrito.classList.add("row", "text-center")
    

    let mostradorCarrito = document.createElement("div")
    mostradorCarrito.innerHTML = "<h2>Carrito</h2>"

    let listaItems = document.createElement("ul")
    listaItems.classList.add("list-group")
    listaItems.id = "carrito"
    

    let totalItem = document.createElement("p")
    totalItem.classList.add("text-right") 
    totalItem.innerHTML = "Total: <span id=total>0.00</span>&#36; "
    
    DOMCarrito.appendChild(mostradorCarrito)
    DOMCarrito.appendChild(listaItems)
    DOMCarrito.appendChild(totalItem)

    
    getSectionMenu[1].appendChild(DOMCarrito)

    let precioTotal = document.getElementById("total")

    const divBtn = document.createElement("div")
    divBtn.classList.add("row", "justify-content-center")

    getSectionMenu[1].appendChild(divBtn)


    let botonVaciar = document.createElement("button")
    botonVaciar.classList.add("btn", "btn-danger")
    botonVaciar.id ="boton-vaciar"
    botonVaciar.innerText = "Vaciar"

    divBtn.appendChild(botonVaciar)

    //Crear el HTML para meter el valor de los precios y el botón de cantidad para cada producto mostrado
    // Crear estrucutra HTML para visualizar el carrito
    const prueba = document.getElementsByClassName("Card" )
    
    let i = 0
    baseDeDatos.forEach((info) => {
    let contenedor1 = document.createElement("div")
    contenedor1.classList.add("row", "text-center")

    let contenedor11 = document.createElement("div")
    contenedor11.classList.add("col", "m-1", "pt-4", "pb-1", "tex-center")
    contenedor11.innerHTML = `<b> Precio: $${info.precio}</b>`;
    
    let contenedor2 = document.createElement("div")
    contenedor2.classList.add("row", "justify-content-center")

    let contenedor21 = document.createElement("div")
    contenedor21.classList.add("col", "mt-2")

    let btn1 = document.createElement("button")
    btn1.classList.add("btn");
    btn1.textContent= "+";
    btn1.style.cssText =styleBtn;
    btn1.setAttribute("marcador", info.id);
    btn1.addEventListener("click", anadirProductoAlCarrito);
    
    contenedor21.appendChild(btn1)
    contenedor1.appendChild(contenedor11)
    contenedor2.appendChild(contenedor21)
    prueba[i].appendChild(contenedor1)
    prueba[i].appendChild(contenedor2)
    i++

    })

    function anadirProductoAlCarrito(evento) {
        carrito.push(evento.target.getAttribute("marcador"))
        mostrarCarrito();
        guardarCarritoEnLocalStorage();
    
    }

    function mostrarCarrito() {
        listaItems.textContent = '';
        // Quitamos los duplicados
        const carritoSinDuplicados = [...new Set(carrito)];
        // Generamos los Nodos a partir de carrito
        carritoSinDuplicados.forEach((item) => {
            // Obtenemos el item que necesitamos de la variable base de datos
            const miItem = baseDeDatos.filter((itemBaseDatos) => {
                // ¿Coincide las id? Solo puede existir un caso
                return itemBaseDatos.id === parseInt(item);
            });
            // Cuenta el número de veces que se repite el producto
            const numeroUnidadesItem = carrito.reduce((total, itemId) => {
                // ¿Coincide las id? Incremento el contador, en caso contrario no mantengo
                return itemId === item ? total += 1 : total;
            }, 0);
            // Creamos el nodo del item del carrito
            const miNodo = document.createElement("li");
            miNodo.classList.add("list-group-item", "text-right", "mx-2");
            miNodo.textContent = `${numeroUnidadesItem} x ${miItem[0].nombre} - ${miItem[0].precio}${divisa}`;
            miNodo.style.backgroundImage = "rgb (233, 153, 48)";
            // Boton de borrar
            const BotonItem = document.createElement("button");
            BotonItem.classList.add("btn", "btn-danger", "mx-3");
            BotonItem.textContent = 'X';
            BotonItem.style.cssText = styleBtn2;
            BotonItem.dataset.item = item;
            BotonItem.addEventListener("click", borrarItemCarrito);
            // Mezclamos nodos
            miNodo.appendChild(BotonItem);
            listaItems.appendChild(miNodo);
        });
        precioTotal.textContent = calcularTotal()
    }

    function borrarItemCarrito(evento) {
        // Obtenemos el producto ID que hay en el boton pulsado
        const id = evento.target.dataset.item;
        // Borramos todos los productos
        carrito = carrito.filter((carritoId) => {
            return carritoId !== id;
        });
        // volvemos a renderizar
        mostrarCarrito();
        guardarCarritoEnLocalStorage();
    }
   
    

    function calcularTotal() {
        // Recorremos el array del carrito 
        return carrito.reduce((total, item) => {
            // De cada elemento obtenemos su precio
            const miItem = baseDeDatos.filter((itemBaseDatos) => {
                return itemBaseDatos.id === parseInt(item);
            });
            // Los sumamos al total
            return total + miItem[0].precio;
        }, 0).toFixed(2);
    }

    function vaciarCarrito() {
        // Limpiamos los productos guardados
        carrito = [];
        // Renderizamos los cambios
        mostrarCarrito();
        localStorage.clear();
    }
    function guardarCarritoEnLocalStorage () {
        miLocalStorage.setItem('carrito', JSON.stringify(carrito));
    }

    function cargarCarritoDeLocalStorage () {
        // ¿Existe un carrito previo guardado en LocalStorage?
        if (miLocalStorage.getItem("carrito") !== null) {
             // Carga la información
            carrito = JSON.parse(miLocalStorage.getItem("carrito"));
        }
    }

  

    botonVaciar.addEventListener("click", vaciarCarrito);
    mostrarCarrito();
    cargarCarritoDeLocalStorage();
    


 }

const boton = document.getElementById("botonComprar")

boton.addEventListener("Click", comprar)


/*let nombreCliente = prompt("Ingrese su nombre de cliente")

function tieneValoresNumericos(cadena) {
    // Utilizamos una expresión regular para buscar valores numéricos en la cadena
    // El patrón \d+ busca uno o más dígitos
    const patronNumerico = /\d+/;
    
    // Usamos el método test() de la expresión regular para verificar si hay coincidencias en la cadena
    return patronNumerico.test(cadena);
  }

while ( nombreCliente === "" || tieneValoresNumericos(nombreCliente)== true){
    alert("Nombre de cliente no reconocido, favor de volverlo a ingresar")
    nombreCliente =prompt("Ingrese su nombre de cliente")
}

alert("Nombre de cliente reconocido, favor de continuar con su compra")
console.log(tieneValoresNumericos(nombreCliente))
console.log(nombreCliente)

let celular = prompt("Ingrese su número de celular")
let correo  = prompt("Ingrese su correo electronico")

//función constructura del cliente
class cliente {
    constructor (nombre, celular, correo) {
        this.nombre=nombre;
        this.celular=celular;
        this.correo=correo
    }
}

//asignación de identidad al cliente
const cliente1 = new cliente(nombreCliente, celular, correo)

const infoProductos = [
    {nombrePorducto: 'Waffles', precioProducto: 10},

    {nombrePorducto: 'hotcakes', precioProducto: 6},

    {nombrePorducto: 'souffles', precioProducto: 12},
]

console.table(infoProductos)
let carrito = [];
let preguntaProducto = "si"
let pagoTotal
class carritoProducto{
    constructor(nombrePorducto, cantidadProducto){
        this.nombrePorducto = nombrePorducto
        this.cantidadProducto = cantidadProducto
    }
    
}

while (preguntaProducto.toLowerCase().trim() === "si") {
let producto = prompt("Que desea comprar, waffles, hotcakes o souffles")
let cantidad = parseInt(prompt("Cuantos " + producto + " desea comprar"))

let productoAgregado = new carritoProducto(producto,cantidad)


carrito.push(productoAgregado)
console.log(cantidad)
console.log(carrito)
preguntaProducto = prompt("¿Desea agregar otro producto?")
}

//Evaluación de la cantida de productos para saber si se va a aplicar descuento
/*if (cantidad<5){

    const productoExtra = 5-cantidad
    alert("Usted esta comprando " + cantidad + " " + producto)
    alert("En la compra de " + productoExtra + " más, podría llevarse uno extra gratis")
    let gratis = prompt("¿Desea añadir " + productoExtra + " " + producto + " más?")
    if ( gratis.toLowerCase() == "si"){
        pagoTotal=5*10
        cantidad=5+1
        } else {
            pagoTotal=cantidad*10
        }

} else if ((cantidad >=5) && (cantidad < 10)){
    alert("Se lleva usted un " + producto + " gratis" )
    pagoTotal=cantidad*10
    cantidad=cantidad+1
}else {
    alert("El precio de venta ha cambiado de 10 dolares a 8 dolares")
    pagoTotal = cantidad*8
}*/



/*alert(nombreCliente + ", usted tiene en su carrito " + cantidad + " " + producto + ", un total de " + pagoTotal + " dolares" )
let pagoPregunta = prompt("¿Desea proceder con el pago?")

if (pagoPregunta.toLowerCase().trim() == "si"){
    alert("Usted a comprado " + cantidad + " " + producto + ", gracias por su preferencia")
} else if (pagoPregunta.toLowerCase == "no") {
    alert("Gracias por visitarnos")
}

alert("GRACIAS POR SU COMPRA")
*/

