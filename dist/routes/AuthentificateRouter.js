"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const AuthenticateController_1 = require("../controllers/AuthenticateController");
const authenticateController = new AuthenticateController_1.AuthenticateController();
exports.router = express_1.default.Router({
    strict: true
});
exports.router.route('/enregistrer').post(authenticateController.signin);
exports.router.route('/login').post(authenticateController.login);
