
//une las letras en una palabra
var letras = ["H","o","l","a"];
var palabra = letras.reduce(function(valor_anterior_retornado,valor_actual,index,arreglo){
  return valor_anterior_retornado + valor_actual;
});
//primera iteracion- H
//segunda iteracion- Ho
//tercera iteracion- Hol
//cuarta iteracion- Hola
console.log(palabra);

// otro ejemplo 
//sumar todos los numeros de un arreglo 
 var numeros = [20,1,23,1,5];
var suma = numeros.reduce(function(valor_anterior_retornado,valor_actual,index,arreglo){
  return valor_anterior_retornado + valor_actual;
});
console.log(suma);
// imprime 50

//otra forma de conseguir el mismo resultado
var suma = 0;
for(var i = 0;i<numeros.length;i++){
  suma += numeros[i];
}

console.log(suma);
 
