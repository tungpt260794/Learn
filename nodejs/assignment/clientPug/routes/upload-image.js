const express = require("express");
const multer = require("multer");
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/uploads");
  },
  filename: (req, file, cb) => {
    console.log(file);
    cb(null, `${file.fieldname}-${Date.now()}.jpg`);
  }
});

const upload = multer({ storage });

const router = express.Router();

router.get("/", (req, res, next) => {
  res.send("ok");
});

router.post("/", upload.single("post-image"), async (req, res, next) => {
  const path = req.file.path.replace("public", "");
  res.json({ link: path });
  return res.end();
});

module.exports = router;
