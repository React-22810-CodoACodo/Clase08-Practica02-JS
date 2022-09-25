/* 13. Segundos a horas, minutos y segundos
* Crear un programa que pida 
    - ingresar una cantidad en segundos y 
    - muestre un mensaje con el resultado de la conversión en horas, minutos y segundos que corresponde a esa cantidad 
        - (p.ej. 3602 segundos = 1 hora 2 segundos). (Usar operador módulo) */

let segundos = prompt('Ingrese la cantidad de segundos: ');

let seg = segundos % 60;
let entero = Math.trunc(segundos / 60);
let minutos = entero % 60;
let hora = Math.trunc(entero / 60);

let mensaje = alert(segundos + ' segundos = ' + hora + ' hora/s ' + minutos + ' minuto/s ' + seg + ' segundo/s');