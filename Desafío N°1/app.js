//Variables
let botonFondoClaro = document.querySelector ("#cambioFondoClaro")
let botonFondoOscuro = document.querySelector ("#cambioFondoOscuro")
let titulo = document.querySelector ("h1")
let body = document.querySelector ("body")

botonFondoOscuro.onclick = function (){
    body.style.backgroundColor = ("rgb(4, 3, 65)")
    titulo.style.color = ("white")
}
botonFondoClaro.onclick = function (){
    body.style.backgroundColor = ("white")
    titulo.style.color = ("black")
}