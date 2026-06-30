class Mamifero {
    constructor(nombre) {
        this.nombre=nombre;
        this.tienePelo= true;
        this.alimentaConLeche= true;
    }

    respirar(){
        console.log(`${this.nombre} está respirando... 💨`);
    }
    info(){
        console.log(`[Mamífero] ${this.nombre} | Pelo: ${this.tienePelo} | Leche: ${this.alimentaConLeche}`);
    }
}

class Perro extends Mamifero{

    constructor(nombre,raza){
        super(nombre);
        this.raza=raza;        
    }
    ladrar(){
        console.log(`${this.nombre} dice: ¡Guau! 🐶`);
    }
}

const firulais= new Perro("Firulais","Kiltro");
firulais.info();
firulais.respirar();
firulais.ladrar();


class Gato extends Mamifero {
    constructor(name){
       super(name);
    }
    maullar(){
        console.log(`${this.nombre} dice: ¡Miau! 🐱`);
    }
}
const michu= new Gato("michu");
michu.info();
michu.respirar();
michu.maullar();
