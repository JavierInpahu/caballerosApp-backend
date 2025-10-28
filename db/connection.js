const mongoose = require("mongoose");

const conectar = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(" Conexión exitosa a MongoDB Atlas");

    // await mongoose.connect("mongodb://127.0.0.1:27017/caballerosApp", {
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true,
    // });
    // console.log(" Conexión exitosa a MongoDB local (Compass)");
  } catch (error) {
    console.error(" Error conectando a MongoDB:", error);
  }
};

module.exports = { conectar };
