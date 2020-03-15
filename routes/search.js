const express = require("express");
const router = express.Router();
const search = require("../controllers/search");

router.get("/", search.home);
router.post("/", search.result);

module.exports = router;
