/*//metodos definidos para arreglos
function ordenacion(a,b){
  return a -b;
}

var arreglo = [2,5,1,10,20];
arreglo.sort(ordenacion); //sort ordena por orden alfabetico


arreglo.resrvese();// toma el orden actual y lo voltea 

console.log(arreglo);
*/

/*//Cadena en arreglo con split
//var arreglo = "a,b,c,2";
var arreglo = "a,b,c,2".split(",");

console.log(arreglo);
*/

//convertir arreglo a una cadena con join 
//var arreglo = "a,b,c,2";
var arreglo = "a,b,c,2".split(",");
 arreglo = arreglo.join("p");
console.log(arreglo);