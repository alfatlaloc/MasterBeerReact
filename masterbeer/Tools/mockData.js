const Usuarios = [
  {
    Correo: "mr.alfatlaloc@gmail.com",
    Nombre: "ÆternaM",
    Contraseña: "master.ae13",
    authorId: 1,
  },
  {
    Correo: "master.ae13@gmail.com",
    Nombre: "Alfa",
    Contraseña: "master.ae13",
    authorId: 2,
  }
  ,
  {
    Correo: "mockapi@gmail.com",
    Nombre: "mock",
    Contraseña: "master.ae13",
    authorId: 3,
  }
];

const authors = [
  { id: 1, name: "Cory House" },
  { id: 2, name: "Scott Allen" },
  { id: 3, name: "Dan Wahlin" }
];

const newUsuario = {
  Correo: null,
    Nombre: "",
    Contraseña: null,
    authorId: null,
};

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  newUsuario,
  Usuarios,
  authors
};
