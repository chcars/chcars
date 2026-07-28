const express = require("express");
const router = express.Router();

const aseguradorasController = require("../controllers/aseguradorasController");

router.get("/", aseguradorasController.getAseguradoras);

module.exports = router;