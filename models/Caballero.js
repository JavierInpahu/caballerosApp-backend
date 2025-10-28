const mongoose = require("mongoose");

const CaballeroSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  signo: String,
  armadura: String,
  poder: Number,
  rank: String,
  descripcion: String,
  imagen: String,
});

module.exports = mongoose.model("Caballero", CaballeroSchema);
