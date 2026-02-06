// Declaraciones de variables y vectores

var nombre = "Pepe" // Variable y opcionalmente la inicia con un valor.
let edad = 25; // Variable en local, no exixtira fuera.
let coche = true; // Variable booleana.
const Pi = 3.1416; // Variable constante que no se puede modificar y ambito local.
const idiomas = ["Español","Inglés", "Francés"]; // Vector de 3 valores.

// Es aconsejable declarar una variable antes de usarla. 

console.log("edad="+edad); // Imprime en consola la concatenacion de "edad=" y l valor de la variable "edad"


// Condcionales 

if (edad >=18) {
    console.log("Eres mayor de edad");
} else {
    console.log("Eres menor de edad");
}
switch (variable) {
    case valor1 : console.log("Es valor1"); break;
    case valor2 : console.log("Es valor2"); break;
    default: console.log("Cualquier otro"); break;
}

// Los operadores (== sin mirar tipo, === mira tipo, != ... logicos &&, ||, !)


// Bucles

for (let i = 0; i < 5; i++) {
    console.log("El valor de i es " + i);
}
while (edad < 30) {
    edad++;
}

// Inicialmente i vale 0 e incrementara de uno en uno hasta menor que 5 


// Funciones

function saludar(nombre) {
    return "¡Hola, " + nombre + "!";
}
console.log(saludar("Juan"));
