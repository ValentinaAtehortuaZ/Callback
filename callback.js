/*function funcionPrincipal(callback){

    setTimeout(function(){
        console.log("Soy la funcion principal")
        callback()
    },2000)
    
}

funcionPrincipal(function(){
    console.log("Soy la segunda funcion ")
})*/

function sumar(numero1,numero2,callback){
// declaracion de la funcion principal
    setTimeout(function(){    
        let suma= numero1+numero2 

        // llamar al callback
        callback(suma,numero1,numero2)
       
    },5000)

      
}

//llamado de la funcion principal 

sumar(34,45,function(suma,numero1,numero2){

      //1. muestro la suma  
    console.log(`La suma de ${numero1} y ${numero2} es igual a ${suma}`)


    //2. calculo resta
    let resta= numero1 - numero2
    

    //3.muestro la resta
    console.log(`La resta de ${numero1} y ${numero2} es igual a ${resta}`)
})


