
/*                     Array creado                  */


const products = [ 
    {codigo: 1, nombre: "Remera" ,categoria: "ROPA", precio: 2499.99 ,stock: 10 }, 
    {codigo: 2, nombre: "Pelota Futbol",categoria: "DEPORTE", precio: 4499.99 ,stock: 5 },
    {codigo: 3, nombre: "Pelota Tenis" ,categoria: "DEPORTE", precio: 1200 ,stock:4 },
    {codigo: 4, nombre: "Zapatilla" ,categoria: "CALZADO", precio: 25499.99 ,stock:10 },
    {codigo: 5, nombre: "Short" ,categoria: "ROPA", precio: 2999.99 ,stock:5 },
    {codigo: 6, nombre: "Raqueta Paddle" ,categoria: "Deporte", precio: 10299.99 ,stock: 3 }
]

/*                              Filtrando el array              */

let filtro = []
let salida = ""
let opcion = parseInt (prompt("Ingresa una de las siguientes opciones: \n 1 : para filtrar producto. \n 2 : lista de productos. \n 0 : para salir."))


if (opcion == 1){

    let cat = prompt("Ingresa la categoria del producto: Ropa, Deporte, Calzado")
    
    if (cat.toUpperCase() == "ROPA" || cat.toUpperCase() == "DEPORTE" || cat.toUpperCase() == "CALZADO" ) {

        filtro = products.filter (product => product.categoria.includes (cat.toUpperCase()))  
        console.log (filtro)
    
        for (const el of filtro) {

            salida = salida + el.nombre + ",  $" + el.precio + " con stock de: "+ el.stock +" unidades. \n"
            
        }
    
        alert (salida)
    
    }
    else {


        while (cat.toUpperCase() != "ROPA" || cat.toUpperCase() != "DEPORTE" || cat.toUpperCase() != "CALZADO" ){
            
            cat = prompt("La categoria ingresada no existe! \n Ingresa la categoria del producto: Ropa, Deporte, Calzado")
    
            if (cat.toUpperCase() == "ROPA" || cat.toUpperCase() == "DEPORTE" || cat.toUpperCase() == "CALZADO" ) {
    
                filtro = products.filter (product => product.categoria.includes (cat.toUpperCase()))  
                console.log (filtro)
            
                for (const el of filtro) {
                    salida = salida + el.nombre + ",  $" + el.precio + " con stock de: "+ el.stock +" unidades. \n"
                   
                }
            
                alert (salida)
                break
            }
        }
    } 



}
else if (opcion == 2) {

    for (const el of products) {
        salida = salida + "Codigo: " + el.codigo + ", " + el.nombre + ", Precio: $" + el.precio + " \n"
    }

    alert (salida)

}



/*                 Comprar / Carrito                  */



let carrito = []
let comprar =  parseInt (prompt("Ingresa una de las siguientes opciones: \n 1 : Añadir producto al carrito.\n 0 : para salir."))

if (comprar == 1) {

    let prod = parseInt (prompt ("Ingresa el codigo del producto a añadir, o ingresa 0 para finalizar.\n  Codigo: 1, Remera.\n  Codigo: 2, Pelota Futbol.\n  Codigo: 3, Pelota Tenis. \n  Codigo: 4, Zapatillas.\n  Codigo: 5, Short.\n  Codigo: 6, Raqueta Paddle"))


        while (prod != 0){

            if(products.find ((el) => el.codigo == prod)){
    
                carrito.push(products.find ((el) => el.codigo == prod))

                prod = parseInt (prompt ("Ingresa el codigo del producto a añadir, o ingresa 0 para finalizar.\n  Codigo: 1, Remera.\n  Codigo: 2, Pelota Futbol.\n  Codigo: 3, Pelota Tenis. \n  Codigo: 4, Zapatillas.\n  Codigo: 5, Short.\n  Codigo: 6, Raqueta Paddle"))
            }
            else {
                prod = parseInt (prompt ("Ingresa el codigo del producto a añadir, o ingresa 0 para finalizar.\n  Codigo: 1, Remera.\n  Codigo: 2, Pelota Futbol.\n  Codigo: 3, Pelota Tenis. \n  Codigo: 4, Zapatillas.\n  Codigo: 5, Short.\n  Codigo: 6, Raqueta Paddle"))

            }


        }
}
else {
    alert( "Gracias por visitar nuestra tienda, esperamos su regreso")
}


/*                Ticket / Total                 */


let total = 0 
let exit = ""
if (carrito.length != 0) {


    for (let el of carrito) {

        total = total + el.precio
    }
    for (let el of carrito) {
        exit = exit + el.nombre + ",  $" + el.precio + "\n"
    }

    alert (exit + "\n Total: $ " + total.toFixed(2) + "\n" )
        
}



/*               funciones de pago yo descuento             */



let desc = 0
let recargo = 0

function descuento (a) {
    if (a >= 65000) {
        desc = a - (a * 0.2) 
        alert ("Como tu compra supero los $ 65000, te hacemos un descuento del 20 %. \n Tu total a pagar es: $" + desc.toFixed(2))
    }
    else {
        alert ("Con tu proxima compra tienes un descuento del 10%")
    }
}

function pago (a , c) {
    
    if (c == 12){
        recargo = a + (a * 0.2)
        cuotas = recargo.toFixed(2) / 12
        alert ("El recargo por 12 cuotas de del 20%.\n Tu compra se realiza en 12 pagos de: $" + cuotas.toFixed(2) + "\n El total a pagar es de: $" + recargo.toFixed(2))
    } 
    else if (c == 9){
        recargo = a + (a * 0.15)
        cuotas = recargo.toFixed(2) / 9
        alert ("El recargo por 9 cuotas de del 15%.\n Tu compra se realiza en 9 pagos de: $" + cuotas.toFixed(2) + "\n El total a pagar es de: $" + recargo.toFixed(2))
    }
    else if (c == 6){
        recargo = a + (a * 0.1)
        cuotas = recargo.toFixed(2) / 6
        alert ("El recargo por 6 cuotas de del 10%.\n Tu compra se realiza en 6 pagos de: $" + cuotas.toFixed(2) + "\n El total a pagar es de: $" + recargo.toFixed(2))
    }
    else if (c == 3) {
        recargo = a + (a * 0.05)
        cuotas = recargo.toFixed(2) / 3
        alert ("El recargo por 3 cuotas de del 5%.\n Tu compra se realiza en 3 pagos de: $" + cuotas.toFixed(2) + "\n El total a pagar es de: $" + recargo.toFixed(2))
        
    }
}


if (carrito.length != 0) {

        let pagar = parseInt (prompt("Ingrese la opcion de pago: \n 1. Pago en efectivo. \n 2. Pago en cuotas."))

        if (pagar == 1){

            descuento(total)
        }
        else if (pagar == 2) {

            let c = parseInt (prompt("Ingresa la cantidad de cuotas 3, 6, 9 o 12 cuotas "))

                if (c == 3 || c == 6 || c == 9 || c == 12){

                    pago (total, c)
                
                } 
                else {

                    while (c != 3 || c != 6 || c != 9 || c != 12) {
            
                        c = parseInt (prompt("Ingresa la cantidad de cuotas 3, 6, 9 o 12 cuotas "))
            
                        if (c == 3 || c == 6 || c == 9 || c == 12){

                            pago (total, c)
                        
                            break
                        }
            
                    }
                }
            

        }
}



console.log ("###################################")

console.log(carrito)

console.log ("###################################")
                        
                        
                        
/* Creacion Clase productos*/

/* Esto es mas a manera de muestra de que se como crearlo, pero seria muuuy largo hacer todas las comprobaciones ecesarias para que un usuario no ingrese malos datos, tambien es tedioso crear un array que contenga varios objetos con tantos parametros...*/

// class Producto {

//     constructor (codigo, nombre, categoria, precio, stock){

//         this.codigo = parseInt(codigo),
//         this.nombre = nombre.toUpperCase(),
//         this.categoria = categoria.toLowerCase(),
//         this.precio = parseFloat(precio.toFixed(2)),
//         this.stock = parseInt(stock)

//     }
    // descripcion () {

    //     if (this.stock > 0 ){
    //         alert ("Producto: " + this.nombre + " tenemos un stock de " + this.stock + " unidades")

    //     }
    //     else {
    //         alert ("Lo sentimos en este momento no tenemos stock del producto: " + this.nombre)
    //     } 
    // }

// }

/* Version para caragar manualmente los productos */

// let productos = []

// do { 
//     // aca faltarian todas las comprobaciones, haria el codigo muuuy largo
//     let codigo = parseInt (prompt("ingresa un codigo numérico"))
//     let nombre = prompt("Ingresa el nombre del producto")
//     let categoria = prompt("Ingresa la categoria: Ropa, Deporte o Celulares ")
//     let precio = parseFloat(prompt ("Ingresa el precio del producto"))
//     let stock = parseInt (prompt("Ingresa la cantidad que existe en stock"))

//     productos.push(new Producto (codigo, nombre, categoria, precio, stock)) 
//     console.log (productos)


// }
// while (productos.length <= 8)

// console.log ("##############################################")
// console.log (productos)