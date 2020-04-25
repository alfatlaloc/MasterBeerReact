const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true ,useUnifiedTopology: true});
const UsuarioSchema = new mongoose.Schema({
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
  }
})

module.exports.Usuario = mongoose.model('Usuario', UsuarioSchema,'Usuario')