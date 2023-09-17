//Ingresar nombre del cliente
//revisar que con el codigo que ingrese letras, denegar acceso, si no pone, nada, numeros o caracteres especiales

// Luego que pregunte que desea comprar, si hotcakes o waffles, o souffles
//Preguntar la cantidad
//Calcular el precio de la compra
//Preguntar si desea seguiir comprando, decir las promociones posibles dependiendo de la cantidad comprada
//Calcular descuento, o decir el valor final de su compra
//Darle las gracias por su preferencias

//Donde agregar una función???

function comprar() {

let nombreCliente = prompt("Ingrese su nombre de cliente")

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
 
let producto = prompt("Que desea comprar, waffles, hotcakes o souffles")
let cantidad = parseInt(prompt("Cuantos " + producto + " desea comprar"))
let pagoTotal

console.log(typeof(cantidad))
console.log(cantidad)
if (cantidad<5){

    const productoExtra = 5-cantidad
    alert("Usted esta comprando " + cantidad + " " + producto)
    alert("En la compra de " + productoExtra + " más, podría llevarse uno extra gratis")
    let gratis = prompt("¿Desea añadir " + productoExtra + " " + producto + " más?")
    if ( gratis.toLowerCase() == "si"){
        pagoTotal=5*10
        cantidad=5+1
        }
} else if ((cantidad >=5) && (cantidad < 10)){
    alert("Se lleva usted un " + producto + " gratis" )
    pagoTotal=cantidad*10
    cantidad=cantidad+1
}else {
    alert("El precio de venta ha cambiado de 10 dolares a 8 dolares")
    pagoTotal = cantidad*8
}

alert(nombreCliente + ", usted tiene en su carrito " + cantidad + " " + producto + ", un total de " + pagoTotal + " dolares" )
let pagoPregunta = prompt("¿Desea proceder con el pago?")

if (pagoPregunta.toLowerCase().trim() == "si"){
    alert("Usted a comprado " + cantidad + " " + producto + ", gracias por su preferencia")
} else if (pagoPregunta.toLowerCase == "no") {
    alert("Gracias por visitarnos")
}

}
const boton = document.getElementById("botonComprar")

boton.addEventListener("Click", comprar)
