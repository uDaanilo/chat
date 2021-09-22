"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
require("express-async-errors");
var routes_1 = __importDefault(require("./routes"));
var cors_1 = __importDefault(require("cors"));
var websocket_1 = __importDefault(require("./websocket"));
var errorHandler_1 = __importDefault(require("../middlewares/errorHandler"));
var Api = /** @class */ (function () {
    function Api() {
        this.app = express_1.default();
        this.middlewares();
        this.routes();
        this.errorHandler();
    }
    Api.prototype.middlewares = function () {
        this.app.use(cors_1.default());
        this.app.use(express_1.default.json());
    };
    Api.prototype.routes = function () {
        this.app.use(routes_1.default);
    };
    Api.prototype.startWebsocket = function (io) {
        this.io = io;
        new websocket_1.default(io);
    };
    Api.prototype.errorHandler = function () {
        this.app.use(errorHandler_1.default);
    };
    return Api;
}());
exports.default = new Api();
