//Variables

let titulo = document.querySelector ("h1")
let parrafo = document.querySelector ("p")
let botonCambiarFondo = document.querySelector ("#BotonCambioFondo")
let botonCambiarTexto = document.querySelector ("#BotonCambioTexto")
let botonCambiarColorLetra = document.querySelector ("#BotonCambioColorLetra")
let botonCambiarLetra = document.querySelector ("#BotonCambioLetra")
let botonReiniciar = document.querySelector ("#BotonReinicio")
let botonCambiarTamaño = document.querySelector ("#BotonCambioTamañoLetra")

//Funcionamiento de los botones

botonCambiarFondo.onclick = function () {
    parrafo.style.backgroundColor = "navajowhite"
}
botonCambiarTamaño.onclick = function () {
    parrafo.style.fontSize = "30px"
}
botonCambiarTexto.onclick = function () {
    parrafo.textContent = "Perfecto, cambiaste el contenido del parrafo. Prueba a reiniciar los cambios o probar otros botones"
}
botonCambiarLetra.onclick = function () {
    parrafo.style.fontFamily = "Impact"
}
botonCambiarColorLetra.onclick = function () {
    parrafo.style.color = "gray"
}
botonReiniciar.onclick = function () {
    parrafo.style.backgroundColor = "beige"
    parrafo.style.fontSize = "medium"
    parrafo.textContent = "En esta página, vas a poder realizar distintos cambios a la página web, con los botones interactivos. Intenta probar alguno."
    parrafo.style.fontFamily = "Arial"
    parrafo.style.color = "darkgoldenrod"
}