"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const RecipeController_1 = require("../controllers/RecipeController");
const recipeController = new RecipeController_1.RecipeController();
exports.router = express_1.default.Router({
    strict: true
});
// Voir une ou plusieurs Recette
exports.router.get('/recette', (req, res) => recipeController.read(req, res));
exports.router.get('/recette/voir/:id', (req, res) => recipeController.voirRecette(req, res));
// Créer une Recette 
exports.router.post('/recette/ajouter', (req, res) => recipeController.create(req, res));
// Supprimer une Recette 
exports.router.delete('/recette/supprimer/:id', (req, res) => recipeController.delete(req, res));
// MAJ Recette 
exports.router.post('/recette/maj/:id', (req, res) => recipeController.update(req, res));
