import express, { Request, Response } from 'express';
import { UtilisateurController } from '../controllers/UtilisateurController';

const utilisateurController = new UtilisateurController();

export const router = express.Router({
    strict: true
});


// Utilisateur 
router.get('/utilisateurs', (req: Request, res: Response) => utilisateurController.read(req, res));
router.get('/utilisateur/voir/:id', (req, res) => utilisateurController.voirUtilisateur(req, res));
// Créer une Utilisateur 
router.post('/utilisateur/ajouter', (req: Request, res: Response) => utilisateurController.create(req, res));
// Supprimer une Utilisateur 
router.delete('/utilisateur/supprimer/:id', (req: Request, res: Response) => utilisateurController.delete(req, res));
// MAJ Utilisateur 
router.post('/utilisateur/maj/:id', (req: Request, res: Response) => utilisateurController.update(req, res));