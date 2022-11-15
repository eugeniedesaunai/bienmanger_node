import express, { Request, Response } from 'express';
import { SaisonController } from '../controllers/SaisonController';

const saisonController = new SaisonController();

export const router = express.Router({
    strict: true
});

// Voir une ou plusieurs Saison
router.get('/saisons', (req: Request, res: Response) => saisonController.read(req, res));
router.get('/saison/voir/:id', (req, res) => saisonController.voirSaison(req, res));

// Créer une Saison 
router.post('/saison/ajouter', (req: Request, res: Response) => saisonController.create(req, res));
// Supprimer une Saison 
router.delete('/saison/supprimer/:id', (req: Request, res: Response) => saisonController.delete(req, res));
// MAJ Saison
router.post('/saison/maj/:id', (req: Request, res: Response) => saisonController.update(req, res));