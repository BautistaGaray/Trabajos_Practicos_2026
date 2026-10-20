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