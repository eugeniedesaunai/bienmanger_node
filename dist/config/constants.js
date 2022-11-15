"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BCRYPT_ROUND = exports.DBPASSWORD = exports.DBUSER = exports.DBNAME = exports.PORT = void 0;
const process_1 = __importDefault(require("process"));
exports.PORT = process_1.default.env.PORT || 8000;
exports.DBNAME = process_1.default.env.DBNAME || '';
exports.DBUSER = process_1.default.env.DBUSER || '';
exports.DBPASSWORD = process_1.default.env.DBPASSWORD || '';
exports.BCRYPT_ROUND = process_1.default.env.BCRYPT_ROUND || 14;
