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

const styleBtn = `
    font-family: "Courgette";
    font-size: 1vmin;
    width: 4rem;
    height: 3vmin;
    border-radius: 2px;
    background-color: rgb(233, 153, 48);
    cursor: pointer`;



function comprar() {
    
    //Crear el HTML para meter el valor de los precios y el botón de cantidad para cada producto mostrado
    // Crear estrucutra HTML para visualizar el carrito
    const prueba = document.getElementsByClassName("Card" )
    console.log(prueba)
    let i = 0
    baseDeDatos.forEach((info) => {
    let contenedor = document.createElement("div")
    contenedor.classList.add("card", "m-2", "shadow-lg")
    let btn = document.createElement("button")
    btn.classList.add("btn", "btn-primary")
    btn.textContent= "+"
    btn.style.cssText =styleBtn
    contenedor.innerHTML = `<h4> ${info.nombre}</h4>
                            <p> Precio: $${info.precio}</p>`;
    
    console.log(info)
    prueba[i].appendChild(contenedor)
    prueba[i].appendChild(btn)
    i++
    })

    for (const card of prueba) {
        console.log(card.innerHTML)
    }


    // Evento para agregar prodcutos al carrito


    //Dibuja los productos agregados al carrito


    //Evento para borrar un producto del carrito



    //Calcula el precio total teniendo en cuenta los productos repetidos

    //Varia el carrito y volver a dibujarlo

    //Eventos

    //Inicio



    //let carrito = [];
   
    //const DOMitems = document.querySelector()


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

