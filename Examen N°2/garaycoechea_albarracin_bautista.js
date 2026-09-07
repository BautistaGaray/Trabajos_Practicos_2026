let body = document.querySelector ("body")

//Variables Ejercicio 1
let inputEjercicio1 = document.querySelector ("#inputEjercicio1")
let botonEjercicio1 = document.querySelector ("#botonEjercicio1")
let parrafoEjercicio1 = document.querySelector ("#parrafoEjercicio1")
let temperatura = 0
//Condicion Ejercicio 1
botonEjercicio1.onclick = function (){
    temperatura = inputEjercicio1.value
    if (temperatura < 10){
        parrafoEjercicio1.textContent = "Hace frío"
        body.style.backgroundColor = "blue"
    }else if ((temperatura >= 10) && (temperatura <=25)){
        parrafoEjercicio1.textContent = "Clima agradable"
        body.style.backgroundColor = "green"
    }else if (temperatura > 25){
        parrafoEjercicio1.textContent = "Hace calor"
        body.style.backgroundColor = "red"
    }
}

//Variables Ejercicio 2
let inputEjercicio2 = document.querySelector ("#inputEjercicio2")
let botonEjercicio2 = document.querySelector ("#botonEjercicio2")
let parrafoEjercicio2 = document.querySelector ("#parrafoEjercicio2")
let diaBasura = ""
//Condicion Ejercicio 2
botonEjercicio2.onclick = function (){
    diaBasura = inputEjercicio2.value
    if ((diaBasura == "lunes") || (diaBasura == "miercoles") || (diaBasura == "viernes")){
        parrafoEjercicio2.textContent = "Hoy se recolectan residuos secos"
    }else if ((diaBasura == "martes") || (diaBasura == "jueves") || (diaBasura == "sabado")){
        parrafoEjercicio2.textContent = "Hoy se recolectan residuos húmedos"
    }else if (diaBasura == "domingo"){
        parrafoEjercicio2.textContent = "Hoy no se recolectan residuos"
    }
}

//Variables Ejercicio 3
let inputEjercicio3 = document.querySelector ("#inputEjercicio3")
let input2Ejercicio3 = document.querySelector ("#input2Ejercicio3")
let botonEjercicio3 = document.querySelector ("#botonEjercicio3")
let parrafoEjercicio3 = document.querySelector ("#parrafoEjercicio3")
let usuario = ""
let contrasenia
//Condicion Ejercicio 3
botonEjercicio3.onclick = function(){
    usuario = inputEjercicio3.value
    contrasenia = input2Ejercicio3.value
    if ((usuario == "admin") && (contrasenia == '1234')){
        parrafoEjercicio3.textContent = "Acceso Concedido"
    }else {
        parrafoEjercicio3.textContent = "Acceso Denegado"
    }
}

//Variables Ejercicio 4
let inputEjercicio4 = document.querySelector ("#inputEjercicio4")
let botonEjercicio4 = document.querySelector ("#botonEjercicio4")
let parrafoEjercicio4 = document.querySelector ("#parrafoEjercicio4")
let nombre = ""
//Condicion Ejercicio 4
botonEjercicio4.onclick = function(){
    nombre = inputEjercicio4.value
    if ((nombre == "Benja") || (nombre == "Alejo") || (nombre == "Ramiro") || (nombre == "Maxi") || (nombre == "Nahuel")){
        parrafoEjercicio4.textContent = "✔ " + nombre + " esta presente"
    }else {
        parrafoEjercicio4.textContent = "❌ " + nombre + " esta ausente"
    }
}