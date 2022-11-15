"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const PermissionController_1 = require("../controllers/PermissionController");
const permissionController = new PermissionController_1.PermissionController();
exports.router = express_1.default.Router({
    strict: true
});
// Voir une ou plusieurs Permission
exports.router.get('/permissions', (req, res) => permissionController.read(req, res));
exports.router.get('/permission/voir/:id', (req, res) => permissionController.voirPermission(req, res));
// Créer une Permission 
exports.router.post('/permission/ajouter', (req, res) => permissionController.create(req, res));
// Supprimer une Permission 
exports.router.delete('/permission/supprimer/:id', (req, res) => permissionController.delete(req, res));
// MAJ Permission 
exports.router.post('/permission/maj/:id', (req, res) => permissionController.update(req, res));
