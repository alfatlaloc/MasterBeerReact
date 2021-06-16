const http = require("http");
const express = require('express');
const app = express();
const mysql      = require('./node_modules/mysql');
const bodyParser = require('body-parser');

// connection configurations
const MasterBeerConection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'master.ae13',
    database: 'MasterBeer',
});

MasterBeerConection.connect(function(err) {
    if (err) throw err
    console.log('You are now connected with mysql database...')
  })
  app.listen(8080);
  
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  app.get('/', function(req,res){
    var sql = 'SELECT * FROM testusers WHERE correo="mr.alfatlaloc@gmail.com"';
    MasterBeerConection.query(sql, (err, result)=>{
        if(err) throw err;
        console.log(result);
        res.send(result);
    });
    });

  /*  
  app.use( bodyParser.json() );       // to support JSON-encoded bodies
  app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
  }));
  
  var server = app.listen(8080, "127.0.0.1", function () {
    var host = server.address().address
    var port = server.address().port 
    console.log("Example app listening at http://%s:%s", host, port)
  });

*/
