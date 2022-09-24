/* 7.-Porcentaje
Crear un programa que pida al usuario 
    - ingresar un número, y luego 
    - el porcentaje que se desea obtener del mismo. 
    - Devolver un mensaje que muestre el porcentaje de dicho número.
 */

let numero = prompt('Ingrese un numero: ');
let porcentaje = prompt('Ingrese un porcentaje de 0 a 100: ');

let resultado = (numero * porcentaje)/100;

let mensaje = alert('El ' + porcentaje + ' % de ' + numero + ' es: ' + resultado);