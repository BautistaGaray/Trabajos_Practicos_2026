//Ejercicio 1
//Variables
let inputActividad1 = document.querySelector("#InputActividad1")
let botonActividad1 = document.querySelector("#BotonActividad1")
let parrafoActividad1 = document.querySelector("#ParrafoActividad1")
let monto = 0
//Evento Boton 1
botonActividad1.onclick = function (){
    monto = inputActividad1.value
    if (monto >= 50000){
        parrafoActividad1.textContent = "Recibió el descuento del 10%"
        parrafoActividad1.style.color = "green"
    }else {
        parrafoActividad1.textContent = "No recibió el descuento"
        parrafoActividad1.style.color = "red"
    }
}
//Ejercicio 2
//Variables
let inputActividad2 = document.querySelector("#InputActividad2")
let botonActividad2 = document.querySelector("#BotonActividad2")
let parrafoActividad2 = document.querySelector("#ParrafoActividad2")
let edad = 0
//Evento Boton 2
botonActividad2.onclick = function (){
    edad = inputActividad2.value
    if (edad >= 65){
        parrafoActividad2.textContent = "Recibió el descuento del 15%"
        parrafoActividad2.style.color = "green"
    }else {
        parrafoActividad2.textContent = "No recibió el descuento"
        parrafoActividad2.style.color = "red"
    }
}
//Ejercicio 3
//Variables
let inputActividad3 = document.querySelector("#InputActividad3")
let botonActividad3 = document.querySelector("#BotonActividad3")
let parrafoActividad3 = document.querySelector("#ParrafoActividad3")
let anio = 0
//Evento Boton 3
botonActividad3.onclick = function (){
    anio = inputActividad3.value
    edad = 2026 - anio
    parrafoActividad3.textContent = "Su edad es de " + edad + " años."
}
//Ejercicio 4
//Variables
let inputActividad4 = document.querySelector("#InputActividad4")
let botonActividad4 = document.querySelector("#BotonActividad4")
let parrafoActividad4 = document.querySelector("#ParrafoActividad4")
let horario = 0
//Evento Boton 4
botonActividad4.onclick = function (){
    horario = inputActividad4.value
    if (horario == 17){
    parrafoActividad4.textContent = "Le toca a Juan Pérez"
    }else if (horario == 18){
    parrafoActividad4.textContent = "Le toca a Marco Polo"
    }else if (horario == 19){
    parrafoActividad4.textContent = "Le toca a Esteban Suárez"
    }else if (horario == 20){
    parrafoActividad4.textContent = "Le toca a Elías Polo"
    }else if (horario == 21){
    parrafoActividad4.textContent = "Le toca a Martín Juárez"
    }else {
    parrafoActividad4.textContent = "No le toca a nadie"
    }
}