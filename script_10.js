const respuestaAPI = `[
  { "id": 1, "nombre": "Ana",      "nota": 85, "aprobado": true  },
  { "id": 2, "nombre": "Beatriz",  "nota": 42, "aprobado": false },
  { "id": 3, "nombre": "Carlos",   "nota": 91, "aprobado": true  },
  { "id": 4, "nombre": "Diego",    "nota": 55, "aprobado": false },
  { "id": 5, "nombre": "Esperanza","nota": 78, "aprobado": true  }
]`;

// 1. Parsear el JSON que llegó del servidor
const alumnos= JSON.parse(respuestaAPI);
console.log("Total Alumnos",alumnos.length);


// 2. Filtrar solo los aprobados
const aprobados= alumnos.filter((a)=> a.aprobado);
console.log("Aprobados:",aprobados.map(a=> a.nombre).join(','));

// 3. Calcular promedio
const promedio= alumnos.reduce((sum,a)=> sum+ a.nota,0 ) /alumnos.length;
console.log("Promedio del curso:",promedio);

// 4. Resumen del Curso
const resumen= alumnos.map(({nombre,nota,aprobado})=>{
    return {
        nombre,
        nota,
        estado: aprobado ? "✅ Aprobado" : "❌ Reprobado"
    }
});

console.log("--- Resumen ---");
resumen.forEach(({nombre,nota,estado}) => console.log(`${nombre} ${nota} ${estado}`)
 );

