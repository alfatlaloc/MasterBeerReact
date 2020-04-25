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

  module.exports=router;