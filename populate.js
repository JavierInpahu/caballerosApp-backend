const { conectar } = require('./db/connection');
const Caballero = require('./models/Caballero');

const caballeros = [
  { nombre: "Seiya", signo: "Pegaso", armadura: "Pegaso", poder: 9000, rank: "Bronce" },
  { nombre: "Shiryu", signo: "Dragón", armadura: "Dragón", poder: 8800, rank: "Bronce" },
  { nombre: "Hyoga", signo: "Cisne", armadura: "Cisne", poder: 8700, rank: "Bronce" },
  { nombre: "Shun", signo: "Andrómeda", armadura: "Andrómeda", poder: 8600, rank: "Bronce" },
  { nombre: "Ikki", signo: "Fénix", armadura: "Fénix", poder: 9200, rank: "Bronce" },
  { nombre: "Mu", signo: "Aries", armadura: "Aries", poder: 9500, rank: "Oro" },
  { nombre: "Aldebarán", signo: "Tauro", armadura: "Tauro", poder: 9400, rank: "Oro" },
  { nombre: "Saga", signo: "Géminis", armadura: "Géminis", poder: 9600, rank: "Oro" },
  { nombre: "Máscara de Muerte", signo: "Cáncer", armadura: "Cáncer", poder: 9300, rank: "Oro" },
  { nombre: "Aioria", signo: "Leo", armadura: "Leo", poder: 9500, rank: "Oro" },
  { nombre: "Shaka", signo: "Virgo", armadura: "Virgo", poder: 9700, rank: "Oro" },
  { nombre: "Dohko", signo: "Libra", armadura: "Libra", poder: 9400, rank: "Oro" },
];

(async () => {
  await conectar();
  await Caballero.deleteMany({}); 
  await Caballero.insertMany(caballeros);
  console.log("Se insertaron los 12 caballeros en MongoDB");
  process.exit(0);
})();
