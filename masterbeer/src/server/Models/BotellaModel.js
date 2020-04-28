const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost:27017/MasterBeer",{useNewUrlParser: true, useUnifiedTopology: true,}); //Si no existe, se crea

const BotellaSchema = new mongoose.Schema({
  Nombre: {
    type: String,
    required: true
  },
  Marca: {
    type: String,
    required: true
  },
  Stock: {
    type: Number,
    required: true,
  },
  Precio: {
    type: Number,
    required: true,
  },
  Desc: {
    type: String,
    required: true
  },
  Contenido_N: {
    type: Number,
    required: true
  },
  Tipo: {
    type: String,
    required: true
  },
  Volumen_A: {
    type: Number,
    required: true
  },
  volBP: {
    type: Number,
    required: true
  }
})

module.exports = mongoose.model('Botella', BotellaSchema,'Botella')