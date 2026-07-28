const express = require("express");
const router = express.Router();

const googleReviewsController = require("../controllers/googleReviewsController");

router.get("/", googleReviewsController.getGoogleReviews);

module.exports = router;