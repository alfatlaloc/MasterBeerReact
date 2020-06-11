const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost:27017/MasterBeer",{useNewUrlParser: true, useUnifiedTopology: true,}); //Si no existe, se crea

const PedidoSchema = new mongoose.Schema({
  Status: {
    type: String,
    required: true
  },
  tipoPago: {
    type: String,
    required: true
  },
  Bartender: {
    type: String,
    required: true
  },
  Stock: {
    type: Number,
    min:0,
    required: true,
  },
  AlcoholP:{
    type: Number,
    min:0,
    required:true
  }

})

module.exports = mongoose.model('Pedido', PedidoSchema,'Pedido')