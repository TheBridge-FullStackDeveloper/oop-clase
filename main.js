const coche1 = {
  modelo: "kuga",
  marca: "Ford",
  color: "gris",
};

const coche2 = {
  modelo: "a3",
  marca: "Audi",
  color: "blanco",
};
const coche3 = {
  modelo: "a3",
  marca: "Audsadi",
  color: "blanco",
};

// function Coche(marca, modelo, antiguedad, color, tipo, extras) {
//   this.marca = marca;
//   this.modelo = modelo;
//   this.antiguedad = antiguedad;
//   this.color = color;
//   this.tipo = tipo;
//   this.extras = extras; //array
//   this.detalles = function () {
//     return (
//       "Tu coche es un " +
//       this.marca +
//       " " +
//       this.modelo +
//       " con " +
//       this.antiguedad +
//       " años, clase " +
//       this.tipo +
//       " y color " +
//       this.color
//     );
//   };
// }

// const miCoche = new Coche("Mercedes", "Volador", "2009", "Rojo", "Automatico", [
//   "joan",
//   "isma",
// ]);
// const miCoche2 = new Coche("Toyota", "auris", "2017", "blanco", "manual", 8);
// const miCoche3 = new Coche("Toyota", "auris", "2017", "blanco", "manual", true);

function Felino(pelaje, colmillos, nombre) {
  this.pelaje = pelaje;
  this.colmillos = colmillos;
  this.nombre = nombre;
  this.atacar = function () {
    return "zarpazo";
  };
}

function Gato(pelaje, colmillos, nombre, raza, color) {
  Felino.call(this, pelaje, colmillos, nombre);
  this.raza = raza;
  this.color = color;
  this.maullar = function () {
    return "Miawww";
  };
}

const bigotes = new Gato("Frondoso",true, "Bigotitos","Siames", "Blanco");
// console.log(bigotes);
// console.log(bigotes.maullar());
// console.log(bigotes.atacar());


function Libro(titulo, autor, año) {
  this.titulo = titulo;
  this.autor = autor;
  this.año = año;
  this.detalles = function () {
    return this.titulo + " año publicación " + this.año;
  };
}

function Revista(titulo, autor, año, mes) {
  Libro.call(this, titulo, autor, año);
  this.mes = mes;
}

const mag1 = new Revista("Mag One", "John Doe", "2018", "Enero");


class Coche{
    static info(edad){
        console.info(`Tienes ${edad} años ${ edad >= 18 ? "y puedes conducir": "y ... ¡Sorry! Sigue esperando para conducir."}`);
    }
    constructor(marca, modelo, antiguedad, color, tipo) {
      this.marca = marca;
      this.modelo = modelo;
      this.antiguedad = antiguedad;
      this.color = color;
      this.tipo = tipo;
    }
    detalles() {
      console.log(`Tu coche es un ${this.marca} ${this.modelo} con ${this.antiguedad} años, clase ${this.tipo} y color ${this.color}`);
    }
  }
 Coche.info(20)
  let miCoche4 = new Coche("Peugeot", "607", 2002, "rojo", "turismo");
//   console.log(miCoche4)
  miCoche4.detalles();

  class Furgon extends Coche {
    constructor (marca, modelo, antiguedad, color, tipo,taraMinima, cargaUtil, volumenCarga) {
      super(marca, modelo, antiguedad, color, tipo) 
      this.taraMinima = taraMinima;
      this.cargaUtil = cargaUtil;
      this.volumenCarga = volumenCarga;
      }
  };
 
  let miFurgon = new Furgon("Peugeot", "607", 2002, "rojo", "turismo",1200, 768, 4.5);
miFurgon.detalles()




