import express, { Request, Response } from 'express';
import { IngredientController } from '../controllers/IngredientController';

const ingredientController = new IngredientController();

export const router = express.Router({
    strict: true
});

// Voir une ou plusieurs Recette
router.get('/ingredient', (req: Request, res: Response) => ingredientController.read(req, res));
router.get('/ingredient/voir/:id', (req, res) => ingredientController.voirIngredient(req, res));

// Créer une Recette 
router.post('/ingredient/ajouter', (req: Request, res: Response) => ingredientController.create(req, res));
// Supprimer une Recette 
router.delete('/ingredient/supprimer/:id', (req: Request, res: Response) => ingredientController.delete(req, res));
// MAJ Recette 
router.post('/ingredient/maj/:id', (req: Request, res: Response) => ingredientController.update(req, res));


router.post('/signin', (req: Request, res: Response) => ingredientController.create(req, res));