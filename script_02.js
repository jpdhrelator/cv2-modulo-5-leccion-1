class Persona{
    constructor(nombre, edad){
        this.nombre =nombre;
        this.edad   =edad;
    }
    saludar(){
        console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años`);
    }
}
const persona = {
  nombre: "María",
  edad:   28,
  saludar: function() {
    console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años`);
  }
};

const juan= new Persona("Juan Perez",32);
const maria= new Persona("Maria Rojas",25);

console.log("juan",typeof juan);
console.log("maria",typeof maria);
console.log("persona",typeof persona);


console.log("Juan Es una persona",juan instanceof Persona);
console.log("Maria Es una persona",maria instanceof Persona);
console.log("persona Es una persona",persona instanceof Persona);