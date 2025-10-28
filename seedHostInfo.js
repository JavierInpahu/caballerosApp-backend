const mongoose = require("mongoose");

const HostInfoSchema = new mongoose.Schema({
  _id: { type: String, required: true },
  nombre: { type: String, required: true },
  signo: String,
  armadura: String,
  poder: Number,
  rank: String,
  descripcion: String,
  imagen: String,
});

const HostInfo = mongoose.model("HostInfo", HostInfoSchema);

const hostInfoData = [
  { _id: "caballero1", nombre: "Seiya", signo: "Pegaso", armadura: "Bronce", poder: 90, rank: "Bronce", descripcion: "Caballero de Pegaso", imagen: "https://link-a-imagen-seiya.jpg" },
  { _id: "caballero2", nombre: "Shiryu", signo: "Dragón", armadura: "Bronce", poder: 88, rank: "Bronce", descripcion: "Caballero de Dragón", imagen: "https://link-a-imagen-shiryu.jpg" },
  { _id: "caballero3", nombre: "Hyoga", signo: "Cisne", armadura: "Bronce", poder: 87, rank: "Bronce", descripcion: "Caballero de Cisne", imagen: "https://link-a-imagen-hyoga.jpg" },
  { _id: "caballero4", nombre: "Shun", signo: "Andrómeda", armadura: "Bronce", poder: 85, rank: "Bronce", descripcion: "Caballero de Andrómeda", imagen: "https://link-a-imagen-shun.jpg" },
  { _id: "caballero5", nombre: "Ikki", signo: "Fénix", armadura: "Bronce", poder: 92, rank: "Bronce", descripcion: "Caballero de Fénix", imagen: "https://link-a-imagen-ikki.jpg" },
  { _id: "caballero6", nombre: "Mu", signo: "Aries", armadura: "Oro", poder: 95, rank: "Oro", descripcion: "Caballero de Aries", imagen: "https://link-a-imagen-mu.jpg" },
  { _id: "caballero7", nombre: "Aldebarán", signo: "Tauro", armadura: "Oro", poder: 93, rank: "Oro", descripcion: "Caballero de Tauro", imagen: "https://link-a-imagen-aldebaran.jpg" },
  { _id: "caballero8", nombre: "Saga", signo: "Géminis", armadura: "Oro", poder: 98, rank: "Oro", descripcion: "Caballero de Géminis", imagen: "https://link-a-imagen-saga.jpg" },
  { _id: "caballero9", nombre: "Deathmask", signo: "Cáncer", armadura: "Oro", poder: 94, rank: "Oro", descripcion: "Caballero de Cáncer", imagen: "https://link-a-imagen-deathmask.jpg" },
  { _id: "caballero10", nombre: "Aiolia", signo: "Leo", armadura: "Oro", poder: 97, rank: "Oro", descripcion: "Caballero de Leo", imagen: "https://link-a-imagen-aiolia.jpg" },
  { _id: "caballero11", nombre: "Shaka", signo: "Virgo", armadura: "Oro", poder: 99, rank: "Oro", descripcion: "Caballero de Virgo", imagen: "https://link-a-imagen-shaka.jpg" },
  { _id: "caballero12", nombre: "Camus", signo: "Acuario", armadura: "Oro", poder: 96, rank: "Oro", descripcion: "Caballero de Acuario", imagen: "https://link-a-imagen-camus.jpg" }
];

(async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/caballerosApp");
    await HostInfo.deleteMany();
    await HostInfo.insertMany(hostInfoData);
    console.log("12 caballeros insertados");
    mongoose.disconnect();
  } catch (err) {
    console.error(err);
  }
})();
