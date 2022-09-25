/* 5.-Área de un triangulo
* Crear un programa que pida al usuario 
    - ingresar el valor de la base y el valor de la altura de un triangulo, 
    - calcular su área y 
    - mostrarlo en un mensaje. */

let base = prompt('Ingrese el valor de la base de un triangulo en cm: ');
let altura = prompt('Ingrese el valor de la altura de un triagulo en cm: ');

let area = (base * altura) / 2;

let mensaje = alert('El área del triangulo es: ' + area + ' centimetros cuadrados');