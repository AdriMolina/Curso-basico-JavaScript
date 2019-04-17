/*
//Forma normal
var numeros = [10,2,3,5,9,20,22,8];//arreglo normal

var numeros_pares = []://arreglo vacio

for(var i = numeros.length;i>=0;i--){
  var numero = numeros[i];
  if(numero % 2 == 0){
    numeros_pares.push(numero);
  }

}

console.log(numeros_pares);        
*/

// con Filter: mejor forma pero hacen lo mismo 
// Ejercicio para mostar solo numeros pares
var numeros = [10,2,3,5,9,20,22,8];//arreglo normal

var numeros_pares = 
    numeros.filter(function(numero){
      return numero % 2 ===  0;
    })

console.log(numeros_pares);        