const express = require("express");
const router = express.Router();
const search = require("../controllers/search");

router.get("/", search.home);

router.post("/result", search.filter);

module.exports = router;
