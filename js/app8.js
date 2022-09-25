/* 8.Tiempo de viaje
* Crear un programa que pida al usuario 
    - la distancia de su recorrido y 
    - mostrar en un mensaje cuánto tiempo tardaría en completar el recorrido en distintos medios de transporte, 
    - definiendo de antemano distintas velocidades para distintos medios de transporte 
        - (p. ej.: a pie: 5 km/hora, bici 10km/hora, etc.). */

let recorrido = parseInt(prompt('Ingrese la distancia de su recorrido en km: '));
let medioTransporte = prompt('Ingrese el medio de transporte: 1-pie | 2-bici | 3-auto');

const velo = [5, 10, 60];

if (medioTransporte == velo[0]) {
    var resultado = recorrido/velo[0]
} if (medioTransporte == velo[1]) {
    resultado = recorrido/velo[1]
} else {
    resultado = recorrido/velo[2]
}

let mensaje = alert('El tiempo que tardaría en completar el recorrido es de: ' + resultado + ' hora/s');