const multer = require("multer");
const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

const IMAGE_DIR = "./images";

if (!fs.existsSync(IMAGE_DIR)) {
  fs.mkdirSync(IMAGE_DIR, { recursive: true });
  console.log("Dossier 'images' créé");
}

const storage = multer.memoryStorage();
const upload = multer({ 
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }
});

module.exports = (req, res, next) => {
  upload.single("image")(req, res, async (err) => {
    if (err) {
      return res.status(400).json({ error: "File upload failed" });
    }

    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    try {
      const { buffer, originalname } = req.file;

      const timestamp = new Date().toISOString().replace(/:/g, "-");
      const name = path.basename(originalname, path.extname(originalname));
      const filename = `${timestamp}-${name}.webp`;
      const filepath = path.join(IMAGE_DIR, filename);

      await sharp(buffer)
        .resize(1024)
        .webp({ quality: 60 })
        .withMetadata(false)
        .toFile(filepath);

      req.file.filename = filename;
      req.file.path = filepath;

      next();
    } catch (error) {
      res.status(500).json({ error });
    }
  });
};