/* Creacion Clase productos*/

// class Producto {

//     constructor (id, nombre, categoria, precio, stock){

//         this.id = parseInt(id),
//         this.nombre = nombre.toUpperCase(),
//         this.categoria = categoria.toLowerCase(),
//         this.precio = parseFloat(precio.toFixed (2)),
//         this.stock = parseInt(stock)

//     }
//     descripcion () {

//         if (this.stock > 0 ){
//             console.log ("Producto: " + this.nombre + " tenemos un stock de " + this.stock + " unidades")

//         }
//         else {
//             console.log ("Lo sentimos en este momento no tenemos stock del producto: " + this.nombre)
//         } 
//     }

// }

/* Version para caragar manualmente los productos */

// let productos = []

// do { 
//     // aca faltarian todas las comprobaciones, haria el codigo muuuy largo
//     let id = parseInt (prompt("ingresa un id"))
//     let nombre = prompt("Ingresa el nombre del producto")
//     let categoria = prompt("Ingresa la categoria: Ropa, Deporte o Celulares ")
//     let precio = parseFloat(prompt ("Ingresa el precio del producto"))
//     let stock = parseInt (prompt("Ingresa la cantidad que existe en stock"))

//     productos.push(new Producto (id, nombre, categoria,precio, stock)) 
//     console.log (productos)


// }
// while (productos.length <= 3)

// console.log ("##############################################")
// console.log (productos)

///////////// Array creado 
const products = [ 
    {codigo: 1, nombre: "Remera" ,categoria: "ROPA", precio: 2499.99 ,stock: 10 }, 
    {codigo: 2, nombre: "Pelota Futbol",categoria: "DEPORTE", precio: 4499.99 ,stock: 5 },
    {codigo: 3, nombre: "Pelota Tenis" ,categoria: "DEPORTE", precio: 1200 ,stock:4 },
    {codigo: 4, nombre: "Zapatilla" ,categoria: "CALZADO", precio: 25499.99 ,stock:10 },
    {codigo: 5, nombre: "Short" ,categoria: "ROPA", precio: 2999.99 ,stock:5 },
    {codigo: 6, nombre: "Raqueta Paddle" ,categoria: "Deporte", precio: 10299.99 ,stock: 3 }
]

/* Filtrando el array */

// let filtro = []
// let salida = ""

// let opcion = parseInt (prompt("Ingresa una de las siguientes opciones: \n 1 : para filtrar producto. \n 2 : lista de productos. \n 0 : para salir."))


// if (opcion == 1){

//     let cat = prompt("Ingresa la categoria del producto: Ropa, Deporte, Calzado")
    
//     filtro = products.filter (product => product.categoria.includes (cat.toUpperCase()))  
//     console.log (filtro)
    
//     for (const el of filtro) {
//         salida = salida + el.nombre + ",  $" + el.precio + " con stock de: "+ el.stock +" unidades. \n"
//     }
    
//     alert (salida)
  
// }
// else if (opcion == 2) {

//     for (const el of products) {
//         salida = salida + "Codigo: " + el.codigo + ", " + el.nombre + ", Precio: $" + el.precio + " \n"
//     }
    
//     alert (salida)

// }



/*                 Cmprar/Carrito                  */



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

        // let ticket = parseInt (prompt("Ingresa 1 : para ver el ticket de tu compra, \n Ingresa 0 : para finalizar"))
        // let exit = ""
        // if (ticket == 1){

        //     let total = 0 
    
        //         for (let el of carrito) {
    
        //             total = total + el.precio
        //         }
        //         for (let el of carrito) {
        //          exit = exit + el.nombre + ",  $" + el.precio + "\n"
        //      }

        // alert (exit + "\n Total: $ " + total.toFixed(2) + "\n \n Gracias por su compra, vuelvas pronto" )

        // }
        // else {
        //     alert ("Gracias por visitar nuestra tienda, esperamos su regreso")
        // }
        
}
else {
    alert( "Gracias por visitar nuestra tienda, esperamos su regreso")
}

if (carrito.length != 0) {

    let ticket = parseInt (prompt("Ingresa 1 : para ver el ticket de tu compra, \n Ingresa 0 : para finalizar"))
            let exit = ""
            if (ticket == 1){
    
                let total = 0 
        
                    for (let el of carrito) {
        
                        total = total + el.precio
                    }
                    for (let el of carrito) {
                     exit = exit + el.nombre + ",  $" + el.precio + "\n"
                 }
    
            alert (exit + "\n Total: $ " + total.toFixed(2) + "\n \n Gracias por su compra, vuelvas pronto" )
            }
}



console.log ("###################################")

console.log(carrito)

console.log ("###################################")


