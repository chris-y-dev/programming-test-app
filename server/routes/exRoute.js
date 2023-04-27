const express = require("express");
const router = express.Router();
const egController = require("../controllers/egController");

router.get("/", egController.get_example);
