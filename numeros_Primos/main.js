var numero1;
var nuemero2;



var cont = 1;
var cont2 = 0;
var bandera = 0; 

// Se pide el rango
var number1 = prompt ('Introduzca el primer numero:'); 
    var number2 = prompt ('Introduzca el segundo numero:');
 
while(cont >= number1 && cont <= number2 ){
	while(cont2 < cont){
		if(cont % cont2 == 0 && cont2 != 1 && cont2 != cont){
		bandera = 1; 
	}
	cont2++;
}    



/*function ActivarTiempo(){
        //se activa la función Mensaje() luego de 3 segundos
        setTimeout(Mensaje, 3000);
  
    }
function Mensaje(){*/

if (bandera == 0) {
	document.write(cont2 + " </br>");
}
 else{
 	bandera = 0;
}

    cont++;
    cont2 = 0; 
}
    
    
        
    


