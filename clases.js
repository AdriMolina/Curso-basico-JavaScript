'use strict';

class Tutor{
  constructor(nombre,last_name) {
    this.nombre = nombre;
    this.last_name = last_name;
  }
  
  full_name(){
    return this.nombre + " " + this.last_name;
  }
}

 var tutor = new Tutor("Paty","Mercado");

console.log(tutor.full_name());