// forEach 
var numeros = [2,4,6,8];

numeros.forEach(function(elemento,index,arreglo){
 // Validar imprimiendo cada unos de los valores 
  console.log(elemento);
  console.log(index);
  console.log(arreglo);
})


// arreglo para imprimir numeros al cuadrado 
var numeros = [2,4,6,8];

numeros.forEach(function(elemento,index,arreglo){
  arreglo[index] = Math.pow(elemento,2);
 });
 console.log(numeros);
