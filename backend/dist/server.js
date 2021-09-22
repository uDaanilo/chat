"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = __importDefault(require("./api/app"));
var mongoose_1 = __importDefault(require("mongoose"));
var http_1 = __importDefault(require("http"));
var socket_io_1 = require("socket.io");
var logger_1 = require("./logger");
var io;
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
mongoose_1.default.connect(process.env.DB_HOST, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})
    .then(function () {
    var server = http_1.default.createServer(app_1.default.app);
    io = new socket_io_1.Server(server, {
        cors: {
            origin: '*'
        }
    });
    app_1.default.startWebsocket(io);
    var PORT = process.env.PORT || 8080;
    server.listen(PORT, function () {
        logger_1.logger.info("Server listening on " + PORT);
    });
})
    .catch(logger_1.logger.error);
