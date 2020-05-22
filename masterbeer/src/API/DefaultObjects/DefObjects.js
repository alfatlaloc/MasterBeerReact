
const newBotella = {
    Nombre: "",
    Marca: "",
    Precio: 0,
    Stock: 0,
    Desc: "",
    Tipo: "",
    Volumen_A: 0,
    Contenido_N:{
        Cantidad:0,
        Unidad:"ml"
    },
    volBP: 0
  };


const newIngrediente = {
    Nombre: "",
    Precio: 0,
    Tipo: "",
    Volumen:{
        Cantidad:0,
        Unidad:"ml"
    }
  };

  module.exports = {
      newBotella,
      newIngrediente
  };