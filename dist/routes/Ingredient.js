"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const IngredientController_1 = require("../controllers/IngredientController");
const ingredientController = new IngredientController_1.IngredientController();
exports.router = express_1.default.Router({
    strict: true
});
// Voir une ou plusieurs Recette
exports.router.get('/ingredient', (req, res) => ingredientController.read(req, res));
exports.router.get('/ingredient/voir/:id', (req, res) => ingredientController.voirIngredient(req, res));
// Créer une Recette 
exports.router.post('/ingredient/ajouter', (req, res) => ingredientController.create(req, res));
// Supprimer une Recette 
exports.router.delete('/ingredient/supprimer/:id', (req, res) => ingredientController.delete(req, res));
// MAJ Recette 
exports.router.post('/ingredient/maj/:id', (req, res) => ingredientController.update(req, res));
exports.router.post('/signin', (req, res) => ingredientController.create(req, res));
