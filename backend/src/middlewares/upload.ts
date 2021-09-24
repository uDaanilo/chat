import multer from "multer";
import multerCatbox from "../config/multer-catbox";

export default multer({
  storage: multerCatbox,
  fileFilter(req, file, cb) {
    if(file.mimetype.search('image') == -1)
      return cb(new Error('Formato de arquivo não suportado'))

    cb(null, true)
  },
  limits: {
    fileSize: (4 * 1024 * 1024)
  },
})