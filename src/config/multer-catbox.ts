import { StorageEngine } from "multer"
import fetch from "node-fetch"
import FormData from 'form-data'
import { Request } from "express"

export interface MulterCatboxFile extends Partial<Express.Multer.File> {
  url?: string
}

class MulterCatbox implements StorageEngine {
  async _handleFile(req: Request, file: Express.Multer.File, cb: (error?: any, out?: MulterCatboxFile) => void) {
    const form = new FormData()

    form.append('reqtype', 'fileupload')
    form.append('fileToUpload', file.stream, {
      contentType: file.mimetype,
      filename: file.originalname,
    })

    fetch('https://catbox.moe/user/api.php', {
      method: 'POST',
      body: form
    })
      .then(async res => {
        cb(null, { url: await res.text() })
      })
      .catch(cb)
  }

   _removeFile(req: Request, file: Express.Multer.File, cb) {

  }
}

export default new MulterCatbox()