//Ejercicio 1
//Variables
let input1Ejercicio1 = document.querySelector ("#input1Ejercicio1")
let input2Ejercicio1 = document.querySelector ("#input2Ejercicio1")
let botonEjercicio1 = document.querySelector ("#botonEjercicio1")
let parrafoEjercicio1 = document.querySelector ("#parrafoEjercicio1")

//Boton
botonEjercicio1.onclick = function (){
    if (input1Ejercicio1.value < 12) {
        parrafoEjercicio1.textContent = "El total a pagar es de: $" + input2Ejercicio1.value * 3000
    } else {
        parrafoEjercicio1.textContent = "El total a pagar es de: $" + input2Ejercicio1.value * 5000
    }
}

//Ejercicio2
//Variables
let input1Ejercicio2 = document.querySelector ("#input1Ejercicio2")
let botonEjercicio2 = document.querySelector ("#botonEjercicio2")
let parrafoEjercicio2 = document.querySelector ("#parrafoEjercicio2")

//Boton
botonEjercicio2.onclick = function (){
    if (input1Ejercicio2.value < 20000) {
        parrafoEjercicio2.textContent = "El monto a pagar es de: $" + input2Ejercicio1.value
    } else if ((input1Ejercicio2.value >= 20000) && (input1Ejercicio2 < 50000)){
        parrafoEjercicio2.textContent = "EL monto a pagar es de: $" + (input1Ejercicio2.value - (input1Ejercicio2.value * 0.10))
    } else {
        parrafoEjercicio2.textContent = "El monto a pagar es de: $" + (input1Ejercicio2.value - (input1Ejercicio2.value * 0.20))
    }
}