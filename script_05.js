const config={
    asdas:123,
    adasd:asdas,
    function(){}
}

const persona = {
  nombre: "María",
  edad:   28,
  saludar: function() {
    console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años`);
  }
};


class Persona{
    constructor(nombre, edad){
        this.nombre =nombre;
        this.edad   =edad;
    }
    saludar(){
        console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años`);
    }
}

p1= new Persona('Doris',23);
p2= new Persona('Marta',21);

console.log(p1);
console.log(p2);
