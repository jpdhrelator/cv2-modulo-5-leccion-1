class Rectangulo {
  constructor(alto, ancho) {
    this.alto  = alto;
    this.ancho = ancho;
  }

  // metodos de instancia
  area(){
    return this.alto * this.ancho;
  }
  nevoMetodo(){
    console.log(`Soy un Nuevo metodo ${this.alto} ${this.ancho}`);
    
  }

  toString(){
    return `Rectángulo(${this.alto}x${this.ancho})`;
  }
  // statico
  static cuadrado(lado){
    return new Rectangulo(lado,lado);
  }

  /*
  get alto(){
    return this.alto;
  }
  set alto(alto){
    this.alto=alto
  }
*/
}


const objRectangulo= new Rectangulo(6,4);

//console.log("Area",rectangulo.alto(25));
objRectangulo.alto=25;
console.log("alto",objRectangulo.alto);
console.log("ancho",objRectangulo.ancho);
console.log("Area",objRectangulo.area());
console.log("Area",objRectangulo.toString());


const cuadrado= Rectangulo.cuadrado(4);

console.log(cuadrado.area());



const r1 = new Rectangulo(5,  10);
const r2 = new Rectangulo(3,   7);
const r3 = new Rectangulo(8,   4);

console.log(r1.toString());
console.log(r2.toString());
console.log(r3.toString());


r3.nevoMetodo();
r2.nevoMetodo();
r1.nevoMetodo();
cuadrado.nevoMetodo();
objRectangulo.nevoMetodo();