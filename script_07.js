class Mamifero {
  constructor(nombre) { this.nombre = nombre; }
  hacerSonido() {
    console.log(`${this.nombre} hace un sonido genérico.`);
  }
}

class Perro extends Mamifero {
    constructor(nombre) {
        super(nombre)
    }  
    hacerSonido() {
    console.log(`${this.nombre} dice: ¡Guau! 🐶`);
  }
}
class Gato extends Mamifero {
    constructor(nombre) {
        super(nombre)
    }  
    hacerSonido() {
    console.log(`${this.nombre} dice: ¡Miau! 🐱`);
  }
}
class Vaca extends Mamifero {
    constructor(nombre) {
        super(nombre)
    }  
    hacerSonido() {
    console.log(`${this.nombre} dice: ¡Muuu! 🐄`);
  }
}



const animales= [
    new Mamifero("Criatura caulquiera"),
    new Perro("firulais"),
    new Gato("michis"),
    new Vaca("lola")
];
animales.forEach((a)=> a.hacerSonido());