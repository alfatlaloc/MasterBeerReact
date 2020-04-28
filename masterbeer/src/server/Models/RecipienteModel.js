const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost:27017/MasterBeer",{useNewUrlParser: true, useUnifiedTopology: true,}); //Si no existe, se crea

const RecipienteSchema = new mongoose.Schema({
  Tipo: {
    type: String,
    required: true
  },
  Volumen: {
    type: Number,
    required: true
  },
  Material: {
    type: String,
    required: true
  },
  Stock: {
    type: Number,
    required: true,
  }
})

module.exports = mongoose.model('Recipiente', RecipienteSchema,'Recipiente')