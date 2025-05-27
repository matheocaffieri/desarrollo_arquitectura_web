//Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula (utilizar toUpperCase).

let texto = "me llamo matheo";
let textoMayuscula = texto.toUpperCase();
console.log(textoMayuscula);

//Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).

let textoLargo = "desarrollador";
let primCinco = textoLargo.substring(0, 5);
console.log(primCinco);

//Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring).

let textoLargo2 = "programacion";
let ultTres = textoLargo2.substring(textoLargo2.length - 3);
console.log(ultTres);

//Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +).

let textoNombre = "carACTEres";
let textoCap = textoNombre.substring(0, 1).toUpperCase() + textoNombre.substring(1).toLowerCase();
console.log(textoCap);

//Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).

let textoConEspacio = "hola mundo web";
let posicionEspacio = textoConEspacio.indexOf(" ");
console.log(posicionEspacio);

//Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio). Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).

let textoDosPalabras = "desarrollador programacion";
let espacio = textoDosPalabras.indexOf(" ");
let palabra1 = textoDosPalabras.substring(0, espacio);
let palabra2 = textoDosPalabras.substring(espacio + 1);

let palabra1Cap = palabra1.substring(0, 1).toUpperCase() + palabra1.substring(1).toLowerCase();
let palabra2Cap = palabra2.substring(0, 1).toUpperCase() + palabra2.substring(1).toLowerCase();

let resultado = palabra1Cap + " " + palabra2Cap;
console.log(resultado);