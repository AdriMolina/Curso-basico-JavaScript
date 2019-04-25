var numeros = [1,2,3,4,5];

var elevado_2 = numeros.map(n => 2);

console.log(elevado_2);


//otro ejemplo 

function Tutor(){
  this.nombre = "Paty";
  
  setTimeout(() => {
             this.nombre = "Codigo Facilito";
    },500);
}

var tutor = new Tutor();
console.log(tutor.nombre);

setTimeout(function(){
  console.log(tutor.nombre);
},1000);


//Otro ejemplo 

var materials = [
  'Hydrogen',
  'Helium',
  'Lithium',
  'Beryllium'
];

console.log(materials.map(material => material.length));
// expected output: Array [8, 6, 7, 9]