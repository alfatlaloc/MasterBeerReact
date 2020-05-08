const express =require('express');
const cors = require('cors');
const bodyParser =require('body-parser');

const app = express();
const port = 8080;

app.use(
    cors(),
    bodyParser(),
    bodyParser.urlencoded({ extended: false })
);

app.use(express.json({
    type: ['application/json', 'text/plain']
  }))

  app.options('*', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type'); // Add other headers here
    res.setHeader('Access-Control-Allow-Methods', 'POST'); // Add other methods here
    res.send();
  });

app.listen(port,console.log("listening on port ",port));

const UsuarioRoutes = require('./Routes/Usuario');
app.use('/Usuario', UsuarioRoutes);

const BotellaRoutes = require('./Routes/Botella');
app.use('/Botella',BotellaRoutes);

const IngredienteRoutes = require('./Routes/Ingrediente');
app.use('/Ingrediente',IngredienteRoutes);
