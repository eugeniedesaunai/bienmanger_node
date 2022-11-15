"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const UtilisateurController_1 = require("../controllers/UtilisateurController");
const utilisateurController = new UtilisateurController_1.UtilisateurController();
exports.router = express_1.default.Router({
    strict: true
});
// Utilisateur 
exports.router.get('/utilisateurs', (req, res) => utilisateurController.read(req, res));
exports.router.get('/utilisateur/voir/:id', (req, res) => utilisateurController.voirUtilisateur(req, res));
// Créer une Utilisateur 
exports.router.post('/utilisateur/ajouter', (req, res) => utilisateurController.create(req, res));
// Supprimer une Utilisateur 
exports.router.delete('/utilisateur/supprimer/:id', (req, res) => utilisateurController.delete(req, res));
// MAJ Utilisateur 
exports.router.post('/utilisateur/maj/:id', (req, res) => utilisateurController.update(req, res));
