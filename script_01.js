const persona = {
  nombre: "María",
  edad:   28,
  saludar: function() {
    console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años`);
  }
};

persona.saludar();
console.log("Nombre", persona.nombre);
console.log("edad", persona.edad);
