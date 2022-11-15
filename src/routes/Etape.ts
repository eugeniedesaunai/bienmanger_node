import express, { Request, Response } from 'express';
import { EtapeController } from '../controllers/EtapeController';

const etapeController = new EtapeController();

export const router = express.Router({
    strict: true
});

// Voir une ou plusieurs Etape
router.get('/etapes', (req: Request, res: Response) => etapeController.read(req, res));
router.get('/etape/voir/:id', (req, res) => etapeController.voirEtape(req, res));

// Créer une Etape 
router.post('/etape/ajouter', (req: Request, res: Response) => etapeController.create(req, res));
// Supprimer une Etape 
router.delete('/etape/supprimer/:id', (req: Request, res: Response) => etapeController.delete(req, res));
// MAJ Etape 
router.post('/etape/maj/:id', (req: Request, res: Response) => etapeController.update(req, res));