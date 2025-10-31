const express = require("express");
const cors = require("cors");
const { conectar } = require("./db/connection");
const Caballero = require("./models/Caballero");
const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");

require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API de Caballeros del Zodiaco",
      version: "1.0.0",
      description:
        "API REST creada con Node.js, Express y MongoDB Atlas. Documentada con Swagger.",
      contact: {
        name: "Oscar Javier Ramírez",
        email: "tu_correo@example.com",
      },
    },
    servers: [
      { url: "http://localhost:3000", description: "Servidor local" },
      { url: "https://caballerosapp-backend.onrender.com", description: "Servidor en Render" },
    ],
  },
  apis: ["./index.js"],
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

/**
 * @swagger
 * /caballeros:
 *   get:
 *     summary: Obtiene todos los caballeros
 *     responses:
 *       200:
 *         description: Lista de caballeros
 *         content:
 *           application/json:
 *             example:
 *               - _id: "6900012a57ebb67195b0c969"
 *                 nombre: "Ikki"
 *                 signo: "Fénix"
 *                 armadura: "Bronce"
 *                 poder: 92
 *                 rank: "Bronce"
 *                 descripcion: "Caballero de Fénix"
 *                 imagen: "https://link-a-imagen-ikki.jpg"
 *       500:
 *         description: Error del servidor
 *
 * /caballeros/{nombre}:
 *   get:
 *     summary: Obtiene un caballero por nombre
 *     parameters:
 *       - in: path
 *         name: nombre
 *         required: true
 *         description: Nombre del caballero a buscar
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Caballero encontrado
 *         content:
 *           application/json:
 *             example:
 *               _id: "6900012a57ebb67195b0c969"
 *               nombre: "Ikki"
 *               signo: "Fénix"
 *               armadura: "Bronce"
 *               poder: 92
 *               rank: "Bronce"
 *               descripcion: "Caballero de Fénix"
 *               imagen: "https://link-a-imagen-ikki.jpg"
 *       404:
 *         description: Caballero no encontrado
 *       500:
 *         description: Error del servidor
 */

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
      console.log(`Documentación Swagger en http://localhost:${PORT}/api-docs`);
      console.log(`Documentación en línea: https://caballerosapp-backend.onrender.com/api-docs`);
    });
  } catch (error) {
    console.error("Error al iniciar el servidor:", error);
  }
})();
