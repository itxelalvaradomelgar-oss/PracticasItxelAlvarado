// 1. Uso de CONST para declarar elementos del DOM que no van a cambiar
const boton = document.getElementById('btn-generar');
const inputJuego = document.getElementById('juego');
const inputCalificacion = document.getElementById('calificacion');
const textoResultado = document.getElementById('resultado');

// 2. ARROW FUNCTION para procesar el veredicto según la nota
// Retorna un texto divertido usando plantillas literales (template strings)
const obtenerVeredicto = (nota) => {
if (nota >= 8) {
return "¡ya no aguanto ya no aguanto!";
} else if (nota >= 5) {
return "mira abuela yo sere blanca nieves:/";
} else {
return "no, tu mas bien seras negranievesx_x";
}
};

// 3. ARROW FUNCTION principal vinculada al evento Click del botón
boton.addEventListener('click', () => {
// Uso de LET porque sus valores dependen de lo que el usuario escriba en el
momento
let nombreJuego = inputJuego.value;
let nota = Number(inputCalificacion.value);
// Validación básica por si dejan los campos vacíos
if (nombreJuego === "" || inputCalificacion.value === "") {
textoResultado.innerText = "Oye tío, pon un nombre y una nota válida.";
return;
}
// Llamamos a la otra función de flecha para guardar el mensaje actitudinal
let veredictoFinal = obtenerVeredicto(nota);

// 4. Mostramos el resultado final combinando las variables
textoResultado.innerText = `Mi veredicto sobre "${nombreJuego}" es un 
${nota}/10. ${veredictoFinal}`;
})
