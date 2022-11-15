"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const PlatController_1 = require("../controllers/PlatController");
const platController = new PlatController_1.PlatController();
exports.router = express_1.default.Router({
    strict: true
});
// Voir une ou plusieurs Plat
exports.router.get('/plats', (req, res) => platController.read(req, res));
exports.router.get('/plat/voir/:id', (req, res) => platController.voirPlat(req, res));
// Créer une Plat 
exports.router.post('/plat/ajouter', (req, res) => platController.create(req, res));
// Supprimer une Plat 
exports.router.delete('/plat/supprimer/:id', (req, res) => platController.delete(req, res));
// MAJ Plat 
exports.router.post('/plat/maj/:id', (req, res) => platController.update(req, res));
