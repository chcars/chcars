const express = require("express");
const router = express.Router();

const seoMetaController = require("../controllers/seoMetaController");

router.get("/", seoMetaController.getSeoMeta);

module.exports = router;