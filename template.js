var template = `Hola Mundo`;
console.log(template);  

// Otro ejemplo 
var nombre = "Paty";
var plantilla = `Hola que tal estas ${nombre}`;
console.log(plantilla); 

//Ejemplo con un objeto e imprime el mismo resultado 

var objeto={nombre:"Paty"};
var plantilla= `hola que tal estas ${objeto.nombre}`;
console.log(plantilla);

//se puede ocupar varias lineas de cosigo sin verse afectadas, evitando los tipos de concatenaciones  
var objeto={nombre:"cecilio"};
var plantilla= `
 
 
<div>
hola que tal estas ${objeto.nombre}
</div>
 
`;
 
window.onload=function() {
 
var body= document.getElementsByTagName("body")[0];
console.log(body);
body.innerHTML=plantilla;
}
//El resultado se muestra en la página


//Soportan ademas el uso de expresiones lo que le añade una flexibilidad adicional

var alumno={nombre:"Paty",nota:3};
var plantilla= `
 
<div>
hola que tal estas ${alumno.nombre}
${alumno.nombre>5? "aprobado": " suspenso"}
</div>
 
 
`;
 
window.onload=function() {
 
var body= document.getElementsByTagName("body")[0];
body.innerHTML=plantilla;
}
//En este caso dependiendo de la nota se imprime aprobado o suspenso en la pantalla.


//Por otro lado las podemos usar combinadas con programación funcional 
//Ejemplo: generar de una forma sencilla una lista de divs a partir de un array de elementos en formato JSON.

var alumnos=[{nombre:"pedro",nota:3},{nombre:"angel",nota:7}];
var plantilla= `
<div>
${alumnos.map(a=> `${a.nombre} ${a.nota>5?"aprobado":"suspenso"}`)}
</div>
 
`;
 
window.onload=function() {
 
var body= document.getElementsByTagName("body")[0];
console.log(body);
body.innerHTML=plantilla;
}

// Imprime en pantalla 
