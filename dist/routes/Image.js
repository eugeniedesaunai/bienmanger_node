"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const ImageController_1 = require("../controllers/ImageController");
const imageController = new ImageController_1.ImageController();
exports.router = express_1.default.Router({
    strict: true
});
// Voir une ou plusieurs Image
exports.router.get('/images', (req, res) => imageController.read(req, res));
exports.router.get('/image/voir/:id', (req, res) => imageController.voirImage(req, res));
// Créer une Image 
exports.router.post('/image/ajouter', (req, res) => imageController.create(req, res));
// Supprimer une Image 
exports.router.delete('/image/supprimer/:id', (req, res) => imageController.delete(req, res));
// MAJ Image 
exports.router.post('/image/maj/:id', (req, res) => imageController.update(req, res));
