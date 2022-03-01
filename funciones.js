/*function sumar(numero1,numero2,numero3){

    return numero1+numero2+numero3
}


console.log(sumar(2,5,3))*/


function iniciar(){

    console.log("Estoy iniciando el programa")
}


function procesar(){

    setTimeout(function(){
        console.log("Estamos procesando el programa")
    },3000)


}


function finalizar(){

    console.log("Estamos finalizando el programa")
}


// Llamando a mis funciones

iniciar()
procesar()
finalizar()