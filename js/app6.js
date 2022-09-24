/* 6.-Perímetro de un rectángulo
* Crear un programa que pida al usuario 
    - ingresar el valor de la altura y el valor del ancho de un rectángulo, 
    - calcular su perímetro y 
    - mostrarlo en un mensaje. */

let altura = prompt('Ingrese el valor de la altura de un rectangulo en cm: ');
let ancho = prompt('Ingrese el valor del ancho de un rectangulo en cm: ');

let perimetro = 2*(ancho + altura);

let mensaje = alert('El perímetro del rectangulo es: ' + perimetro + ' centímetros.');