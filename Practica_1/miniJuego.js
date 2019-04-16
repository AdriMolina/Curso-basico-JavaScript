// numero maximo 
var max = 100; 

// numero minimo 
 var min = 1;

// numero aleatorio 
var numero_secreto = Math.random() * 
(max - min) + min;    
// numero que puede estar entre el 0 y el 1 y se multiplica para adaptarlo al rango q nosotros definimos

// convertir de decimales a enteros con parseIn 
numero_secreto = 
parseInt(numero_secreto);
console.log(numero_secreto);

//Mensaje con prompt para el usuario, se estara editando
var mensaje = "Ingresa un número para adivinar el número mágico"

while(true){
  var numero_del_usuario = prompt(mensaje, "0");

// prompt retorna un string y lo convertimos a numero
numero_del_usuario = parseInt(numero_del_usuario);

if (numero_del_usuario === numero_secreto){
  alert("Ganasteeee!!! Adivinaste el número secreto");
  break;
}
else if(numero_del_usuario === 0){
  break;
}
else if(numero_del_usuario > numero_secreto){
  mensaje = " Lo sentimos, el número que ingresaste es mayor al número mágico"; 
} 
else if(numero_del_usuario < numero_secreto){
  mensaje = "Lo sentimos, el número que ingresaste es menor al numero mágico";
}
   }


