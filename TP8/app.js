//Variables
let edad = 0
let nombreUsuario = ""
let nombreUsuario2 = ""
let numero = 0
let edad2 = 0
let dia = ""
let contrasenia = ""
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
let inputActividad1 = document.querySelector ("#InputActividad1")
let inputActividad2 = document.querySelector ("#InputActividad2")
let inputActividad3 = document.querySelector ("#InputActividad3")
let inputActividad4 = document.querySelector ("#InputActividad4")
let inputActividad5 = document.querySelector ("#InputActividad5")
let inputActividad6 = document.querySelector ("#InputActividad6")
let inputActividad7 = document.querySelector ("#InputActividad7")
//Condiciones
botonActividad1.onclick = function (){
    edad = inputActividad1.value
    if (edad >= 18)
    {
    parrafoActividad1.textContent = "Usted es mayor de edad"
    }else{
    parrafoActividad1.textContent = "Usted es menor de edad"
    }
}
botonActividad2.onclick = function (){
    nombreUsuario = inputActividad2.value
    if (nombreUsuario == "Nahuel")
    {
        parrafoActividad2.textContent = "Bienvenido, Nahuel. ¿Cómo estás?"
    }else{
        parrafoActividad2.textContent = "Bienvenido, Usuario."
    }
}
botonActividad3.onclick = function (){
    nombreUsuario2 = inputActividad3.value
    if ((nombreUsuario2 == "Nahuel") || (nombreUsuario2 == "Marcos"))
    {
        parrafoActividad3.textContent = "Bienvenido, " + nombreUsuario2 + ". ¿Cómo estás?"
    }else{
        parrafoActividad3.textContent = "Bienvenido, " + nombreUsuario2 + "."
    }
}
botonActividad4.onclick = function (){
    numero = inputActividad4.value
    if (numero < 0)
    {
        parrafoActividad4.textContent = "El número es negativo."
    }else if (numero == 0){
        parrafoActividad4.textContent = "El número es 0."
    }else if (numero > 0){
        parrafoActividad4.textContent = "El número es positivo."
    }
}
botonActividad5.onclick = function (){
    edad2 = inputActividad5.value
    if ((edad2 >= 6) && (edad2 <= 11)){
        parrafoActividad5.textContent = "Niño"
    }else if ((edad2 >= 12) && (edad2 <= 18)){
        parrafoActividad5.textContent = "Adolescente"
    }else if ((edad2 >= 19) && (edad2 <= 26)){
        parrafoActividad5.textContent = "Jóven"
    }else if ((edad2 >= 27) && (edad2 <= 59)){
        parrafoActividad5.textContent = "Adulto"
    }else if (edad2 >= 60){
        parrafoActividad5.textContent = "Anciano"
    }else {
        parrafoActividad5.textContent = "Edad no correspondida."
    }
}
botonActividad6.onclick = function (){
    dia = inputActividad6.value
    if ((dia == "lunes") || (dia == "martes") || (dia == "miercoles") || (dia == "jueves") || (dia == "viernes"))
    {
        parrafoActividad6.textContent = "Es un día laborable."
    }else if ((dia == "sabado") || (dia == "domingo"))
    {
        parrafoActividad6.textContent = "Es fin de semana."
    }
}
botonActividad7.onclick = function (){
    contrasenia = inputActividad7.value
    if (contrasenia == "secreto"){
        parrafoActividad7.textContent = "Acceso concedido."
    }else{
        parrafoActividad7.textContent = "Acceso denegado."
    }
}