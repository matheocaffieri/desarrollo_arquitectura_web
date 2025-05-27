//Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y guardar el resultado en una variable, mostrando el valor de dicha variable en la consola del navegador.

function suma(a, b) {
    return a + b;
}
let resultadoSuma = suma(5, 10);
console.log(resultadoSuma);

//A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un número, mostrar una alerta aclarando que uno de los parámetros tiene error y retornar el valor NaN como resultado.

function sumaConValidacion(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        alert("Uno de los parámetros no es un número");
        return NaN;
    }
    return a + b;
}
let resultadoSumaValidada = sumaConValidacion(5, "10");
console.log(resultadoSumaValidada);

//Crear una función validate integer que reciba un número como parámetro y devuelva verdadero si es un número entero.

function validateInteger(num) {
    return Number.isInteger(num);
}   
let esEntero = validateInteger(10);
console.log(esEntero); 

//A la función suma del ejercicio 6b) agregarle una llamada que valide que los números sean enteros. En caso que haya decimales mostrar un alerta con el error y retorna el número convertido a entero (redondeado).

function sumaConValidacionEnteros(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        alert("Uno de los parámetros no es un número");
        return NaN;
    }
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        alert("Los números deben ser enteros. Se redondearán.");
        a = Math.round(a);
        b = Math.round(b);
    }
    return a + b;
}

//Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de la función suma probando que todo siga funcionando igual.

function validateIntegerAndRound(num) {
    if (!Number.isInteger(num)) {
        alert("El número debe ser entero. Se redondeará.");
        return Math.round(num);
    }
    return num;
}
function sumaConValidacionEnterosSeparada(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        alert("Uno de los parámetros no es un número");
        return NaN;
    }
    a = validateIntegerAndRound(a);
    b = validateIntegerAndRound(b);
    return a + b;
}
let resultadoSumaEnteros = sumaConValidacionEnterosSeparada(5.5, 10.2);
console.log(resultadoSumaEnteros);

