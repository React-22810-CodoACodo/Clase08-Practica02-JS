/* 11. Celsius a Fahrenheit
* Crear un programa que pida 
    - ingresar una cantidad de grados Celsius y 
    - muestre un mensaje con el resultado de la conversión a grados Fahrenheit.
 */

let gradosCelsius = prompt('Ingrese los grados Celsius: ');

let gradosFahrenheit = (gradosCelsius * 9/5) + 32;

let mensaje = alert( gradosCelsius + ' º Celsius son: ' + gradosFahrenheit + ' º Fahrenheit');