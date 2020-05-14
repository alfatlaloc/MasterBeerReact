const express = require('express')
const router = express.Router();
const BotellaM = require('../Models/BotellaModel');

const bp = require('body-parser').urlencoded({ extended: false});
// Getting all
//Obtiene todas las botellas de la BD
router.get('/', async (req, res) => {
  console.log("RES"+req.body);
    try {
      const botellas = await BotellaM.find()
      res.json(botellas)
    } catch (err) {
      res.status(500).json({ message: err.message })
    }
  })

    // Creating one
    router.post('/',bp ,async (req, res) => {
      console.log("req"+req.body.Nombre);
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

    router.delete('/', getBotella, async (req, res) => {
      console.log(req.query._id);
      try {
        await res.Botella.remove()
        res.json({ message: 'Deleted This Botella' })
      } catch(err) {
        res.status(500).json({ message: err.message })
      }
    })


    async function getBotella(req, res, next) {
      try {
        const Botella = await BotellaM.findById(req.query._id)
        if (Botella == null) {
          return res.status(404).json({ message: 'Cant find subscriber'})
        }
        res.Botella = Botella;
      } catch(err){
        return res.status(500).json({ message: err.message })
      }
    
      next();
    }

  module.exports=router;