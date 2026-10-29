//Actividad 1
let utiles = ["Lápiz", "Goma", "Regla", "Cuaderno", "Lapicera"];
console.log (utiles);
console.log (utiles[0]);
console.log (utiles[2]);
console.log (utiles[utiles.length - 1]);
console.log (utiles.length);
utiles.push ("Mochila");
console.log (utiles);
utiles.unshift ("Cartuchera");
console.log (utiles);
console.log (utiles.length);
console.log ("El último elemento es: " + utiles.pop ());
utiles.pop ();
console.log (utiles);
console.log ("El primer elemento es: " + utiles.shift ());
utiles.shift ();
console.log (utiles);
console.log (utiles.length);
//Actividad 2
let productos = ["Leche", "Pan", "Arroz", "Fideos", "Aceite"];
console.log (productos);
console.log (productos.length);
productos.push ("Azúcar");
productos.push ("Yerba");
productos.push ("Café");
console.log (productos);
productos.unshift ("Sal");
productos.unshift ("Galletitas");
console.log (productos);
console.log (productos.length);
console.log ("El último elemento es: " + productos.pop ());
productos.pop ();
console.log ("El último elemento es: " + productos.pop ());
productos.pop ();
console.log ("El primer elemento es: " + productos.shift ());
productos.shift ();
console.log (productos);
console.log (productos.length);
//Actividad 3
let productos2 = ["Teclado", "Mouse", "Monitor", "Auriculares", "Webcam", "Parlantes"];
productos2.indexOf ("Mouse");
console.log (productos2.indexOf ("Mouse"));
productos2.indexOf ("Monitor");
console.log (productos2.indexOf ("Monitor"));
productos2.indexOf ("Impresora");
console.log (productos2.indexOf ("Impresora"));
productos2.indexOf ("Teclado");
console.log (productos2.indexOf ("Teclado"));
let teclado = productos2.indexOf ("Teclado");
if (teclado == -1){
    console.log ("El elemento no se encuentra en la lista");
}else{
    console.log ("El elemento se encuentra en la posición: " + teclado);
}
productos2.push ("Impresora");
console.log (productos2.indexOf ("Impresora"));
console.log (productos2.length);
//Actividad 4
let videojuegos = ["Minecraft", "Pokemon Cristal", "Super Mario", "The Legend of Zelda", "Sonic"];
console.log (videojuegos);
console.log (videojuegos.length);
videojuegos.push ("Animal Crossing");
videojuegos.push ("Pokemon Rojo");
console.log (videojuegos);
videojuegos.unshift ("Tetris");
videojuegos.unshift ("Pac-Man");
console.log (videojuegos);
videojuegos.indexOf ("Pokemon Cristal");
console.log (videojuegos.indexOf ("Pokemon Cristal"));
videojuegos.indexOf ("Sonic");
console.log (videojuegos.indexOf ("Sonic"));
videojuegos.indexOf ("FIFA");
console.log (videojuegos.indexOf ("FIFA"));
console.log ("El videojuego eliminado va a ser: " + videojuegos.pop ());
videojuegos.pop ();
console.log ("El videojuego eliminado va a ser: " + videojuegos.shift ());
videojuegos.shift ();
console.log (videojuegos);
console.log (videojuegos.length);
//Actividad 5
let estudiantes = ["Martina", "Lucas", "Sofía", "Tomás", "Valentina"];
console.log (estudiantes);
console.log (estudiantes.length);
estudiantes.push ("Agustín");
estudiantes.push ("Camila");
console.log (estudiantes);
estudiantes.unshift ("Bruno");
console.log (estudiantes);
console.log (estudiantes.length);
estudiantes.indexOf ("Sofía");
console.log (estudiantes.indexOf ("Sofía"));
estudiantes.indexOf ("Camila");
console.log (estudiantes.indexOf ("Camila"));
estudiantes.indexOf ("Federico");
console.log (estudiantes.indexOf ("Federico"));
console.log ("El estudiante eliminado va a ser: " + estudiantes.shift);
estudiantes.shift ();
console.log ("El estudiante eliminado va a ser: " + estudiantes.pop);
estudiantes.pop ();
console.log (estudiantes)
console.log (estudiantes.length)
//Actividad 6
let tareas = ["Estudiar", "Hacer la tarea", "Ordenar la habitación", "Comprar alimentos"];
console.log (tareas);
console.log (tareas.length);
tareas.push ("Pasear al perro");