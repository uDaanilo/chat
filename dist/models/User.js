"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var UserSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
    },
    password: {
        type: String,
        select: false
    },
    img: {
        type: String,
        required: true,
        default: 'https://files.catbox.moe/r51t0h.png'
    },
    githubId: {
        type: String
    }
}, {
    timestamps: true
});
exports.default = mongoose_1.model('User', UserSchema);
