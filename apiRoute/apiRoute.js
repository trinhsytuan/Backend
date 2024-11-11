require("dotenv").config();
const express = require("express");
const { imageUpload } = require("../utiles/uploadFile");
const { uploadBai } = require("../controller/uploadBai");
const router = express.Router();
router.post("/create", imageUpload.single("file"), uploadBai);
module.exports = router;