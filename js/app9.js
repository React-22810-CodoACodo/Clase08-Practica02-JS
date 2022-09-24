/* 9.-Duración vuelo
* Crear un programa que pida al usuario 
    - ingresar, por separado, 
        * 3 destinos de las escalas de un vuelo, y 
        * la duración de cada uno de ellos. 
    - Al final debe 
        * mostrar un mensaje que liste todas las escalas con su duración y 
        * la duración total del vuelo. */

let destino_uno = prompt('Ingrese el 1er destino: ');
let duracion_uno = parseInt(prompt('Ingrese la duración al 1er destino en horas: '));
let destino_dos = prompt('Ingrese el 2do destino: ');
let duracion_dos = parseInt(prompt('Ingrese la duración al 2do destino en horas: '));
let destino_tres = prompt('Ingrese el 3er destino: ');
let duracion_tres = parseInt(prompt('Ingrese la duración al 3er destino en horas: '));

let total = duracion_uno + duracion_dos + duracion_tres;

let mensaje = alert('1er destino: ' + destino_uno + ', duración: ' + duracion_uno + ' horas ; ' + '2do destino: ' + destino_dos + ', duración: ' + duracion_dos + ' horas ; ' + '3er destino: ' + destino_tres + ', duración: ' + duracion_tres + ' horas ; Duración total del viaje: ' + total + ' horas');