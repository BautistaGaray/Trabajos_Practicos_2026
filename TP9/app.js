//Variables
let body = document.querySelector ("body")
let input1Funcion1 = document.querySelector ("#input1Funcion1")
let input2Funcion1 = document.querySelector ("#input2Funcion1")
let input1Funcion2 = document.querySelector ("#input1Funcion2")
let input2Funcion2 = document.querySelector ("#input2Funcion2")
let input1Funcion3 = document.querySelector ("#input1Funcion3")
let input2Funcion3 = document.querySelector ("#input2Funcion3")
let input1Funcion4 = document.querySelector ("#input1Funcion4")
let input1Funcion5 = document.querySelector ("#input1Funcion5")
let botonFuncion1 = document.querySelector ("#botonFuncion1")
let botonFuncion2 = document.querySelector ("#botonFuncion2")
let botonFuncion3 = document.querySelector ("#botonFuncion3")
let botonFuncion4 = document.querySelector ("#botonFuncion4")
let botonFuncion5 = document.querySelector ("#botonFuncion5")
let botonFuncion6 = document.querySelector ("#botonFuncion6")
let botonFuncion7 = document.querySelector ("#botonFuncion7")
let parrafoFuncion1 = document.querySelector ("#resultadoFuncion1")
let parrafoFuncion2 = document.querySelector ("#resultadoFuncion2")
let parrafoFuncion3 = document.querySelector ("#resultadoFuncion3")
let parrafoFuncion4 = document.querySelector ("#resultadoFuncion4")
let parrafoFuncion5 = document.querySelector ("#resultadoFuncion5")
let parrafoFuncion6 = document.querySelector ("#resultadoFuncion6")
let parrafoFuncion7 = document.querySelector ("#resultadoFuncion7")

function mayor (n1, n2) {
    if (n1 > n2) {
        return "El mayor es: " + n1
    }else if (n1 < n2){
        return "El mayor es: " + n2
    }
}
botonFuncion1.onclick = function (){
    parrafoFuncion1.textContent = mayor (input1Funcion1.value, input2Funcion1.value)
}
function menor (n1, n2) {
    if (n1 < n2) {
        return "El menor es: " + n1
    }else if (n1 > n2){
        return "El menor es: " + n2
    }
}
botonFuncion2.onclick = function (){
    parrafoFuncion2.textContent = menor (input1Funcion2.value, input2Funcion2.value)
}
function igualdad (n1, n2) {
    if (n1 == n2) {
        return "Los números son iguales"
    }else if (n1 < n2){
        return "Son distintos"
    }
}
botonFuncion3.onclick = function (){
    parrafoFuncion3.textContent = igualdad (input1Funcion3.value, input2Funcion3.value)
}
function iva (n1){
    let impuesto = n1 * 1.21
    return "El total con IVA es: $" + impuesto
}
botonFuncion4.onclick = function (){
    parrafoFuncion4.textContent = iva (input1Funcion4.value)
}
function saludo (nombre){
    return "Hola, " + nombre + "!"
}
botonFuncion5.onclick = function (){
    parrafoFuncion5.textContent = saludo (input1Funcion5.value)
}
function modoOscuro (fondo, letra){
    let color = document.querySelector ("body")
    color.style.backgroundColor = ("#1C1C1C")
    color.style.color = ("#ffffff")
}
botonFuncion6.onclick = function (){
    modoOscuro (body, body)
}
function modoClaro (fondo, letra){
    let color = document.querySelector ("body")
    color.style.backgroundColor = ("#f0f0f0")
    color.style.color = ("#000000")
}
botonFuncion7.onclick = function (){
    modoClaro (body, body)
}