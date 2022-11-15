
import express, { Request, Response } from 'express';
import { RecipeController } from '../controllers/RecipeController';

const recipeController = new RecipeController();

export const router = express.Router({
    strict: true
});

// Voir une ou plusieurs Recette
router.get('/recette', (req: Request, res: Response) => recipeController.read(req, res));
router.get('/recette/voir/:id', (req, res) => recipeController.voirRecette(req, res));

// Créer une Recette 
router.post('/recette/ajouter', (req: Request, res: Response) => recipeController.create(req, res));
// Supprimer une Recette 
router.delete('/recette/supprimer/:id', (req: Request, res: Response) => recipeController.delete(req, res));
// MAJ Recette 
router.post('/recette/maj/:id', (req: Request, res: Response) => recipeController.update(req, res));