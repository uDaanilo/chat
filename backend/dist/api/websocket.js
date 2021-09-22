"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var logger_1 = require("../logger");
var authenticatedSocket_1 = __importDefault(require("../middlewares/authenticatedSocket"));
var service_1 = __importDefault(require("../modules/Message/service"));
var Websocket = /** @class */ (function () {
    function Websocket(io) {
        this.connectedUsers = new Map();
        this.messageService = new service_1.default();
        this.io = io;
        this.middlewares();
        this.init();
    }
    Websocket.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.io.on('connection', function (socket) { return __awaiter(_this, void 0, void 0, function () {
                    var user;
                    var _this = this;
                    return __generator(this, function (_a) {
                        user = socket.handshake.user;
                        if (this.verifyAlreadyConnected(user, socket))
                            return [2 /*return*/];
                        this.connectedUsers.set(user.id, { user: user, socket: socket });
                        logger_1.logger.info("New user " + user.name + " has connected");
                        this.emitConnectedUsers();
                        socket.on('message', function (content) {
                            _this.message(content, user);
                        });
                        socket.on('disconnect', function () { return _this.disconnect(user); });
                        return [2 /*return*/];
                    });
                }); });
                return [2 /*return*/];
            });
        });
    };
    Websocket.prototype.verifyAlreadyConnected = function (user, socket) {
        if (this.connectedUsers.get(user.id)) {
            logger_1.logger.info("User " + user.name + " already connected, kicking off");
            setTimeout(function () {
                socket.emit("already_connected");
                socket.disconnect(true);
            }, 500);
            return true;
        }
        return false;
    };
    Websocket.prototype.middlewares = function () {
        this.io.use(authenticatedSocket_1.default);
    };
    Websocket.prototype.message = function (content, user) {
        return __awaiter(this, void 0, void 0, function () {
            var createMessage;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.messageService.create({ author: user.id, content: content })];
                    case 1:
                        createMessage = _a.sent();
                        this.io.emit('message', createMessage);
                        return [2 /*return*/];
                }
            });
        });
    };
    Websocket.prototype.disconnect = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                logger_1.logger.info("User " + user.name + " has disconnected");
                this.connectedUsers.delete(user.id);
                this.emitConnectedUsers();
                return [2 /*return*/];
            });
        });
    };
    Websocket.prototype.emitConnectedUsers = function () {
        return __awaiter(this, void 0, void 0, function () {
            var formattedConnectedUsers;
            var _this = this;
            return __generator(this, function (_a) {
                formattedConnectedUsers = [];
                this.connectedUsers.forEach(function (userSocket) {
                    formattedConnectedUsers.push({
                        id: userSocket.user.id,
                        name: userSocket.user.name,
                        img: userSocket.user.img,
                        socketId: userSocket.socket.id
                    });
                });
                setTimeout(function () { return _this.io.emit("connected_users", formattedConnectedUsers); }, 500);
                return [2 /*return*/];
            });
        });
    };
    return Websocket;
}());
exports.default = Websocket;
