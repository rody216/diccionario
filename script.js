// Definir la variable palabras fuera de la función cargarJSON para que sea accesible desde otras funciones
var palabras;

// Función para cargar el archivo JSON
function cargarJSON(callback) {   
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'content.json', true);
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == 200) {
            palabras = JSON.parse(xobj.responseText); // Guardar las palabras en la variable global
            callback();
        }
    };
    xobj.send(null);
}

// Función para mostrar la palabra en español e inglés
function mostrarPalabra(indice) {
    document.getElementById('word-espanol').innerText = palabras[indice].spanish;
    document.getElementById('word-german').innerText = palabras[indice].german;
}

var currentIndex = 0; // Índice de la palabra actual

// Función para mostrar la siguiente palabra
function mostrarSiguientePalabra() {
    currentIndex = (currentIndex + 1) % palabras.length;
    mostrarPalabra(currentIndex);
}

// Función para mostrar la palabra anterior
function mostrarPalabraAnterior() {
    currentIndex = (currentIndex - 1 + palabras.length) % palabras.length;
    mostrarPalabra(currentIndex);
}

// Al cargar la página, cargar el JSON y mostrar la primera palabra
cargarJSON(function() {
    mostrarPalabra(currentIndex);
});



        
        
        
// JavaScript para cambiar los estilos de los botones dependiendo del lado de la tarjeta visible
const card = document.querySelector('.card');
const body = document.querySelector('body');

// Agregar clase 'card-a' al cuerpo para indicar estado inicial de la tarjeta A
body.classList.add('card-a');

// Añadir un event listener para detectar cuando el cursor entre o salga de la tarjeta
card.addEventListener('mouseenter', () => {
// Al entrar en la tarjeta, aplicar estilos de la tarjeta B a los botones
body.classList.remove('card-a');
body.classList.add('card-b');
});

card.addEventListener('mouseleave', () => {
// Al salir de la tarjeta, aplicar estilos de la tarjeta A a los botones
body.classList.remove('card-b');
body.classList.add('card-a');
});
   