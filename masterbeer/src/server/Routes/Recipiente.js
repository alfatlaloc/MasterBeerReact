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
    Tipo: req.body.Tipo,
    Material: req.body.Material,
    Volumen: req.body.Volumen,
    Stock: req.body.Stock,
    AlcoholP:req.body.AlcoholP
  });
  try {
    const newRecipiente = await recipiente.save();
    res.status(201).json(newRecipiente);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.delete("/", getItem, async (req, res) => {
  console.log(req.query._id);
  try {
    await res.Recipiente.remove();
    res.json({ message: "Deleted This Recipiente" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

async function getItem(req, res, next) {
  try {
    const obj = await RecipienteM.findById(req.query._id);
    if (obj == null) {
      return res.status(404).json({ message: "Cant find subscriber" });
    }
    res.Recipiente = obj;
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  next();
}

module.exports = router;
