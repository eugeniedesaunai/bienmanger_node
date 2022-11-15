"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const EtapeController_1 = require("../controllers/EtapeController");
const etapeController = new EtapeController_1.EtapeController();
exports.router = express_1.default.Router({
    strict: true
});
// Voir une ou plusieurs Etape
exports.router.get('/etapes', (req, res) => etapeController.read(req, res));
exports.router.get('/etape/voir/:id', (req, res) => etapeController.voirEtape(req, res));
// Créer une Etape 
exports.router.post('/etape/ajouter', (req, res) => etapeController.create(req, res));
// Supprimer une Etape 
exports.router.delete('/etape/supprimer/:id', (req, res) => etapeController.delete(req, res));
// MAJ Etape 
exports.router.post('/etape/maj/:id', (req, res) => etapeController.update(req, res));
