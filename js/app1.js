/* 1.-Dirección completa
Crear un programa que pida al usuario ingresar, por separado, 
* la calle, 
* el número, 
* el departamento, 
* el código postal, 
* la ciudad y 
* el país, y 
muestre un mensaje con toda la dirección completa, 
p.ej.: "La dirección que ha ingresado es: Calle Falsa 123 3C, 1414, CABA, Argentina". */

let calle = prompt('Ingresar el nombre de la calle: ');
let numero = prompt('Ingrese el numero de la calle: ');
let departamento = prompt('Ingrese el numero de departamento: ');
let codPostal = prompt('Ingrese el codigo postal: ');
let ciudad = prompt('Ingrese la ciudad: ');
let pais = prompt('Ingrese el país: ');

let mensaje = prompt('La dirección que ha ingresado es: ' + calle + ' ' + numero + ' ' + departamento + ', ' + codPostal + ', ' + ciudad + ', ' + pais);