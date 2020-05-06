const express = require('express')
const router = express.Router();
const BotellaM = require('../Models/BotellaModel');

// Getting all
//Obtiene todas las botellas de la BD
router.get('/', async (req, res) => {
    try {
      const botellas = await BotellaM.find()
      res.json(botellas)
    } catch (err) {
      res.status(500).json({ message: err.message })
    }
  })

    // Creating one
    router.post('/', async (req, res) => {
      console.log(req.body.Nombre);
      const botella = new BotellaM({
        Nombre: req.body.Nombre,
        Marca: req.body.Marca,
        Stock : req.body.Stock,
        Precio : req.body.Precio,
        Desc: req.body.Desc,
        Contenido_N: req.body.Contenido_N,
        Tipo: req.body.Tipo,
        Volumen_A: req.body.Volumen_A,
        volBP:req.body.volBP
      })
      try {
        const newBotella = await botella.save()
        res.status(201).json(newBotella)
      } catch (err) {
        res.status(400).json({ message: err.message })
      }
    })

  module.exports=router;