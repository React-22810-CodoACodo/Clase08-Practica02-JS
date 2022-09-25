/* 12. Múltiplos
* Crear un programa que 
    - pida al usuario un número, 
    - luego otro y 
    - mostrar en un mensaje si el primer valor es múltiplo del segundo. 
        INVESTIGAR EL OPERADOR MÓDULO O DE RESTO % PARA HACERLO */

let num_uno = prompt('Ingrese un numero natural: ');
let num_dos = prompt('Ingrese otro numero natural: ');

let multiplo = num_uno % num_dos; 

if (multiplo === 0) {
    alert('El número: ' + num_uno + ' es múltiplo de ' + num_dos);
} else {
    alert('El número: ' + num_uno + ' NO es múltiplo de: ' + num_dos);
}