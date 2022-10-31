const express = require("express");
const router = express.Router();

// Controller
const AdminController = require("../controllers/AdminController");

router.get("/", async (req, res) => {
  res.json({ message: "hello" });
});

router.post("/api/tambah-penyakit", AdminController.addDesease);

router.get("/api/getDesease/:nama", AdminController.getDesease);

module.exports = router;
