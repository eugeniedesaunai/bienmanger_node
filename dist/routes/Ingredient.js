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
const IngredientController_1 = require("../controllers/IngredientController");
const Auth = __importStar(require("../middleware/authenticate"));
const ingredientController = new IngredientController_1.IngredientController();
exports.router = express_1.default.Router({
    strict: true
});
// Voir une ou plusieurs Recette
exports.router.get('/ingredient', (req, res) => ingredientController.read(req, res));
exports.router.get('/ingredient/voir/:id', (req, res) => ingredientController.voirIngredient(req, res));
// Créer une Recette 
exports.router.route('/ingredient/ajouter').post(Auth.authorize(['addRecipe']), ingredientController.create);
// Supprimer une Recette 
exports.router.route('/ingredient/supprimer/:id').delete(Auth.authorize(['addRecipe']), ingredientController.delete);
// MAJ Recette 
exports.router.post('/ingredient/maj/:id', (req, res) => ingredientController.update(req, res));
exports.router.post('/signin', (req, res) => ingredientController.create(req, res));
