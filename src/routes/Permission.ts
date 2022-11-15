import express, { Request, Response } from 'express';
import { PermissionController } from '../controllers/PermissionController';

const permissionController = new PermissionController();

export const router = express.Router({
    strict: true
});

// Voir une ou plusieurs Permission
router.get('/permissions', (req: Request, res: Response) => permissionController.read(req, res));
router.get('/permission/voir/:id', (req, res) => permissionController.voirPermission(req, res));

// Créer une Permission 
router.post('/permission/ajouter', (req: Request, res: Response) => permissionController.create(req, res));
// Supprimer une Permission 
router.delete('/permission/supprimer/:id', (req: Request, res: Response) => permissionController.delete(req, res));
// MAJ Permission 
router.post('/permission/maj/:id', (req: Request, res: Response) => permissionController.update(req, res));