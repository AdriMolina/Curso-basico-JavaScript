// imprimir del 0 al 10 
/*var contador = 0;
while(contador < 10){
  contador++;
  console.log(contador);
  
}*/


// palabras reservadas
// break 
// continue

//Ejemplo imprimir solo pares 
/*var contador = 0;
while(contador < 10){
  contador++;
  if(contador % 2 !== 0){
    continue; // se salta a la siguiente 
  }
  console.log(contador);
}*/

//ejmeplo con break: rompe el ciclo
//Ciclo infinito while(true)

/*var contador = 0;
while(true){
  contador++;
  
  console.log(contador);
  if(contador>= 10){
    break;
  }
}*/


//variación del ciclo while 
// do while
var contador = 0;

do{
  contador++;
  
  console.log(contador);
  if(contador >= 10){
    break;
  }
} while(false);

