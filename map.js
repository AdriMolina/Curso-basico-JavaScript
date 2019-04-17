/*//codigo sin map. ejemplo para obtener el cuadrado del numero 
var numeros = [1,5,6,8];

var cuadrados = [];

for(var i = numeros.length - 1; i>=0; i--){
var numero = numeros[i];
cuadrados.push(Math.pow(numero,2));
}
console.log(cuadrados);
*/

//con Map
var numeros = [1,5,6,8];
var cuadrados = numeros.map(function(elemento){
  return elemento * elemento;
 });

console.log(cuadrados);