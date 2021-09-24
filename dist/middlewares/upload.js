"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var multer_1 = __importDefault(require("multer"));
var multer_catbox_1 = __importDefault(require("../config/multer-catbox"));
exports.default = multer_1.default({
    storage: multer_catbox_1.default,
    fileFilter: function (req, file, cb) {
        if (file.mimetype.search('image') == -1)
            return cb(new Error('Formato de arquivo não suportado'));
        cb(null, true);
    },
    limits: {
        fileSize: (4 * 1024 * 1024)
    },
});
