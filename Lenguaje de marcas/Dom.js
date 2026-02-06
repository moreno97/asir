// DOM (MODELO DE OBJETOS DEL DOCUMENTO) es una representacion en forma de arbol.

// Para seleccionar un elemento del DOM desde JavaScript podemos usar : 

document.getElementById("idPuestoEnHTML") // Selecciona un elemento del doc HTML identificado con el id igual a idPuestoenHTML

document.getElementsByClassName(".clase") // Selecciona todos los elementos con el atributo class igual a clase de HTML.

document.getElementsByTagName("p") // Selecciona todos los parrafos del doc HTML

document.querySelector("p") // Selecciona el primer elemento parrafo del doc HTML

document.querySelectorAll(".clase") // Selecciona todos los elementos con el atributo class igual a clase del doc HTML


// Eventos :

// - Pulsar un boton : 

// <script>

function fuction() {
    document.getElementById("parrafo").innerHTML = "Modifica contenido";
}

// <script>

// <button type="buttom" onclick="funcion()">Pulsa aqui</button>


// - Para terminar de cargar la pagina : 

window.onload = fuction() 



// Trabajar con los elementos : 

parrafo.style.color = "blue" // Modifica el aspecto, el color de la letra, al color azul del elemento parrafo.

parrafo.style.textContent = "Hola mungo" // Modifica el texto contenido dentro del elemento parrafo.

parrafo.style.innerHTML = "<B>Hola</B> mundo" // Modifica el HTML dentro del elemento parrafo.

imagen.setAttribute("src", "otra.png") // Cambia el atributo src, es decir, cambia la imagen

// - Para crear un nuevo elemento : 

const nuevo = document.createElement("p");
nuevo.textContent = "Nuevo parrafo.";
document.body.appendChild(nuevo);

// - Para borrar un  elemento : 

parrafo.remove 