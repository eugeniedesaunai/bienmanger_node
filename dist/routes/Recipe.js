"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const RecipeController_1 = require("../controllers/RecipeController");
const Auth = __importStar(require("../middleware/authenticate"));
const recipeController = new RecipeController_1.RecipeController();
exports.router = express_1.default.Router({
    strict: true
});
// Voir une ou plusieurs Recette
exports.router.get('/recette', (req, res) => recipeController.read(req, res));
exports.router.get('/recette/voir/:id', (req, res) => recipeController.voirRecette(req, res));
// Créer une Recette, protégé par une autorisation
exports.router.route('/recette/ajouter').post(Auth.authorize(['addRecipe']), recipeController.create);
// Supprimer une Recette 
exports.router.delete('/recette/supprimer/:id', (req, res) => recipeController.delete(req, res));
// MAJ Recette 
exports.router.post('/recette/maj/:id', (req, res) => recipeController.update(req, res));
