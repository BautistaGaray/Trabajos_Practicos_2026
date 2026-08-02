//Variables
let edad = 67
let nombreUsuario = "Bautista"
let nombreUsuario2 = "Marcos"
let numero = 0
let edad2 = 42
let dia = "viernes"
let contrasenia = "secreto"
let botonActividad1 = document.querySelector ("#BotonActividad1")
let parrafoActividad1 = document.querySelector ("#ParrafoActividad1")
let botonActividad2 = document.querySelector ("#BotonActividad2")
let parrafoActividad2 = document.querySelector ("#ParrafoActividad2")
let botonActividad3 = document.querySelector ("#BotonActividad3")
let parrafoActividad3 = document.querySelector ("#ParrafoActividad3")
let botonActividad4 = document.querySelector ("#BotonActividad4")
let parrafoActividad4 = document.querySelector ("#ParrafoActividad4")
let botonActividad5 = document.querySelector ("#BotonActividad5")
let parrafoActividad5 = document.querySelector ("#ParrafoActividad5")
let botonActividad6 = document.querySelector ("#BotonActividad6")
let parrafoActividad6 = document.querySelector ("#ParrafoActividad6")
let botonActividad7 = document.querySelector ("#BotonActividad7")
let parrafoActividad7 = document.querySelector ("#ParrafoActividad7")

//Condiciones
botonActividad1.onclick = function (){
    if (edad >= 18)
    {
    parrafoActividad1.textContent = "Usted es mayor de edad"
    }else{
    parrafoActividad1.textContent = "Usted es menor de edad"
    }
}
botonActividad2.onclick = function (){
    if (nombreUsuario == "Nahuel")
    {
        parrafoActividad2.textContent = "Bienvenido, Nahuel. ¿Cómo estás?"
    }else{
        parrafoActividad2.textContent = "Bienvenido, Usuario."
    }
}
botonActividad3.onclick = function (){
    if (nombreUsuario2 == "Nahuel" || nombreUsuario2 == "Marcos")
    {
        parrafoActividad3.textContent = "Bienvenido, " + nombreUsuario2 + ". ¿Cómo estás?"
    }else{
        parrafoActividad3.textContent = "Bienvenido, " + nombreUsuario2 + "."
    }
}
botonActividad4.onclick = function (){
    if (numero < 0)
    {
        parrafoActividad4.textContent = "El número es menor a 0."
    }else if (numero == 0){
        parrafoActividad4.textContent = "El número es 0."
    }else if (numero > 0){
        parrafoActividad4.textContent = "El número es mayor a 0."
    }
}
botonActividad5.onclick = function (){
    if (edad2 >= 6 && edad2 <= 11){
        parrafoActividad5.textContent = "Niño"
    }else if (edad2 >= 12 && edad2 <= 18){
        parrafoActividad5.textContent = "Adolescente"
    }else if (edad2 >= 19 && edad2 <= 26){
        parrafoActividad5.textContent = "Jóven"
    }else if (edad2 >= 27 && edad2 <= 59){
        parrafoActividad5.textContent = "Adulto"
    }else if (edad2 >= 60){
        parrafoActividad5.textContent = "Anciano"
    }
}
botonActividad6.onclick = function (){
    if (dia == "lunes" || dia == "martes" || dia == "miercoles" || dia == "jueves" || dia == "viernes")
    {
        parrafoActividad6.textContent = "Es un día laborable."
    }else if (dia == "sabado" || "domingo")
    {
        parrafoActividad6.textContent = "Es fin de semana."
    }
}
botonActividad7.onclick = function (){
    if (contrasenia == "secreto"){
        parrafoActividad7.textContent = "Acceso concedido."
    }else{
        parrafoActividad7.textContent = "Acceso denegado."
    }
}