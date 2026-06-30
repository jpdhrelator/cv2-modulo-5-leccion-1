const alumno = {
  nombre: "Valentina",
  edad:   22,
  activa: true,
  cursos: ["HTML", "CSS", "JavaScript"],
  direccion: {
    ciudad: "Santiago",
    pais:   "Chile"
  }
};

const jsonString= JSON.stringify(alumno);

console.log(jsonString);

const jsonUser=`{
  "id": 1,
  "first_name": "Levin",
  "lastName": "Chinn",
  "email": "lchinn0@chron.com",
  "gender": "Male",
  "ip_address": "112.244.13.207"
}`;


const userObject= JSON.parse(jsonUser);

console.log("userObject",typeof userObject);
console.log("userObject:",userObject);
console.log("id:",userObject.id);
console.log("first_name:",userObject['first_name']);
console.log("lastName:",userObject.lastName);



