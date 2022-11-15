import express, { Request, Response } from 'express';
import { ImageController } from '../controllers/ImageController';

const imageController = new ImageController();

export const router = express.Router({
    strict: true
});

// Voir une ou plusieurs Image
router.get('/images', (req: Request, res: Response) => imageController.read(req, res));
router.get('/image/voir/:id', (req, res) => imageController.voirImage(req, res));

// Créer une Image 
router.post('/image/ajouter', (req: Request, res: Response) => imageController.create(req, res));
// Supprimer une Image 
router.delete('/image/supprimer/:id', (req: Request, res: Response) => imageController.delete(req, res));
// MAJ Image 
router.post('/image/maj/:id', (req: Request, res: Response) => imageController.update(req, res));