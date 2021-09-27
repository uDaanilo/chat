"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var controller_1 = __importDefault(require("../modules/User/controller"));
var controller_2 = __importDefault(require("../modules/Message/controller"));
var upload_1 = __importDefault(require("../middlewares/upload"));
var passport_1 = require("../config/passport");
var Routes = /** @class */ (function () {
    function Routes() {
        this.router = express_1.Router();
        this.routes();
    }
    Routes.prototype.routes = function () {
        var userController = new controller_1.default();
        var msgController = new controller_2.default();
        this.router.get('/user', passport_1.authJwt, userController.index);
        this.router.get('/user/:id', passport_1.authJwt, userController.getById);
        this.router.post('/user/validate', userController.validateToken);
        this.router.post('/user', upload_1.default.single('img'), userController.create);
        this.router.post('/login', userController.signin);
        this.router.post('/login/github', passport_1.authGh, userController.signinWithGithub);
        this.router.get('/message', passport_1.authJwt, msgController.index);
        this.router.post('/message/image', passport_1.authJwt, upload_1.default.single('img'), msgController.image);
    };
    return Routes;
}());
exports.default = new Routes().router;
