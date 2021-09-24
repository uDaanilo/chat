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
var mongoose_1 = require("mongoose");
var User_1 = __importDefault(require("../../models/User"));
var jsonwebtoken_1 = require("jsonwebtoken");
var bcryptjs_1 = require("bcryptjs");
var UserService = /** @class */ (function () {
    function UserService() {
    }
    UserService.prototype.get = function () {
        return __awaiter(this, void 0, void 0, function () {
            var users;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, User_1.default.find()];
                    case 1:
                        users = _a.sent();
                        return [2 /*return*/, users];
                }
            });
        });
    };
    UserService.prototype.getById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!id)
                            throw new Error('Id is mandatory');
                        if (!mongoose_1.isValidObjectId(id))
                            throw new Error('Invalid id');
                        return [4 /*yield*/, User_1.default.findOne({ _id: id })];
                    case 1:
                        user = _a.sent();
                        return [2 /*return*/, user];
                }
            });
        });
    };
    UserService.prototype.getByEmail = function (email) {
        return __awaiter(this, void 0, void 0, function () {
            var user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!email)
                            throw new Error('Email is mandatory');
                        return [4 /*yield*/, User_1.default.findOne({ email: email })];
                    case 1:
                        user = _a.sent();
                        return [2 /*return*/, user];
                }
            });
        });
    };
    UserService.prototype.create = function (_a) {
        var name = _a.name, email = _a.email, password = _a.password, img = _a.img;
        return __awaiter(this, void 0, void 0, function () {
            var userExists, passwordHash, user;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (name.length < 3)
                            throw new Error('Username min length 3');
                        if (password.length < 8)
                            throw new Error('Password min length 8');
                        return [4 /*yield*/, User_1.default.findOne({ email: email })];
                    case 1:
                        userExists = _b.sent();
                        if (userExists)
                            throw new Error('Este email já está em uso');
                        return [4 /*yield*/, bcryptjs_1.hash(password, 8)];
                    case 2:
                        passwordHash = _b.sent();
                        return [4 /*yield*/, User_1.default.create({ name: name, email: email, password: passwordHash, img: img })];
                    case 3:
                        user = _b.sent();
                        return [2 /*return*/, user];
                }
            });
        });
    };
    UserService.prototype.generateToken = function (_a) {
        var email = _a.email, password = _a.password;
        return __awaiter(this, void 0, void 0, function () {
            var user, isEqual, token;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!email || !password)
                            throw new Error('Email/senha incorretos');
                        return [4 /*yield*/, User_1.default.findOne({ email: email })
                                .select('+password')];
                    case 1:
                        user = _b.sent();
                        if (!user)
                            throw new Error('Email/senha incorretos');
                        return [4 /*yield*/, bcryptjs_1.compare(password, user.password)];
                    case 2:
                        isEqual = _b.sent();
                        if (!isEqual)
                            throw new Error('Email/senha incorretos');
                        token = jsonwebtoken_1.sign({
                            email: user
                        }, process.env.SECRET_KEY, {
                            subject: user.id,
                            expiresIn: '1d'
                        });
                        return [2 /*return*/, token];
                }
            });
        });
    };
    UserService.prototype.validateToken = function (token) {
        return __awaiter(this, void 0, void 0, function () {
            var sub, user, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        sub = jsonwebtoken_1.verify(token, process.env.SECRET_KEY).sub;
                        if (!sub)
                            throw 'Invalid token';
                        return [4 /*yield*/, this.getById(sub)];
                    case 1:
                        user = _a.sent();
                        if (!user)
                            throw 'Invalid token';
                        return [2 /*return*/, user];
                    case 2:
                        err_1 = _a.sent();
                        return [2 /*return*/, false];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return UserService;
}());
exports.default = UserService;
