import multer from "multer";
import cloudinary from "../config/cloudinary.js";
import { CloudinaryStorage } from "multer-storage-cloudinary";

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "notes_profile_pictures",
    allowed_formats: ["jpg", "png", "jpeg", "webp"],
  },
  limits: {
    filesize: 2 * 1024 * 1024,
  },
});

const upload = multer({ storage });

export default upload;
