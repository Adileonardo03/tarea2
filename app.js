let nombre = prompt("Ingresa tu nombre ");
let edad = prompt("Ingresa tu edad");
let peso = prompt("Ingresa tu peso en Kg ");
let estatura = prompt("Ingresa tu estatura en cm ");

var  imc = (peso / (estatura * estatura))


console.log("Tu nombre es: " + nombre);
console.log("Tu edad es: " + edad);
console.log("Tu peso es: " + peso);
console.log("Tu estatura es: " + estatura);
console.log("Tu Masa corporal es: " + imc);

var clasificacion;
if (imc < 18.5) {
    clasificacion = 'estás muy delgado';
  } else if (imc < 25) {
    clasificacion = 'estás saludable';
  } else {
    clasificacion = 'tienes sobrepeso';
  }

  console.log("Hola, tu IMC es " + imc +  " y estas en la clasificacion de  " + clasificacion);