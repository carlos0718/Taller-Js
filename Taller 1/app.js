//DECLARACION DE VARIABLES : VAR - LET - CONST

let nombre = "Johan";
let numero = 25;
let x;

//TIPOS DE VARIABLES : STRING - NUMBER - BOOLEAN - UNDEFINED - NULL

//STRING => SIEMPRE VA ENTRE COMILLAS

let apellido = "Gomez"; //string
let edad = 25; //number
let casado = false; //boolean
let esMayorDeEdad = true; //boolean

// console.log()

console.log("Hola soy " + nombre + " " + apellido);
console.log("Tengo", edad, "años");

//=>alert()

//alert("Hola soy " + nombre + " " + apellido);

// OPERACIONES
// => Crear variables numéricas y asiganrles valores de tipo number y hacer las operaciones
// de SUMAR, RESTAR, MULTIPLICAR Y DIVIDIR y mostrarlo por alert y consola.

//=> promp()

//let num1 = prompt("Ingrese el primer número"); // prompnt siempre retorna string
//let num2 = prompt("Ingrese el segundo número");

/* let resultado = parseInt(num1) + parseInt(num2); // parseo de dato string a number
alert(resultado); */

let name = prompt("Ingrese su nombre");
let lastName = prompt("Ingrese su apellido");
let age = prompt("Ingrese su edad");
console.log(typeof age);
let mensaje = alert("Mi nombre es " + name + " " + lastName + " y tengo " + age + " años");
document.write("<h1>Mi nombre es " + name + " " + lastName + " y tengo " + age + " años</h1>");
age = parseInt(age); // parseo de dato string a number

console.log(typeof age);
