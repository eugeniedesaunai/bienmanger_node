"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const SaisonController_1 = require("../controllers/SaisonController");
const saisonController = new SaisonController_1.SaisonController();
exports.router = express_1.default.Router({
    strict: true
});
// Voir une ou plusieurs Saison
exports.router.get('/saisons', (req, res) => saisonController.read(req, res));
exports.router.get('/saison/voir/:id', (req, res) => saisonController.voirSaison(req, res));
// Créer une Saison 
exports.router.post('/saison/ajouter', (req, res) => saisonController.create(req, res));
// Supprimer une Saison 
exports.router.delete('/saison/supprimer/:id', (req, res) => saisonController.delete(req, res));
// MAJ Saison
exports.router.post('/saison/maj/:id', (req, res) => saisonController.update(req, res));
