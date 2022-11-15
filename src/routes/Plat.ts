import express, { Request, Response } from 'express';
import { PlatController } from '../controllers/PlatController';

const platController = new PlatController();

export const router = express.Router({
    strict: true
});

// Voir une ou plusieurs Plat
router.get('/plats', (req: Request, res: Response) => platController.read(req, res));
router.get('/plat/voir/:id', (req, res) => platController.voirPlat(req, res));

// Créer une Plat 
router.post('/plat/ajouter', (req: Request, res: Response) => platController.create(req, res));
// Supprimer une Plat 
router.delete('/plat/supprimer/:id', (req: Request, res: Response) => platController.delete(req, res));
// MAJ Plat 
router.post('/plat/maj/:id', (req: Request, res: Response) => platController.update(req, res));