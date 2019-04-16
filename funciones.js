/*//sintaxis de una funcion 
function nombre_function(){
  //cosigo que se va a ejecutar al llamar la funcion 
  return ;
}*/

//Ejemplo
function suma(a,b){
  return a+b;
 }
 var resultado = suma(4,7);

console.log(resultado);


// las funciones se pueden pasar como parametros 

function suma(a,b){
  //console.log(b);
  b = b || 0;
  return a+b;
}
var resultado = suma(2);

console.log(resultado);





