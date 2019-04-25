'use strict';


//En este ejemplo no se immprimme el nombre xq la variable let esta declara dentro de un bloque 
//por ese motivo nos dice q no esta definida
//si cambias a var si impirme el nombre 
init();
function init(){
  if(true){
   let nombre = "Paty";
  }
  
  console.log(nombre);   
  
}

// si ponemso console dentro de la funcion si va a imprimir el resultado de l avariable let 

init();
function init(){
  if(true){
    let nombre = "Paty";
    console.log(nombre);
  }
}






