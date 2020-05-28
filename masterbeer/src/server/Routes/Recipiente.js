const express = require("express");
const router = express.Router();
const RecipienteM = require("../Models/RecipienteModel");

router.get("/", async (req, res) => {
  console.log("RES" + req.body);
  try {
    const recipientes = await RecipienteM.find();
    res.json(recipientes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Creating one
router.post("/", async (req, res) => {
  console.log("req" + req.body.Nombre);
  const recipiente = new RecipienteM({
    Nombre: req.body.Nombre,
    Material: req.body.Material,
    Volumen: req.body.Volumen,
    Stock: req.body.Tipo,
  });
  try {
    const newRecipiente = await recipiente.save();
    res.status(201).json(newRecipiente);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
