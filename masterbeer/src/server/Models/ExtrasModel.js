const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/MasterBeer", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}); //Si no existe, se crea

const ExtrasSchema = new mongoose.Schema({
  Nombre: {
    type: String,
    required: true,
  },
  Precio: {
    type: Number,
    min: 0,
    required: true,
  },
});

module.exports = mongoose.model("Extras", ExtrasSchema, "Extras");
