const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost:27017/MasterBeer", { useNewUrlParser: true ,useUnifiedTopology: true});
const BartenderSchema = new mongoose.Schema({
    Correo: {
        type: String,
        required: true
      },
      Nombre: {
        type: String,
        required: true
      },
      Contraseña: {
        type: String,
        required: true,
      },
      Apellido: {
        type: String,
        required: true,
      },
      RFC: {
        type: String,
        required: true,
      },
      Fecha: {
        type: Date,
        required: true,
      },
      Sueldo: {
        type: Number,
        required: true,
      },
      Horario: {
        type: String,
        required: true,
      }

})

module.exports.Bartender = mongoose.model('Bartender', BartenderSchema,'Bartender')