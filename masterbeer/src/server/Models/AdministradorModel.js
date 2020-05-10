const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost:27017/MasterBeer", { useNewUrlParser: true ,useUnifiedTopology: true});
const AdministradorSchema = new mongoose.Schema({
  Correo: {
    type: String,
    unique: true,
    required: true
  },
  Nombre: {
    type: String,
    required: true
  },
  Contraseña: {
    type: String,
    minlength: 6,
    required: true,
  },
  Apellido: {
    type: String,
    required: true,
  },
  RFC: {
    type: String,
    minlength:12,
    maxlength:13,
    required: false,
  },
  Fecha: {
    type: Date,
    required: true,
  }
})

module.exports.Administrador = mongoose.model('Administrador', AdministradorSchema,'Administrador')