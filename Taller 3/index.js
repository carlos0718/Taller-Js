// => WHILE()

//let i = 0;
/*while (i < 5) {
	document.write(i)// = 0 , 1, 2, 3,4
	i = prompt("Ingresa un numero"); // 1 , 2, 3 , 4 ,5
}*/
//document.write("<br> Acá se muestra el 5</br > ");
/* while (i < 5) {
	i = prompt("Ingresa un numero"); // 1, 2, 3, 4, 5
	document.write(i); //1, 2, 3, 4,5
} */

/*************************Ingresoo de Productos*********************************/
/* let producto = prompt("Ingresa el nombre del producto");

while (producto != "salir") {
	alert("El producto es: " + producto);
	producto = prompt("Ingresa el nombre del producto o escriba 'salir' para terminar de listar").toLowerCase();
} */

// => FOR()
// i++ => i = i + 1 => i+=1
/* for (let i = 1; i <= 5; i++) {
	alert(i);
} */

/* for (let index = 5; index > 0; index--) {
	alert(index);
} */

/**
 * Ej 1 : Escribir un programa que solicite el ingreso de una cantidad indeterminada de números mayores o igual a 1, y que finalice cuando ingrese cero.
 */

/**
 * Ej 2: Hacer un script para que me muestre un menú de opciones, donde pueda sumar, restar, multiplicar, dividir y tener la opcion de SALIR. Mostrar por alert el resultado de cada operación.
 *
 * Por ejemplo: 1) Sumar 2) Restar 3) Multiplicar 4) Dividir 5) Salir, si elijo la opción 1, deberá mostrar un mensaje que diga: "Ingrese el primer número: ", luego, ingresar "Ingresar el segundo numero".
 */

let x = "1";
switch (x) {
	// "1" == "uno" ?
	case "1":
		break;
	case "2":
		break;
	// "tres" == "tres" ? verdadero
	case "3":
		break;

	default:
		break;
}
