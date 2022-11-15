import express, { Request, Response } from 'express';
import { IngredientController } from '../controllers/IngredientController';
import * as Auth from '../middleware/authenticate';

const ingredientController = new IngredientController();

export const router = express.Router({
    strict: true
});

// Voir une ou plusieurs Recette
router.get('/ingredient', (req: Request, res: Response) => ingredientController.read(req, res));
router.get('/ingredient/voir/:id', (req, res) => ingredientController.voirIngredient(req, res));

// Créer une Recette 
router.route('/ingredient/ajouter').post(Auth.authorize(['addRecipe']), ingredientController.create);
// Supprimer une Recette 
router.route('/ingredient/supprimer/:id').delete(Auth.authorize(['addRecipe']), ingredientController.delete);
// MAJ Recette 
router.post('/ingredient/maj/:id', (req: Request, res: Response) => ingredientController.update(req, res));


router.post('/signin', (req: Request, res: Response) => ingredientController.create(req, res));