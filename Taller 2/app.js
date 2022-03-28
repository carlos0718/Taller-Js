//CONDICIONALES => IF - ELSE - ELSE IF

/* condicion = true o false
if (condicion) {
    codigo a ejecutar si la condicion es verdadera
} */

/* let edad = prompt("Ingrese su edad");
edad = parseInt(edad);

if (edad < 17) {
	alert("Ud es adolescente");
}
if (edad < 30) {
	alert("Ud es joven");
}
if (edad < 60) {
	alert("Ud es adulto");
}
if (edad < 100) {
	alert("Ud es adulto mayor");
}
 */
// IF - ELSE

/* let nivel = prompt("Ingresa tu mmr");
nivel = parseInt(nivel);
if (nivel < 1000) {
	alert("eres heraldo");
} else {
	alert("eres cruzado");
} */

// IF - ELSE IF

/* let edad = prompt("Ingrese su edad");
edad = parseInt(edad);

if (edad < 17) {
	alert("Ud es adolescente");
} else if (edad < 30) {
	alert("Ud es joven");
} else if (edad <= 60) {
	alert("Ud es adulto");
} else if (edad < 100) {
	alert("Ud es adulto mayor");
} else {
	alert("valor invalido");
} */

/* let usuario = prompt("Ingrese su usuario");
console.log(usuario); */
//usuario = usuario.toLowerCase(); => toLowerCase() convierte a minusculas
//usuario = usuario.toUpperCase(); // => toUpperCase() convierte a mayusculas

/* let clave = prompt("Ingrese su clave");
clave = parseInt(clave); */
//OPERADORES LÓGICOS => AND, OR, NOT => &&, ||, !
//console.log(usuario);
/* if (usuario == "CARLOS") {
	if (clave == 123456) {
		alert("Bienvenido " + usuario);
	} else {
		alert("Clave incorrecta");
	}
} else {
	alert("Usuario incorrecto");
}
 */

/* if (usuario == "CARLOS" && clave == 123456) {
	alert("Bienvenido " + usuario);
} else {
	alert("Usuario o clave incorrecto");
} */

let color = prompt("Que color te gusta más: Rojo o Azul");
color = color.toLowerCase();

if (color == "rojo" || color == "azul") {
	alert("Eres un amante del color " + color);
} else {
	alert("Elejiste el color " + color);
}
