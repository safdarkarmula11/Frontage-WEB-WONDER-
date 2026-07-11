import multer from "multer";
import path from "path";
import fs from "fs";

const ALLOWED_TYPES = ["image/jpeg", "image/png", "image/webp", "image/gif"];
const MAX_SIZE = 5 * 1024 * 1024; // 5MB

function imageFileFilter(req, file, cb) {
  if (!ALLOWED_TYPES.includes(file.mimetype)) {
    return cb(new Error("Only JPG, PNG, WEBP, or GIF images are allowed."));
  }

  cb(null, true);
}

function makeUploader(folder) {
  fs.mkdirSync(folder, { recursive: true });

  const storage = multer.diskStorage({
    destination(req, file, cb) {
      cb(null, folder);
    },

    filename(req, file, cb) {
      const ext = path.extname(file.originalname);

      cb(null, `${Date.now()}${ext}`);
    },
  });

  return multer({
    storage,
    fileFilter: imageFileFilter,
    limits: { fileSize: MAX_SIZE },
  });
}

// Existing dinosaur image uploads (admin) — same usage as before,
// now with type/size restrictions added.
const upload = makeUploader("uploads/dinosaurs");

// Fossil Find photo uploads (any logged-in user)
export const uploadFossilImage = makeUploader("uploads/fossils");

export default upload;