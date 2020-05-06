const express =require('express');
const cors = require('cors');
const bodyParser =require('body-parser');

const app = express();
const port = 8080;

app.use(
    express.json(),
    cors(),
    bodyParser()
);

app.listen(port,console.log("listening on port ",port));

const UsuarioRoutes = require('./Routes/Usuario');
app.use('/Usuario', UsuarioRoutes);

const BotellaRoutes = require('./Routes/Botella');
app.use('/Botella',BotellaRoutes);
