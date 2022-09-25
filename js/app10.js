/* 10. Incremento
* Crear un programa que pida 
    - ingresar una número de partida y 
    - una cantidad a ir incrementando y 
    - mostrar cinco mensajes seguidos que muestren 
        - el número del mensaje y 
        - el total incrementado hasta el momento 
        (p. ej.: empezando con 5 e incrementando 5, "Incremento 1) Total: 10", "Incremento 2) Total: 15", "Incremento 3) Total: 20", etc.). */

let numPartida = parseInt(prompt('Ingrese un numero de partida: '));
let cantIncremento = parseInt(prompt('Ingrese la cantidad a incrementar: '));

let total = numPartida + cantIncremento
let mensaje = alert('Incremento 1) Total: ' + total);
total = total + cantIncremento
mensaje = alert('Incremento 2) Total: ' + total);
total = total + cantIncremento
mensaje = alert('Incremento 3) Total: ' + total);
total = total + cantIncremento
mensaje = alert('Incremento 4) Total: ' + total);
total = total + cantIncremento
mensaje = alert('Incremento 5) Total: ' + total);