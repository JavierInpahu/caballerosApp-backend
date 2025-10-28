const express = require("express");
const cors = require("cors");
const { conectar } = require("./db/connection");
const Caballero = require("./models/Caballero");

require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

(async () => {
  try {
    await conectar();
    console.log(" Conectado correctamente a MongoDB Atlas");

    app.get("/caballeros", async (req, res) => {
      try {
        const caballeros = await Caballero.find();
        res.json(caballeros);
      } catch (err) {
        res.status(500).json({ error: "Error al obtener los caballeros" });
      }
    });

    app.get("/caballeros/:nombre", async (req, res) => {
      try {
        const { nombre } = req.params;
        const regex = new RegExp(nombre, "i"); 
        const caballero = await Caballero.findOne({ nombre: regex });

        if (!caballero)
          return res.status(404).json({ error: "Caballero no encontrado" });

        res.json(caballero);
      } catch (err) {
        res.status(500).json({ error: "Error al buscar el caballero" });
      }
    });

    app.listen(PORT, () => {
      console.log(`Servidor escuchando en http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Error al iniciar el servidor:", error);
  }
})();
