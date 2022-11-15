import { Utilisateur } from './../model/Utilisateur';
import { CrudController } from "./CrudController";
import { Request, Response } from 'express';

export class UtilisateurController extends CrudController {
    public read(req: Request, res: Response): void {
        Utilisateur.findAll().then(utilisateurs => res.json(utilisateurs));

    }
    public voirUtilisateur(req: Request, res: Response): void {
        Utilisateur.findAll({ where: { id: req.params.id } }).then(utilisateur => res.json(utilisateur));
    }
    public create(req: Request, res: Response): void {
        Utilisateur.create({
            "id": req.body.id,
            "nom": req.body.nom,
            "prenom": req.body.prenom,
            "mail": req.body.mail,
            "mdp": req.body.mdp,
            "permission_id": req.body.permission_id,
        }).then(utilisateur => res.json(utilisateur));
    }

    public delete(req: Request, res: Response): void {
        Utilisateur.destroy({
            where: { id: req.params.id }
        }).then(utilisateur => res.json(utilisateur));
    }

    public update(req: Request, res: Response): void {
        Utilisateur.update({
            "id": req.body.id,
            "nom": req.body.nom,
            "prenom": req.body.prenom,
            "mail": req.body.mail,
            "mdp": req.body.mdp,
            "permission_id": req.body.permission_id,
        }, { where: { id: req.params.id } }).then(utilisateur => res.json(utilisateur));
    }
}