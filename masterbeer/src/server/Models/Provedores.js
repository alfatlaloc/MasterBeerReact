const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost:27017/MasterBeer",{useNewUrlParser: true, useUnifiedTopology: true,}); //Si no existe, se crea

const ProvedoresSchema = new mongoose.Schema({
  Razon: {
    type: String,
    required: true
  },
  RFC: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Provedores', ProvedoresSchema,'Provedores')