const express = require('express')
const router = express.Router();
const IngredienteM = require('../Models/IngredienteModel');

router.get('/', async (req, res) => {
      try {
        const ingredientes = await IngredienteM.find()
        res.json(ingredientes)
      } catch (err) {
        res.status(500).json({ message: err.message })
      }
    })

        // Creating one
        router.post('/',async (req, res) => {
            console.log("req"+req.body.Nombre);
            const Ingrediente = new IngredienteM({
              Nombre: req.body.Nombre,
              Volumen: req.body.Volumen,
              Stock : req.body.Stock,
              Precio : req.body.Precio,
              Tipo: req.body.Tipo
            })
            try {
              const newIngrediente= await Ingrediente.save()
              res.status(201).json(newIngrediente)
            } catch (err) {
              res.status(400).json({ message: err.message })
            }
          })
module.exports= router;