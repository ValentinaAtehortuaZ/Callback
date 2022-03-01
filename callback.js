//Ejercicio 1

/*function funcionPrincipal(callback){

    setTimeout(function(){
        console.log("Soy la funcion principal")
        callback()
    },2000)
    
}

funcionPrincipal(function(){
    console.log("Soy la segunda funcion ")
})*/

/*function sumar(numero1,numero2,callback){
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
})*/


//Ejercicio 2

/* 1. reciba nombre,edad,password
    2. construir un objeto con dicha información
    3. funcion alterna verifique si el usuario es mayor o menor de edad
    e imprima despues de 3 segundos, si si lo deja acceder o no a la pagina*/


   /* function RecibirUsuario(nombre,edad,password,callback){


        setTimeout(function(){

            let usuario={

                nombre:nombre,
                edad:edad,
                password:password
            }

           callback(usuario) 

        },3000)  

    }

    RecibirUsuario(`Valentina`,22,`valentinaAmor`,function(usuario){

        if(usuario.edad>= 18){
            console.log( "Bienvenid@: " + usuario.nombre +  ",eres mayor de edad, puedes acceder a la pagina webcam ")
           
        }else{
            console.log(usuario.nombre+ "no eres mayor de edad,no puedes acceder a la pagina webcam ")
          
        }
    })*/


    //ejercicio 3

    /* 1. Quiero recibir 5 numeros
    2. Almacenar 5 numeros en un arreglo
    3. llamar segunda funcion encargada de recorrer arreglo y entregar la suma de los numeros del arreglo

    */

    function almacenar(numero1,numero2,numero3,numero4,numero5,callback){

        let numeros=Array(numero1,numero2,numero3,numero4,numero5)

        callback(numeros)
    
    }

    almacenar(2,4,5,6,3,function(numeros){

        let contador=0;

        numeros.forEach(function(numero) {
            contador=contador + numero

        })

        console.log(` La sumatoria es: ${contador}`)
    })




    


